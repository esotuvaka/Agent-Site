import groq from 'groq';
import Tag from '../../components/Tag';
import { urlFor } from '../../lib/sanity';
import { getClient } from '../../lib/sanity.server';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import Contact from '../../components/Contact';

const Post = ({ post }) => {
	console.log(post);

	console.log('main image url here ' + urlFor(post.mainImage));

	const [selectedImage, setSelectedImage] = useState(urlFor(post.mainImage));

	const title = post.title;
	const location = post.location;
	const username = post.username;
	const categories = post.categories;
	const description = post.description;
	const publishedAt = post.publishedAt;
	const mainImage = post.mainImage;
	const image2 = post.image2;
	const image3 = post.image3;
	const image4 = post.image4;
	const image5 = post.image5;
	const image6 = post.image6;
	const beds = post.beds;
	const baths = post.baths;
	const sqft = post.sqft;
	const listType = post.listType;
	const price = post.price;
	const mls = post.mls;
	const features = post.features;

	return (
		<>
			{post && (
				// GIANT mess of grid and media query widths. Should've prepared better with more nested divs rather than grid spanning to adjust content
				<article className="mx-auto grid grid-cols-6 py-24 pb-0 2xl:py-32">
					<div className="col-span-6 mx-auto flex w-11/12 justify-between md:w-5/6 2xl:w-2/3">
						<div className="col-span-6 sm:col-span-3 md:pb-4 lg:col-span-3 ">
							<h1 className="ad text-6xl">{title}</h1>
							<h2 className="os text-2xl">{location}</h2>

							<h3 className="ad my-2 text-2xl font-semibold tracking-wider">
								{price}
							</h3>
							<h4 className="mb-4 flex w-2/5 items-center justify-center bg-black px-4 py-2 text-center uppercase text-white shadow-md shadow-neutral-600 md:mb-0 lg:w-1/2">
								{listType}
							</h4>
						</div>

						<div className="hidden items-end justify-end pb-4 sm:flex ">
							{categories && (
								<>
									<div className="hidden flex-col items-end justify-center uppercase sm:flex">
										{categories?.map((category) => (
											<>
												{category && (
													<Tag key={category.title} title={category.title} />
												)}
												{console.log('category key / id: ' + category.id)}
											</>
										))}
									</div>
								</>
							)}
						</div>
					</div>
					<div className="col-span-6 mx-auto flex w-11/12 flex-col md:w-5/6 lg:col-span-6 xl:grid xl:grid-cols-6 2xl:w-2/3">
						<div id="MAIN_IMAGE" className="xl:col-span-4">
							<picture>
								<source srcSet={selectedImage} type="image" />
								<img
									src={selectedImage} //change to selectedImage
									alt={post.alt}
									className="mx-auto hidden shadow-md shadow-neutral-600 md:flex md:h-[430px] lg:h-[70vh] xl:h-[75vh] 2xl:h-[570px]"
								/>
							</picture>
						</div>

						<div className="mt-2 mb-2 grid grid-cols-1 gap-2 md:mt-4 md:grid-cols-3 xl:col-span-2 xl:my-0 xl:ml-4 xl:grid-cols-2 xl:grid-rows-3">
							<picture>
								<source srcSet={urlFor(mainImage)} type="image" />
								<img
									src={urlFor(mainImage)}
									alt={post.alt}
									onClick={() => setSelectedImage(urlFor(mainImage))}
									// Main Image variable css styling in case I want to make them more distinguished in the future (color filters, sizing, etc.)
									className={
										selectedImage ? 'propImageGallery ' : 'propImageGallery '
									}
								/>
							</picture>
							{post.image2 && (
								<picture>
									<source srcSet={urlFor(image2)} type="image" />
									<img
										src={urlFor(image2)}
										alt={post.alt}
										onClick={() => setSelectedImage(urlFor(image2))}
										className="propImageGallery"
									/>
								</picture>
							)}
							{post.image3 && (
								<picture>
									<source srcSet={urlFor(image3)} type="image" />
									<img
										src={urlFor(image3)}
										alt={post.alt}
										onClick={() => setSelectedImage(urlFor(image3))}
										className="propImageGallery"
									/>
								</picture>
							)}
							{post.image4 && (
								<picture>
									<source srcSet={urlFor(image4)} type="image" />
									<img
										src={urlFor(image4)}
										alt={post.alt}
										onClick={() => setSelectedImage(urlFor(image4))}
										className="propImageGallery"
									/>
								</picture>
							)}
							{post.image5 && (
								<picture>
									<source srcSet={urlFor(image5)} type="image" />
									<img
										src={urlFor(image5)}
										alt={post.alt}
										onClick={() => setSelectedImage(urlFor(image5))}
										className="propImageGallery"
									/>
								</picture>
							)}
							{post.image6 && (
								<picture>
									<source srcSet={urlFor(image6)} type="image" />
									<img
										src={urlFor(image6)}
										alt={post.alt}
										onClick={() => setSelectedImage(urlFor(image6))}
										className="propImageGallery"
									/>
								</picture>
							)}
						</div>
					</div>

					<div className="col-span-6 mx-auto w-11/12 md:w-5/6 lg:block xl:grid xl:grid-cols-2 2xl:w-2/3">
						{categories && (
							<>
								<div className="mt-4 mb-4 w-3/4 uppercase sm:hidden md:col-span-1 md:mt-0">
									{categories?.map((category) => (
										<>
											{category && (
												<Tag key={category.id} title={category.title} />
											)}
										</>
									))}
								</div>
							</>
						)}
						<div>
							<div className="os my-4 mb-6 text-lg xl:pt-4">
								<p>{description}</p>
							</div>
							<hr className="sm:hidden" />
						</div>
						<div className="xl:col-span-1 xl:my-4 xl:flex xl:flex-col xl:items-end xl:pt-4">
							<p className="os my-4 text-xl font-semibold xl:my-0">
								{beds} BEDS / {baths} BATHS / {sqft} Square Feet
							</p>
							<hr className="sm:hidden" />

							{features && (
								<div>
									<p className="my-4 text-lg font-semibold xl:my-0">
										Features: {features}
									</p>
									<hr className="sm:hidden" />
								</div>
							)}
							{mls && (
								<h5 className="os my-2 text-xl font-semibold">MLS: {mls}</h5>
							)}
							<div>
								<p className="os mt-2 text-xl font-semibold">
									Listed by {username} on {publishedAt}
								</p>
							</div>
						</div>
					</div>
					<div className="-pt-20 col-span-6 mx-auto w-full">
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
    "username": author->username, 
    "categories": categories[]->{id, title}, 
    description,
    publishedAt,
    mainImage,
	image2,
	image3,
	image4,
	image5,
	image6, 
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
		paths: paths.map((slug) => ({
			params: { slug },
		})),
		fallback: false,
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
