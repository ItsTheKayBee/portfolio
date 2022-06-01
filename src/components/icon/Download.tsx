import styles from 'components/contact/index.module.scss'

const Download = (): JSX.Element => {
	return (
		<svg
			viewBox='0 0 64 64'
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			className={styles.icon}
		>
			<g id='download'>
				<circle className={styles.line} cx='32' cy='32' r='30' />
				<g className={styles.arrow}>
					<line
						className={styles.line}
						x1='32.5'
						y1='19.625'
						x2='32.5'
						y2='43.375'
						strokeLinecap='round'
					/>
					<path
						className={styles.line}
						d='M32 43.875L20 34.875'
						strokeLinecap='round'
					/>
					<path
						className={styles.line}
						d='M44 34.875L32 43.875'
						strokeLinecap='round'
					/>
				</g>
			</g>
		</svg>
	)
}

export default Download
