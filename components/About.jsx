import React from 'react';
import Image from 'next/image';
import Ardito from '../public/assets/ardito.jpg';

const About = () => {
	return (
		<div className="flex bg-white pt-8 sm:pt-12 md:pt-16 lg:pt-24 ">
			<div id="about" className="transparent relative -top-44" />
			<div className="mx-auto grid w-11/12 grid-cols-7 md:w-5/6 lg:w-4/5 2xl:max-w-[67%]">
				<div
					id="left"
					className="col-span-7 sm:col-span-4 md:col-span-4 2xl:m-auto"
				>
					<h1 className="ad text-5xl uppercase tracking-widest">About</h1>
					<h2 className="py-2 text-2xl md:py-4 md:text-3xl ">Meet John Doe</h2>

					<p className="about-paragraph">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
						quasi numquam cum harum repellat explicabo placeat eos possimus
						voluptatibus, itaque, ab voluptatum deleniti suscipit temporibus.
						Numquam quae obcaecati dolores non.
					</p>
					<p className="about-paragraph hidden lg:block">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
						necessitatibus sit nihil perspiciatis aperiam tenetur, ducimus sunt
						expedita error! Illo enim excepturi doloremque inventore temporibus
						officiis quo quaerat dolor perferendis?
					</p>
					<p className="about-paragraph">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
						recusandae officia debitis obcaecati in quam quod est error alias
						laborum, eius qui molestiae, culpa eaque?
					</p>
				</div>
				<div className="flex sm:hidden" />
				<div className="flex sm:hidden" />
				<div
					id="right"
					className="col-span-3 flex items-center justify-center sm:ml-4 md:col-span-3 "
				>
					<div className="my-2 flex shadow-md shadow-neutral-600 sm:my-0 ">
						<Image src={Ardito} alt="/" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
