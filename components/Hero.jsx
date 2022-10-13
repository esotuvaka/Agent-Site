import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import background from '../public/assets/hero.jpg';
import { FaLinkedinIn, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import { gsap, Power4 } from 'gsap';

const Hero = () => {
	let heroGreet = useRef(null);
	let heroBtn = useRef(null);
	let heroSocials = useRef(null);
	let heroImg = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			[heroGreet, heroSocials],
			{
				clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
				y: 50,
			},
			{
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				stagger: 0.5,
				duration: 1,
				delay: 1,
				ease: Power4.easeOut,
				y: 0,
			}
		);
		gsap.fromTo(
			heroBtn,
			{ opacity: 0 },
			{ opacity: 1, duration: 1, ease: Power4.easeOut, delay: 0.5 }
		);
		gsap.fromTo(
			heroImg,
			{ opacity: 0.7, scale: 1.1 },
			{ opacity: 1, scale: 1 }
		);
	}, []);

	return (
		<div className="">
			<div id="home" className="h-screen w-full text-center">
				<div className="absolute bottom-0 mx-auto flex w-full justify-center md:left-0 md:bottom-0 lg:ml-[10%] lg:w-min 2xl:ml-[15%]">
					<div
						ref={(el) => (heroSocials = el)}
						className="flex max-w-[300px] items-center justify-center py-4"
					>
						<div className="social-link">
							<FaFacebook />
						</div>
						<div className="social-link">
							<FaLinkedinIn />
						</div>
						<div className="social-link">
							<FaInstagram />
						</div>
					</div>
				</div>
				<div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2 2xl:max-w-[67%]">
					<div
						ref={(el) => (heroImg = el)}
						className="fixed top-0 -z-20 h-screen w-full bg-black"
					>
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
						<h1
							ref={(el) => (heroGreet = el)}
							className="ad py-2 text-6xl font-semibold text-white sm:text-8xl 2xl:text-8xl"
						>
							Let&apos;s find your dream home
						</h1>
						<div className="">
							<button
								ref={(el) => (heroBtn = el)}
								className="os mx-auto mt-12 flex rounded-sm border-2 border-neutral-900 bg-neutral-900 px-6 py-2 text-white opacity-0 transition-all duration-500 hover:border-neutral-800 hover:bg-neutral-800 hover:px-8 hover:text-white hover:shadow-md md:text-xl "
							>
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
