import { urlFor } from '../lib/sanity';
import Image from 'next/dist/client/image';
import { forwardRef } from 'react';

const Card = forwardRef(({ onClick, href, post }, ref) => {
	return (
		<div className="" href={href} onClick={onClick} ref={ref}>
			<div className="group relative bg-neutral-700 bg-blend-overlay hover:cursor-pointer">
				<img
					className="h-96 w-full  "
					alt={post.title + ' image'}
					src={urlFor(post.mainImage)}
				/>

				<div className="absolute bottom-0 ml-4 mb-4 text-white">
					<h2 className="ad text-4xl font-semibold">{post.title}</h2>
					<h3 className="os text-xl">{post.location}</h3>
				</div>
				{/* <p className="absolute bottom-0">
					Listed on: {new Date(post.publishedAt).toDateString()}, by{' '}
					{post.username}
				</p> */}

				<h4 className="os absolute right-0 bottom-0 mr-6 mb-4 hidden text-lg text-white group-hover:flex">
					VIEW DETAILS
				</h4>
			</div>

			<hr />
		</div>
	);
});

export default Card;
