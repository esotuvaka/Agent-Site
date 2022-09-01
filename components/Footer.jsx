import React from 'react';

const Footer = () => {
	return (
		<footer className="bg-neutral-50 py-8 text-black md:py-12 lg:py-16">
			<div
				id="ft-content"
				className="mx-auto mb-4 grid w-11/12 grid-cols-3 md:mb-8 lg:w-11/12 xl:w-4/5 2xl:w-2/3"
			>
				<div className="col-span-3 mb-4 flex flex-row items-center sm:justify-center lg:col-span-1 lg:mb-0 lg:justify-start">
					<p className="ad ml-4 text-lg font-semibold tracking-wider md:ml-4 md:text-xl">
						John Doe Real Estate
					</p>
				</div>
				<div className="col-span-3 mt-2 md:mt-0 lg:col-span-2">
					<p className="text-center text-sm lg:text-left">
						John Doe is a real estate agent who develops relationships with his
						clients to better understand their wants and needs, and to better
						guide them towards their special property. He strives to ensure that
						the home buying and selling experience is fun and stress-free, and
						is committed to working with integrity.
					</p>
				</div>
			</div>
			<div className="mx-auto mb-8 flex w-11/12 justify-center xl:w-2/3">
				<div className="flex w-1/2 justify-center border-y border-y-black md:w-1/4 ">
					<div className="py-5">REAL ESTATE BROKER</div>
				</div>
			</div>
			<div className="mx-auto w-11/12 xl:w-4/5 2xl:w-2/3">
				<p className="text-center text-xs uppercase">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel sit
					quo aperiam, eos facilis reprehenderit quas molestiae commodi,
					deleniti cupiditate ipsam doloribus nobis blanditiis dolores. Esse
					magnam quo ut. Lorem ipsum dolor sit amet, consectetur adipisicing
					elit. Quasi dignissimos aliquid sit, nemo est velit sunt impedit
					officiis autem libero repellat obcaecati, culpa dolor quo debitis
					eaque, accusantium dolorum nobis!
				</p>
				<br />
				<p className="text-center text-xs">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa
					aliquam nostrum qui ullam iure veniam laudantium iusto. Nulla facere
					optio dolores quasi ut rerum doloremque id repudiandae, temporibus
					quam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptates consequuntur, distinctio assumenda error nesciunt iusto
					libero tempora eveniet unde ipsa soluta. Tempora quam dolor nostrum
					delectus fuga impedit necessitatibus quae.
				</p>
			</div>
			<div id="copyright"></div>
		</footer>
	);
};

export default Footer;
