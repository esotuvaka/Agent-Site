import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/dist/client/image';
import Logo from '../public/assets/tamar-logo-b.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaInstagram, FaFacebook, FaLinkedinIn } from 'react-icons/fa';

const navBar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg] = useState('#ffff');
	const [linkColor, setLinkColor] = useState('#1f2937');

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<header
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? 'fixed z-[100] h-20  w-full shadow-md'
					: 'fixed z-[100]  h-20 w-full shadow-md'
			}
		>
			<div className="mx-auto flex h-full w-4/5 items-center justify-between md:max-w-[1240px] 2xl:max-w-[67%]">
				<Link href="/" className="h-[50px] w-[50px] ">
					<Image
						src={Logo}
						alt="/"
						width="50"
						height="50"
						className="hover:cursor-pointer"
					/>
				</Link>
				<div>
					<ul
						style={{ color: `${linkColor}` }}
						className="hidden tracking-wider md:flex "
					>
						<Link href="/">
							<li className="os ml-10 text-sm uppercase tracking-widest transition-all duration-500 hover:cursor-pointer hover:border-b hover:border-black 2xl:text-xl">
								Home
							</li>
						</Link>
						<Link href="/#about">
							<li className="os ml-10 text-sm uppercase tracking-widest transition-all duration-500 hover:cursor-pointer hover:border-b hover:border-black 2xl:text-xl">
								About
							</li>
						</Link>
						<Link href="/#properties">
							<li className="os ml-10 text-sm uppercase tracking-widest transition-all duration-500 hover:cursor-pointer hover:border-b hover:border-black 2xl:text-xl">
								Properties
							</li>
						</Link>
						<Link href="/#contact">
							<li className="os ml-10 text-sm uppercase tracking-widest transition-all duration-500 hover:cursor-pointer hover:border-b hover:border-black 2xl:text-xl">
								Contact
							</li>
						</Link>
					</ul>
					<div onClick={handleNav} className="md:hidden">
						<AiOutlineMenu size={25} />
					</div>
				</div>
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
							: 'fixed left-[-100%] top-0 p-10 duration-500 ease-in'
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Link href="/">
								<Image
									src="/../public/assets/tt-branding/tamar-logo-b.png"
									width="50"
									height="50"
									alt="/"
									priority
								/>
							</Link>
							<div
								onClick={handleNav}
								className="  cursor-pointer p-3 shadow-gray-400"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="my-4 border-b border-gray-300">
							<h1 className="w-[85%] py-4 text-center text-2xl font-semibold text-teal-800 md:w-[90%]">
								Let&apos;s find your dream home
							</h1>
						</div>
					</div>
					<div className="flex flex-col py-4">
						<ul className="uppercase">
							<Link href="/">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Home
								</li>
							</Link>
							<Link href="/#about">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									About
								</li>
							</Link>
							<Link href="/#properties">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Properties
								</li>
							</Link>
							<Link href="/#contact">
								<li
									onClick={() => setNav(false)}
									className="py-4 text-sm font-semibold text-teal-800"
								>
									Contact
								</li>
							</Link>
						</ul>
						<div className="pt-40">
							<p className="text-center uppercase tracking-widest text-teal-800">
								Let&apos;s Connect
							</p>
							<div className="my-4 flex w-full items-center justify-between sm:w-[80%]">
								<div className="cursor-pointer p-3 shadow-gray-400 duration-300 ease-in hover:scale-105">
									<FaLinkedinIn />
								</div>
								<div className="cursor-pointer p-3 shadow-gray-400 duration-300 ease-in hover:scale-105">
									<FaFacebook />
								</div>
								<div className="cursor-pointer p-3 shadow-gray-400 duration-300 ease-in hover:scale-105">
									<FaInstagram />
								</div>
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

export default navBar;
