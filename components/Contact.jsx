import React from 'react';
import { FaLinkedinIn, FaFacebook, FaInstagram, FaLink } from 'react-icons/fa';

const Contact = () => {
	return (
		<>
			<div className="w-full bg-white pb-12 lg:pb-16">
				<div id="contact" className="absolute -mt-20 " />
				<div className="mx-auto grid w-11/12 grid-cols-7 sm:pt-12 md:w-5/6 md:pt-16  lg:gap-4 lg:pt-24 2xl:max-w-[67%]">
					<div className="col-span-7 flex flex-col lg:col-span-3">
						<h1 className="ad mt-4 text-5xl uppercase tracking-widest sm:mt-0">
							CONTACT
						</h1>
						<div>
							<div className="hidden flex-col lg:flex">
								<h2 className="py-2 text-3xl md:py-4 lg:py-2">
									Tamar Tarkhanian
								</h2>
								<h3 className="pt-4 text-xl font-semibold text-neutral-900 lg:text-lg">
									PHONE
								</h3>
								<p className="text-xl">714.813.2034</p>
								<h3 className="pt-4 text-xl font-semibold text-neutral-900 lg:text-lg">
									EMAIL
								</h3>
								<p className="text-xl lg:text-lg">
									TAMAR.TARKHANIAN@CBREALTY.COM
								</p>
								<h3 className="pt-4 text-xl font-semibold text-neutral-900 lg:text-lg">
									ADDRESS
								</h3>
								<p className="text-xl lg:text-lg">
									31582 COAST HWY LAGUNA BEACH, CA 92651
								</p>
								<p className="pt-8 text-xl font-semibold text-neutral-900 lg:text-lg">
									COLDWELL BANKER REALTY | DRE# 01891979
								</p>
								<div id="socials" className="flex pt-4">
									<FaFacebook className="mx-2 text-2xl transition-all duration-500 hover:cursor-pointer hover:text-neutral-700" />
									<FaInstagram className="mx-2 text-2xl transition-all duration-500 hover:cursor-pointer hover:text-neutral-700" />
									<FaLinkedinIn className="mx-2 text-2xl transition-all duration-500 hover:cursor-pointer hover:text-neutral-700" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-7 flex flex-col justify-center lg:col-span-4">
						<div>
							<form
								action="https://getform.io/f/ae7386ba-66cf-4f42-8157-1a835eb7c012"
								method="POST"
								className="mx-auto flex flex-col "
							>
								<h1 className="ad hidden text-5xl text-white lg:block">l</h1>
								<div className="grid w-full py-2 sm:grid-cols-2 sm:gap-4 md:pt-8 lg:pt-4">
									<div className="flex flex-col">
										<label
											htmlFor="Name"
											className="os pt-2 text-xl uppercase md:py-2 md:pt-0"
										>
											Name
										</label>
										<input
											className="flex rounded-sm border-2 border-neutral-700 p-3"
											type="text"
											id="Name"
											name="name"
										/>
									</div>
									<div className="flex flex-col">
										<label
											htmlFor="Phone"
											className="os pt-2 text-xl uppercase md:py-2 md:pt-0"
										>
											Phone Number
										</label>
										<input
											className="flex rounded-sm border-2 border-neutral-700 p-3"
											type="text"
											id="Phone"
											name="phone"
										/>
									</div>
								</div>
								<div className="grid w-full py-2 sm:grid-cols-2 sm:gap-4">
									<div className="flex flex-col">
										<label
											htmlFor="Email"
											className="os pt-2 text-xl uppercase md:py-2 md:pt-0"
										>
											Email
										</label>
										<input
											className="flex rounded-sm border-2 border-neutral-700 p-3"
											type="text"
											id="Email"
											name="email"
										/>
									</div>
									<div className="flex flex-col">
										<label
											htmlFor="Subject"
											className="os pt-2 text-xl uppercase md:py-2 md:pt-0"
										>
											Subject
										</label>
										<input
											className="flex rounded-sm border-2 border-neutral-700 p-3"
											type="text"
											id="Subject"
											name="subject"
										/>
									</div>
								</div>
								<div className="flex flex-col py-2">
									<label
										htmlFor="Message"
										className="os text-xl uppercase md:py-2"
									>
										Message
									</label>
									<textarea
										className="rounded-sm border-2 border-neutral-700 p-3"
										rows="3"
										id="Message"
										name="message"
									></textarea>
								</div>
								<button className="os mx-auto mt-4 flex rounded-sm border-2 border-black px-6 py-3 text-xl transition-all duration-500 hover:border-neutral-900 hover:bg-neutral-900 hover:px-8 hover:text-white hover:shadow-md hover:shadow-neutral-500 md:mt-12">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
