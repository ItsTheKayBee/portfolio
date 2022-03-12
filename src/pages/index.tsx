import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import App from './_app'
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('../components/footer'))

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Kunal Bohra | Software Developer</title>
				<meta name='description' content='' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<App />
			</main>

			<Footer />
		</div>
	)
}

export default Home
