import Head from 'next/head';
import Image from 'next/image';
import { getClient } from '../lib/sanity.server';
import groq from 'groq';
import Card from '../components/Card';
import Link from 'next/link';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = ({ posts }) => {
	console.log(posts);
	return (
		<div className="">
			<Head>
				<title>Tamar Tarkhanian | Irvine Real Estate Agent</title>
				<meta name="description" content=" " />
				<meta name="viewport" content="initial-scale=1.0 width=device-width" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero />
			<About />
			{/* I want to refactor this into a component but it stops working when I do because of the query, and the passing of props. Will get to it eventually */}
			<div className="w-full bg-white pb-4 sm:pb-0 ">
				{/* Properties id placed inside invisible div for accurate smooth scroll anchor */}
				<div id="properties" className="absolute -mt-10" />
				<div className="mx-auto grid w-11/12 grid-cols-1 pt-8 sm:grid-cols-2 sm:gap-1 sm:pt-12 md:w-11/12 md:pt-16 lg:gap-2 lg:pt-24 xl:grid-cols-3">
					{posts?.map((post) => (
						<Link
							key={post._id}
							href="/listings/[slug]"
							as={`/listings/${post.slug.current}`}
							passHref
						>
							<Card post={post} />
						</Link>
					))}
				</div>
			</div>
			<Contact />
		</div>
	);
};

export async function getStaticProps({ preview = false }) {
	const posts = await getClient(preview).fetch(groq`
    *[_type == "post"]{
        _id,
        title,
		location, 
        "categories": categories[]->{id, title}, 
        body,
        mainImage,
        slug,
        publishedAt
    }`);
	return {
		props: {
			posts,
		},
	};
}

export default Home;
