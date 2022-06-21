import styles from 'components/contact/index.module.scss'
import { FC } from 'react'

const LinkedIn: FC = (): JSX.Element => {
	return (
		<svg
			width='50'
			height='51'
			viewBox='0 0 50 51'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={styles.linkedinIcon}
		>
			<g id='linkedin'>
				<path
					d='M49.9888 50.7489H41.6451C40.5405 50.7489 39.6451 49.8534 39.6451 48.7489V34.2551C39.6451 30.3243 39.567 25.2833 34.2556 25.2833C28.8661 25.2833 28.0402 29.554 28.0402 33.9719V48.7489C28.0402 49.8534 27.1448 50.7489 26.0402 50.7489H19.6853C18.5807 50.7489 17.6853 49.8534 17.6853 48.7489V18.8665C17.6853 17.7619 18.5807 16.8665 19.6853 16.8665H25.6272C26.7318 16.8665 27.6272 17.7619 27.6272 18.8665V21.3981C27.6272 21.4479 27.6677 21.4883 27.7175 21.4883C27.7512 21.4883 27.7818 21.47 27.7976 21.4402C29.197 18.7925 32.5672 16.0168 37.5804 16.0168C48.0714 16.0168 50 23.029 50 32.1368V50.7377C50 50.7439 49.995 50.7489 49.9888 50.7489Z'
					className={styles.letterN}
				/>
				<path
					d='M2.8259 50.7489H9.19197C10.2965 50.7489 11.192 49.8534 11.192 48.7489V18.8665C11.192 17.7619 10.2965 16.8665 9.19197 16.8665H2.8259C1.72133 16.8665 0.825897 17.7619 0.825897 18.8665V48.7489C0.825897 49.8534 1.72133 50.7489 2.8259 50.7489Z'
					className={styles.letterI}
				/>
				<path
					d='M0 6.0934C0 9.45785 2.68862 12.2446 6.00335 12.2446C9.31696 12.2446 12.0067 9.45785 12.0067 6.0934C12.0067 4.47733 11.3742 2.92745 10.2484 1.78471C9.12251 0.641981 7.59554 0 6.00335 0C4.41116 0 2.88419 0.641981 1.75834 1.78471C0.632494 2.92745 0 4.47733 0 6.0934Z'
					className={styles.dot}
				/>
			</g>
		</svg>
	)
}

export default LinkedIn
