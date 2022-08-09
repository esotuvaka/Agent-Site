import React from 'react';
import Image from 'next/image';
import Tamar from '../public/assets/tamar-profile.jpg';

const About = () => {
	return (
		<div className="flex bg-white pt-8 md:h-[70vh] md:pt-24 ">
			<div id="about" className="transparent relative -top-44" />
			<div className="mx-auto grid w-11/12 grid-cols-7 items-center justify-center md:w-2/3">
				<div id="left" className="col-span-7 md:col-span-4 2xl:m-auto">
					<h1 className="ad text-5xl uppercase tracking-widest">About</h1>
					<h2 className="py-2 text-2xl md:py-4 md:text-3xl ">
						Meet Tamar Tarkhanian
					</h2>

					<p className="about-paragraph">
						Team up with a trusted neighborhood partner, and make your real
						estate dreams come true.
					</p>
					<p className="about-paragraph hidden md:block">
						I know this area - the right pricing, the latest listings, the ins
						and outs, and the buzz around town. From search to sale, I&apos;ll
						provide my strong negotiation skills, expert advice, and unwavering
						support to help make your experience stress-free.
					</p>
					<p className="about-paragraph">
						Whether it&apos;s finding you a home with everything on your
						checklist or helping you get ready to move, I&apos;ve got you
						covered. Advertising, financing, inspection and closing assistance,
						I&apos;ll handle it all from start to finish. Give me a call or stop
						by, I&apos;m right in the neighborhood!
					</p>
				</div>
				<div className="flex md:hidden" />
				<div className="flex md:hidden" />
				<div
					id="right"
					className="col-span-3 flex items-center justify-center md:col-span-3 "
				>
					<div className="flex  shadow-md shadow-neutral-600">
						<Image src={Tamar} alt="Real Estate Agent Tamar Tarkhanian" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
