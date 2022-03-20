import type { NextPage } from 'next'
import Head from 'next/head'
import App from './_app'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Kunal Bohra | Software Developer</title>
				<meta name='description' content='' />
				<link rel='icon' href='/favicon.ico' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>

			<App />
		</div>
	)
}

export default Home
