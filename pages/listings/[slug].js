import groq from 'groq';
import Tag from '../../components/Tag';
import { PortableText } from '@PortableText/react';
import { urlFor } from '../../lib/sanity';
import { getClient } from '../../lib/sanity.server';
import Head from 'next/head';
import { useState, useReducer } from 'react';
import Contact from '../../components/Contact';

const PostComponents = {
	types: {
		image: ({ value }) => {
			return <img className="" alt={value.alt || ' '} src={urlFor(value)} />;
		},
	},
};

//Need to make the selectedImage the big image and highlight it's border in black in the mini grid below.
//useState to track the selectedImage, and update setSelectedImage when a mini image is clicked.
//if selectedImage is the big image then mini image needs to have its border changed to black.

const Post = ({ post }) => {
	console.log(post);

	const [selectedImage, setSelectedImage] = useState(urlFor(post.mainImage));

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
						<h4 className="flex w-2/5 items-center justify-center bg-black px-4 py-2 text-center uppercase text-white shadow-md shadow-neutral-600">
							{listType}
						</h4>
					</div>

					<div className="col-span-4 flex flex-col">
						<div id="MAIN_IMAGE" className="">
							<img
								src={selectedImage} //change to selectedImage
								alt={post.alt}
								className="  mx-auto flex h-[80vh] shadow-lg shadow-neutral-600"
							/>
						</div>

						<div className="mt-12 mb-2 grid grid-cols-3 gap-2">
							<img
								src={urlFor(post.mainImage)}
								alt={post.alt}
								onClick={() => setSelectedImage(urlFor(post.mainImage))}
								className={
									selectedImage ? 'propImageGallery' : 'propImageGallery'
								}
							/>
							{post.image2 && (
								<img
									src={urlFor(post.image2)}
									alt={post.alt}
									onClick={() => setSelectedImage(urlFor(post.image2))}
									className="propImageGallery"
								/>
							)}
							{post.image3 && (
								<img
									src={urlFor(post.image3)}
									alt={post.alt}
									onClick={() => setSelectedImage(urlFor(post.image3))}
									className="propImageGallery"
								/>
							)}
							{post.image4 && (
								<img
									src={urlFor(post.image4)}
									alt={post.alt}
									onClick={() => setSelectedImage(urlFor(post.image4))}
									className="propImageGallery"
								/>
							)}
							{post.image5 && (
								<img
									src={urlFor(post.image5)}
									alt={post.alt}
									onClick={() => setSelectedImage(urlFor(post.image5))}
									className="propImageGallery"
								/>
							)}
							{post.image6 && (
								<img
									src={urlFor(post.image6)}
									alt={post.alt}
									onClick={() => setSelectedImage(urlFor(post.image6))}
									className="propImageGallery"
								/>
							)}
						</div>
					</div>

					<div className="pl-8">
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

						{features && (
							<div>
								<p className="my-2 text-lg font-semibold">
									Features: {features}
								</p>
								<hr />
							</div>
						)}
						{mls && (
							<h5 className="os my-2 text-xl font-semibold">MLS: {mls}</h5>
						)}
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
					<div className="col-span-6 mx-auto w-full">
						<Contact />
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
	image2,
	image3,
	image4,
	image5,
	image6,
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
