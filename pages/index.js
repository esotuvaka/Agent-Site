import Head from 'next/head';
import Image from 'next/image';
import { getClient } from '../lib/sanity.server';
import groq from 'groq';
import Card from '../components/Card';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
			<Navbar />
			<Hero />
			<About />
			<div className="h-[90vh] w-full bg-white">
				<div id="properties" className="transparent relative -top-10" />
				<div className="mx-auto grid w-4/5 grid-cols-3 pt-24">
					{posts?.map((post) => (
						<Link key={post._id} href="/">
							<Card post={post} />
						</Link>
					))}
				</div>
			</div>
			<Contact />
			<Footer />
		</div>
	);
};

export async function getStaticProps({ preview = false }) {
	const posts = await getClient(preview).fetch(groq`
    *[_type == "post"]{
        _id,
        title,
		location,
        "username": author->username,
        "categories": categories[]->{id, title},
        "authorImage": author->avatar,
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
