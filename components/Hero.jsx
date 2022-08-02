import React from 'react';
import Image from 'next/image';
import background from '../public/assets/hero.jpg';
import { FaLinkedinIn, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Hero = () => {
	return (
		<div className="">
			<div id="home" className="h-screen w-full text-center">
				<div className="absolute left-0 bottom-0 mx-auto flex justify-center sm:ml-[10%] 2xl:ml-[15%]">
					<div className="flex max-w-[300px] items-center justify-center py-4  ">
						<a
							rel="noreferrer"
							href="https://www.linkedin.com/in/tamartarkhanian/"
							target="_blank"
							className="cursor-pointer p-6 text-xl text-black duration-300 ease-in hover:scale-110 hover:text-neutral-800 2xl:text-2xl"
							alt="Link to Tamar's LinkedIn"
						>
							<FaLinkedinIn />
						</a>
						<a
							rel="noreferrer"
							href="https://www.facebook.com/tamartarkhanianrealtor"
							target="_blank"
							className="cursor-pointer p-6 text-xl text-black duration-300 ease-in hover:scale-110 hover:text-neutral-800 2xl:text-2xl"
							alt="Link to Tamar's Facebook"
						>
							<FaFacebook />
						</a>
						<a
							rel="noreferrer"
							href="https://www.instagram.com/tamartar/"
							target="_blank"
							className="cursor-pointer p-6 text-xl text-black duration-300 ease-in hover:scale-110 hover:text-neutral-800 2xl:text-2xl"
							alt="Link to Tamar's Instagram"
						>
							<FaInstagram />
						</a>
					</div>
				</div>
				<div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2 2xl:max-w-[67%]">
					<div className="fixed top-0 -z-20 h-screen w-full bg-neutral-500">
						<Image
							className="w-full bg-cover bg-center bg-no-repeat bg-blend-overlay"
							id="hero"
							layout="fill"
							objectFit="cover"
							src={background}
							alt="A background of a modern living room, with a plant next to a sofa with many cushions, and a coffee table in front."
							priority
						/>
					</div>
					<div className="absolute z-10 mx-auto w-4/5">
						<h1 className="ad py-2 text-6xl font-semibold text-white md:text-8xl 2xl:text-8xl">
							Let&apos;s find your dream home
						</h1>
						<p className="m-auto max-w-[80%] pb-4 text-2xl text-white md:py-4 md:text-3xl"></p>
						<div className="">
							<button className="os mx-auto mt-12 flex rounded-sm border-2 border-white px-6 py-2 text-xl text-white transition-all duration-500 hover:border-neutral-900 hover:bg-neutral-900 hover:px-8 hover:text-white hover:shadow-md hover:shadow-neutral-500">
								<Link href="/#contact">BOOK AN APPOINTMENT</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
