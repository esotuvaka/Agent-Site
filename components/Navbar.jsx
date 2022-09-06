import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/dist/client/image';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaInstagram, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { gsap } from 'gsap';

const NavBar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	let header = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			header,
			{ opacity: 0, y: -100 },
			{ opacity: 1, y: 0, delay: 2, duration: 0.8 }
		);
	}, []);

	return (
		<header
			ref={(el) => (header = el)}
			className="fixed z-[100] h-20 w-screen bg-white shadow-md 2xl:w-full"
		>
			<div className="mx-auto flex h-full w-11/12 items-center justify-between md:w-5/6 2xl:max-w-[67%]">
				<Link href="/" className="h-[50px] w-[50px] ">
					<h1 className="text-center text-2xl font-semibold tracking-widest hover:cursor-pointer">
						JD
					</h1>
				</Link>
				<div>
					<ul className="hidden tracking-wider md:flex ">
						<Link href="/">
							<li className="navLi">Home</li>
						</Link>
						<Link href="/#about">
							<li className="navLi">About</li>
						</Link>
						<Link href="/#properties">
							<li className="navLi">Properties</li>
						</Link>
						<Link href="/#contact">
							<li className="navLi">Contact</li>
						</Link>
					</ul>

					<div onClick={handleNav} className="md:hidden">
						<AiOutlineMenu size={25} />
					</div>
				</div>
				<h1 className="p-4 text-center text-xl hover:cursor-pointer">BROKER</h1>
			</div>
			{/* MOBILE MENU */}
			<div
				className={
					nav ? 'fixed left-0 top-0 h-screen w-full bg-black/70 md:hidden' : ''
				}
			>
				<div
					className={
						nav
							? 'fixed left-0 top-0 h-screen w-[75%] bg-[#ffff] p-10 py-4 duration-500 ease-in sm:w-[60%] md:w-[45%]'
							: 'fixed left-[-150%] top-0 p-10 duration-500 ease-in'
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Link href="/">
								<h1 className="p-4 text-center text-2xl font-semibold tracking-widest">
									JD
								</h1>
							</Link>
							<div
								onClick={handleNav}
								className="cursor-pointer p-3 text-2xl text-black"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="my-4 border-b border-neutral-300">
							<h1 className="ad w-[85%] py-4 text-center text-2xl font-semibold text-black md:w-[90%]">
								Let&apos;s find your dream home
							</h1>
						</div>
					</div>
					<div className="flex flex-col py-4">
						<ul className="uppercase">
							<Link href="/">
								<li onClick={() => setNav(false)} className="os py-4 text-xl">
									Home
								</li>
							</Link>
							<Link href="/#about">
								<li onClick={() => setNav(false)} className="os py-4 text-xl">
									About
								</li>
							</Link>
							<Link href="/#properties">
								<li onClick={() => setNav(false)} className="os py-4 text-xl">
									Properties
								</li>
							</Link>
							<Link href="/#contact">
								<li
									onClick={() => setNav(false)}
									className="os py-4 text-xl text-black"
								>
									Contact
								</li>
							</Link>
						</ul>
						<div className="pt-40">
							<p className="text-center uppercase tracking-widest text-black">
								Let&apos;s Connect
							</p>
							<div className="my-4 flex w-full items-center justify-between sm:w-[80%]">
								<a
									rel="noreferrer"
									target="_blank"
									alt="Link to Tamar's LinkedIn"
									href="https://www.linkedin.com/in/tamartarkhanian/"
									className="cursor-pointer p-3 shadow-gray-400 duration-300 ease-in hover:scale-105"
								>
									<FaLinkedinIn />
								</a>
								<a
									rel="noreferrer"
									target="_blank"
									alt="Link to Tamar's Facebook"
									href="https://www.facebook.com/tamartarkhanianrealtor"
									className="cursor-pointer p-3 shadow-gray-400 duration-300 ease-in hover:scale-105"
								>
									<FaFacebook />
								</a>
								<a
									rel="noreferrer"
									target="_blank"
									alt="Link to Tamar's Instagram"
									href="https://www.instagram.com/tamartar/"
									className="cursor-pointer p-3 shadow-gray-400 duration-300 ease-in hover:scale-105"
								>
									<FaInstagram />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		// <nav className="">
		// 	<div id="navlogo" className="">
		// 		<Link href="/">
		// 			<Image
		// 				src={Logo}
		// 				alt="Tamar Tarkhanian Logo"
		// 				width={50}
		// 				height={50}
		// 			/>
		// 		</Link>
		// 	</div>
		// 	<div id="navlinks" className="">
		// 		<ul>
		// 			<li>
		// 				<Link href="/">HOME</Link>
		// 			</li>
		// 			<li>
		// 				<Link href="/">PROPERTIES</Link>
		// 			</li>
		// 			<li>
		// 				<Link href="/">ABOUT</Link>
		// 			</li>
		// 			<li>
		// 				<Link href="/">CONTACT</Link>
		// 			</li>
		// 		</ul>
		// 	</div>
		// </nav>
	);
};

export default NavBar;
