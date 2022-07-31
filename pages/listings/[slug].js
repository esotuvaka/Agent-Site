import groq from 'groq';
import Tag from '../../components/Tag';
import { PortableText } from '@PortableText/react';
import { urlFor } from '../../lib/sanity';
import { getClient } from '../../lib/sanity.server';

const Post = ({ post }) => {
	console.log(post);

	const { title, categories, body, authorImage, username, about, publishedAt } =
		post;

	return (
		<>
			{post && (
				<article className="">
					<h1>title: {title}</h1>
					<hr />

					<img
						src={urlFor(post.mainImage)}
						alt={post.alt}
						className="h-96 w-96"
					/>

					<div className="flex flex-row">
						categies:
						{categories?.map((category) => (
							<>
								{category && <Tag key={category.id} title={category.title} />}
							</>
						))}
					</div>

					<hr />

					<p>{body}</p>
					<p>{username}</p>
					<p>{about}</p>
					<p>{publishedAt}</p>
				</article>
			)}
		</>
	);
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    "username": author->username,
    "about": author->bio,
    "categories": categories[]->{id, title},
    "authorImage": author->avatar,
    body,
    publishedAt,
    mainImage,
    postedAt
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
