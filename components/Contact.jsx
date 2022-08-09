import React from 'react';
import { FaLinkedinIn, FaFacebook, FaInstagram, FaLink } from 'react-icons/fa';

const Contact = () => {
	return (
		<>
			<div id="contact" className="w-full bg-white pb-20">
				<div className="transparent relative " />
				<div className="mx-auto grid h-[100vh] w-2/3 grid-cols-7  pt-24">
					<div className="col-span-3 flex flex-col justify-center">
						<h1 className="ad text-5xl uppercase tracking-widest">CONTACT</h1>
						<div>
							<div className="j flex flex-col">
								<h2 className="py-4 pt-8 text-3xl font-semibold">
									Tamar Tarkhanian
								</h2>
								<h3 className="pt-4 text-xl font-semibold text-neutral-900">
									PHONE
								</h3>
								<p className="text-xl">714.813.2034</p>
								<h3 className="pt-4 text-xl font-semibold text-neutral-900">
									EMAIL
								</h3>
								<p className="text-xl">TAMAR.TARKHANIAN@CBREALTY.COM</p>
								<h3 className="pt-4 text-xl font-semibold text-neutral-900">
									ADDRESS
								</h3>
								<p className="text-xl">
									31582 COAST HWY LAGUNA BEACH, CA 92651
								</p>
								<p className="pt-8 text-xl font-semibold text-neutral-900">
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
					<div className="col-span-4 flex flex-col justify-center">
						<div>
							<form
								action="https://getform.io/f/ae7386ba-66cf-4f42-8157-1a835eb7c012"
								method="POST"
								className="mx-auto flex flex-col "
							>
								<h1 className="ad text-5xl text-white">l</h1>
								<div className="grid w-full gap-4 py-2 pt-8 md:grid-cols-2">
									<div className="flex flex-col">
										<label htmlFor="Name" className="os py-2 text-xl uppercase">
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
											className="os py-2 text-xl uppercase"
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
								<div className="grid w-full gap-4 py-2 md:grid-cols-2">
									<div className="flex flex-col">
										<label
											htmlFor="Email"
											className="os py-2 text-xl uppercase"
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
											className="os py-2 text-xl uppercase"
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
										className="os py-2 text-xl uppercase"
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
								<button className="os mx-auto mt-12 flex rounded-sm border-2 border-black px-6 py-3 text-xl transition-all duration-500 hover:border-neutral-900 hover:bg-neutral-900 hover:px-8 hover:text-white hover:shadow-md hover:shadow-neutral-500">
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
