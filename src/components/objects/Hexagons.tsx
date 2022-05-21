const Hexagons = ({ className }: { className: string }) => {
	return (
		<svg
			width='333'
			height='389'
			viewBox='0 0 333 389'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<g filter='url(#filter0_f_5_20)'>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M130.722 62.565L66.42 99.6899V173.554L2.11142 210.683V285.285L66.7192 322.587L131.095 285.419L195.471 322.587L260.078 285.285V210.683L195.635 173.477V99.6899L131.722 62.7897V2.54877H130.722V62.565ZM330.577 177.916L260.61 211.824L260.174 210.924L330.141 177.016L330.577 177.916ZM67.5803 386.366V322.525H68.5803V386.366H67.5803ZM3.11142 211.26L66.7192 174.536L130.327 211.26V284.708L66.7192 321.432L3.11142 284.708V211.26ZM131.863 211.26L195.471 174.536L259.078 211.26V284.708L195.471 321.432L131.863 284.708V211.26ZM67.42 100.267L131.028 63.5433L194.635 100.267V173.715L131.028 210.439L67.42 173.715V100.267Z'
					fill='white'
				/>
			</g>
			<defs>
				<filter
					id='filter0_f_5_20'
					x='0.11142'
					y='0.548767'
					width='332.466'
					height='387.817'
					filterUnits='userSpaceOnUse'
					color-interpolation-filters='sRGB'
				>
					<feFlood flood-opacity='0' result='BackgroundImageFix' />
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='BackgroundImageFix'
						result='shape'
					/>
					<feGaussianBlur
						stdDeviation='1'
						result='effect1_foregroundBlur_5_20'
					/>
				</filter>
			</defs>
		</svg>
	)
}

export default Hexagons
