import React from 'react';
import Logo from '../public/assets/tamar-logo-b.png';
import Logo2 from '../public/assets/cb.png';
import Logo3 from '../public/assets/elogo.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="bg-neutral-50 py-8 text-black md:py-12 lg:py-16">
			<div
				id="ft-content"
				className="mx-auto mb-4 grid w-11/12 grid-cols-3 md:mb-8 lg:w-11/12 xl:w-4/5 2xl:w-2/3"
			>
				<div className="col-span-3 mb-4 flex flex-row items-center sm:justify-center lg:col-span-1 lg:mb-0 lg:justify-start">
					<Image src={Logo} alt="/" width="50" height="50" className="" />
					<p className="ad ml-4 text-lg font-semibold tracking-wider md:ml-4 md:text-xl">
						Tamar Tarkhanian Real Estate
					</p>
				</div>
				<div className="col-span-3 mt-2 md:mt-0 lg:col-span-2">
					<p className="text-center text-sm lg:text-left">
						Tamar is a real estate agent who develops relationships with her
						clients to better understand their wants and needs, and to better
						guide them towards a special property they could call home.
					</p>
					<p className="hidden text-center text-sm md:block lg:text-left">
						She strives to ensure that the home buying and selling experience is
						fun and stress-free, and she is committed to working hard with
						integrity and excellent customer service.
					</p>
				</div>
			</div>
			<div className="mx-auto mb-8 flex w-11/12 justify-center xl:w-2/3">
				<div className="flex w-1/2 justify-center border-y border-y-black md:w-1/4 ">
					<Link
						href="https://www.coldwellbanker.com/"
						className="hover:cursor-pointer"
					>
						<Image src={Logo2} alt="/" width="300" height="150" className="" />
					</Link>
				</div>
			</div>
			<div className="mx-auto w-11/12 xl:w-4/5 2xl:w-2/3">
				<p className="text-center text-xs uppercase">
					Coldwell Banker Real Estate LLC. All Rights Reserved. Coldwell Banker
					Real Estate LLC fully supports the principles of the Fair Housing Act
					and the Equal Opportunity Act. Each Coldwell Banker Residential
					Brokerage office is owned by a subsidiary of NRT LLC. Coldwell Banker®
					and the Coldwell Banker Logo, Coldwell Banker Previews International®
					and the Coldwell Banker Previews International Logo, are registered
					service marks owned by Coldwell Banker Real Estate LLC.
				</p>
				<br />
				<p className="text-center text-xs">
					31582 COAST HWY LAGUNA BEACH, CA 92651. 714.813.2034 © 2022 COLDWELL
					BANKER REAL ESTATE. ALL MATERIAL PRESENTED HEREIN IS INTENDED FOR
					INFORMATION PURPOSES ONLY. WHILE, THIS INFORMATION IS BELIEVED TO BE
					CORRECT, IT IS REPRESENTED SUBJECT TO ERRORS, OMISSIONS, CHANGES OR
					WITHDRAWAL WITHOUT NOTICE. ALL PROPERTY INFORMATION, INCLUDING, BUT
					NOT LIMITED TO SQUARE FOOTAGE, ROOM COUNT, NUMBER OF BEDROOMS AND THE
					SCHOOL DISTRICT IN PROPERTY LISTINGS SHOULD BE VERIFIED BY YOUR OWN
					ATTORNEY, ARCHITECT OR ZONING EXPERT. IF YOUR PROPERTY IS CURRENTLY
					LISTED WITH ANOTHER REAL ESTATE BROKER, PLEASE DISREGARD THIS OFFER.
					IT IS NOT OUR INTENTION TO SOLICIT THE OFFERINGS OF OTHER REAL ESTATE
					BROKERS. WE COOPERATE WITH THEM FULLY. EQUAL HOUSING OPPORTUNITY.
				</p>
			</div>
			<div id="copyright"></div>
		</footer>
	);
};

export default Footer;
