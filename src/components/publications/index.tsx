import Image from 'next/image'

const Publications = (): JSX.Element => {
	return (
		<div>
			<h1>Publications</h1>
			<Publication />
		</div>
	)
}

const Publication = (): JSX.Element => {
	return (
		<div>
			<Image src='https://via.placeholder.com/200' height={200} width={200} />
			<div>
				<h2>Title</h2>
				<h3>Sutitle</h3>
				<h4>description</h4>
				<button>View</button>
			</div>
		</div>
	)
}

export default Publications
