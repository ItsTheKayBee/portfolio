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
			{/* <div className='bg'>
				{Array(4)
					.fill(0)
					.map((_, key) => (
						<div className='aurora aurora-1' key={key} />
						))}
					</div> */}
		</main>
	)
}

export default App
