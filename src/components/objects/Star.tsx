const Star = ({ className }: { className: string }) => {
	return (
		<svg
			width='115'
			height='115'
			viewBox='0 0 115 115'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M57.7303 3.28112L72.1707 42.3059L72.3303 42.7371L72.7616 42.8967L111.786 57.3372L72.7616 71.7777L72.3303 71.9372L72.1707 72.3685L57.7303 111.393L43.2898 72.3685L43.1302 71.9372L42.699 71.7777L3.6742 57.3372L42.699 42.8967L43.1302 42.7371L43.2898 42.3059L57.7303 3.28112Z'
				stroke='white'
				stroke-width='2'
			/>
		</svg>
	)
}

export default Star
