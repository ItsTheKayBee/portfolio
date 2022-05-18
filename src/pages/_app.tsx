import '../styles/globals.scss'

const App = ({
	Component,
	pageProps
}: {
	Component: any
	pageProps: object
}): JSX.Element => {
	return (
		<main className='main'>
			<Component {...pageProps} />
		</main>
	)
}

export default App
