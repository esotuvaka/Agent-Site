import React from 'react';
import Logo from '../public/assets/tamar-logo-b.png';
import Logo2 from '../public/assets/cb.png';
import Logo3 from '../public/assets/elogo.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="bg-neutral-100 py-16">
			<div id="ft-content" className="mx-auto mb-8 grid w-2/3 grid-cols-3">
				<div className="flex flex-row items-center">
					<Image src={Logo} alt="/" width="50" height="50" className="" />
					<p className="ad ml-4 text-xl font-semibold tracking-wider">
						Tamar Tarkhanian Real Estate
					</p>
				</div>
				<div className="col-span-2">
					<p className="text-sm ">
						Tamar is a real estate agent who develops relationships with her
						clients to better understand their wants and needs, and to better
						guide them towards a special property they could call home. She
						strives to ensure that the home buying and selling experience is fun
						and stress-free, and she is committed to working hard with integrity
						and excellent customer service.
					</p>
				</div>
			</div>
			<div className="mx-auto mb-8 flex w-2/3 justify-center py-12">
				<div className="flex w-1/4 justify-center border-y border-y-neutral-800 ">
					<Link href="/" className="hover:cursor-pointer">
						<Image src={Logo2} alt="/" width="300" height="150" className="" />
					</Link>
				</div>
				<div className="flex w-1/4 flex-col justify-center border-y border-y-neutral-800">
					<Image src={Logo3} alt="" width="50" height="100" className="" />
					<p className="text-center text-xs">
						Custom Website Design by Eric Otuvaka
					</p>
				</div>
			</div>
			<div className="mx-auto w-2/3">
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
