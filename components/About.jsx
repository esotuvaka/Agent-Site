import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Tamar from '../public/assets/tamar-profile.jpg';

const About = () => {
	return (
		<div className="flex h-[70vh] bg-white pt-24 ">
			<div className="mx-auto grid w-2/3 grid-cols-7 items-center justify-center">
				<div id="left" className="col-span-4 2xl:m-auto">
					<h1 className="ad text-5xl uppercase tracking-widest">About</h1>
					<h2 className="py-4 text-3xl ">Meet Tamar Tarkhanian</h2>

					<p className="os py-2 text-neutral-700 ">
						Team up with a trusted neighborhood partner, and make your real
						estate dreams come true.
					</p>
					<p className="os py-2 text-neutral-700 ">
						I know this area - the right pricing, the latest listings, the ins
						and outs, and the buzz around town. From search to sale, I&apos;ll
						provide my strong negotiation skills, expert advice, and unwavering
						support to help make your experience stress-free.
					</p>
					<p className="os py-2 text-neutral-700 ">
						Whether it&apos;s finding you a home with everything on your
						checklist or helping you get ready to move, I&apos;ve got you
						covered. Advertising, financing, inspection and closing assistance,
						I&apos;ll handle it all from start to finish. Give me a call or stop
						by, I&apos;m right in the neighborhood!
					</p>
					<Link href="">
						<button className="os mx-auto mt-12 flex rounded-sm border-2 border-black px-6 py-3 text-xl transition-all duration-500 hover:border-neutral-900 hover:bg-neutral-900 hover:px-8 hover:text-white hover:shadow-md hover:shadow-neutral-500">
							More About Me
						</button>
					</Link>
				</div>
				<div
					id="right"
					className="col-span-3 flex items-center justify-center "
				>
					<div className="flex shadow-md shadow-neutral-500">
						<Image src={Tamar} alt="Real Estate Agent Tamar Tarkhanian" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
