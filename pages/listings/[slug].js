import groq from 'groq';
import Tag from '../../components/Tag';
import { PortableText } from '@PortableText/react';
import { urlFor } from '../../lib/sanity';
import { getClient } from '../../lib/sanity.server';
import Head from 'next/head';
import author from '../../../backend/schemas/author';

const PostComponents = {
	types: {
		image: ({ value }) => {
			return <img className="" alt={value.alt || ' '} src={urlFor(value)} />;
		},
	},
};

const Post = ({ post }) => {
	console.log(post);

	const {
		title,
		location,
		listType,
		categories,
		body,
		authorImage,
		username,
		about,
		publishedAt,
		beds,
		baths,
		sqft,
		price,
		mls,
		features,
	} = post;

	return (
		<>
			{post && (
				<article className="mx-auto grid w-11/12 grid-cols-6 py-32">
					<div className="pt-24">
						<h1 className="ad text-6xl">{title}</h1>
						<h2 className="os text-2xl">{location}</h2>

						<h3 className="ad my-2 text-2xl font-semibold tracking-wider">
							{price}
						</h3>
						<h4 className="flex w-2/5 items-center justify-center bg-black px-4 py-2 text-center uppercase text-white">
							{listType}
						</h4>
					</div>
					<img
						src={urlFor(post.mainImage)}
						alt={post.alt}
						className="col-span-4 mx-auto flex h-[80vh] shadow-lg shadow-neutral-600"
					/>

					<div className=" pl-8">
						<div className="mb-4 w-3/4  uppercase">
							{categories?.map((category) => (
								<>
									{category && <Tag key={category.id} title={category.title} />}
								</>
							))}
						</div>

						<hr />

						<p className="os my-2 text-lg">
							<PortableText value={body} components={PostComponents} />
						</p>

						<hr />

						<p className="os my-2 text-xl font-semibold">
							{beds} BEDS / {baths} BATHS / {sqft} Square Feet
						</p>

						<hr />

						<p className="my-2 text-lg font-semibold">Features: {features}</p>

						<hr />

						<h5 className="os my-2 text-xl font-semibold">MLS: {mls}</h5>
						<div>
							<p className="os mt-2 text-xl font-semibold">
								Listed by {username} on {publishedAt}
							</p>
							<img
								src={urlFor(post.authorImage)}
								width="100"
								alt={`property listed by ${username}`}
							/>
						</div>
					</div>
				</article>
			)}
		</>
	);
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
	location,
	authorImage,
    "username": author->username,
    "about": author->bio,
    "categories": categories[]->{id, title},
    "authorImage": author->avatar,
    body,
    publishedAt,
    mainImage,
    postedAt,
	beds,
	baths,
	sqft,
	listType,
	price,
	mls,
	features
}`;

export async function getStaticPaths() {
	const paths = await getClient().fetch(
		groq`*[_type == "post" && defined(slug.current)][].slug.current`
	);

	return {
		paths: paths.map((slug) => ({ params: { slug } })),
		fallback: true,
	};
}

export async function getStaticProps({ params, preview = false }) {
	const post = await getClient(preview).fetch(query, { slug: params.slug });

	return {
		props: {
			post,
		},
	};
}

export default Post;
