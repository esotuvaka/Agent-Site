import React from 'react';
import Logo from '../public/assets/tamar-logo-b.png';
import Logo2 from '../public/assets/cb-logo.jpg';
import Logo3 from '../public/assets/esotuvaka-logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="bg-neutral-100 py-16">
			<div id="ft-content" className="mx-auto mb-8 grid w-2/3 grid-cols-3">
				<div className="flex flex-row items-center">
					<Image src={Logo} alt="/" width="50" height="50" className="" />
					<p className="ml-4">Tamar Tarkhanian Real Estate</p>
				</div>
				<div className="col-span-2">
					<p className="text-sm">
						Tamar is a real estate agent who develops relationships with her
						clients to better understand their wants and needs, and to better
						guide them towards a special property they could call home. She
						strives to ensure that the home buying and selling experience is fun
						and stress-free, and is committed to working hard with integrity and
						excellent customer service.
					</p>
				</div>
			</div>
			<div className="mx-auto mb-8 flex w-2/3 justify-center py-12">
				<div className="flex w-1/4 justify-end border-y border-y-neutral-800 ">
					<Link href="/" className="hover:cursor-pointer">
						<Image src={Logo2} alt="/" width="90" height="80" className="" />
					</Link>
				</div>

				<div className="flex w-1/4 border-y border-y-neutral-800 ">
					<Link href="/" className="hover:cursor-pointer">
						<Image src={Logo3} alt="/" width="80" height="80" className="" />
					</Link>
				</div>
			</div>
			<div className="mx-auto w-2/3">
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
