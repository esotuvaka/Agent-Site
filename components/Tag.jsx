const Tag = ({ title }) => {
	return (
		<div className="flex ">
			<p className="my-1 bg-black px-4 py-2 text-white shadow-md shadow-neutral-600">
				{title}
			</p>
		</div>
	);
};

export default Tag;
