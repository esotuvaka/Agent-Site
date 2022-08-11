import { urlFor } from '../lib/sanity';
import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const Card = forwardRef(({ onClick, href, post }, ref) => {
	return (
		<div className="" href={href} onClick={onClick} ref={ref}>
			<div className="group relative bg-neutral-700 bg-blend-overlay hover:cursor-pointer">
				<img
					className="mb-2 h-full w-full sm:mb-0 sm:h-52 lg:h-72 2xl:h-96"
					alt={post.title + ' image'}
					src={urlFor(post.mainImage)}
				/>

				<div className="absolute bottom-0 ml-2 mb-2 text-white lg:ml-4 lg:mb-4">
					<h2 className="ad text-2xl font-semibold sm:-mb-1 md:text-3xl lg:mb-0">
						{post.title}
					</h2>
					<h3 className="os text-lg md:text-lg">{post.location}</h3>
				</div>

				<h4 className="os absolute right-0 bottom-0 mr-6 mb-4 hidden text-lg text-white group-hover:flex">
					VIEW DETAILS
				</h4>
			</div>
		</div>
	);
});

export default Card;
