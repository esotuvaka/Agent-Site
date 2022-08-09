import { urlFor } from '../lib/sanity';
import Image from 'next/dist/client/image';
import { forwardRef } from 'react';

const Card = forwardRef(({ onClick, href, post }, ref) => {
	return (
		<div className="" href={href} onClick={onClick} ref={ref}>
			<div className="group relative bg-neutral-700 bg-blend-overlay hover:cursor-pointer">
				<img
					className="mb-2 h-full w-full md:mb-0 md:h-96 "
					alt={post.title + ' image'}
					src={urlFor(post.mainImage)}
				/>

				<div className="absolute bottom-0 ml-2 mb-2 text-white md:ml-4 md:mb-4">
					<h2 className="ad text-2xl font-semibold md:text-4xl">
						{post.title}
					</h2>
					<h3 className="os text-lg md:text-xl">{post.location}</h3>
				</div>

				<h4 className="os absolute right-0 bottom-0 mr-6 mb-4 hidden text-lg text-white group-hover:flex">
					VIEW DETAILS
				</h4>
			</div>

			<hr />
		</div>
	);
});

export default Card;
