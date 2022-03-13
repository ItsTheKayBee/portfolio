import Image from 'next/image'

const Achievements = (): JSX.Element => {
	return (
		<div>
			<h1>Achievements</h1>
			<div>
				<Achievement />
				<Achievement />
				<Achievement />
				<Achievement />
				<Achievement />
			</div>
		</div>
	)
}

const Achievement = (): JSX.Element => {
	return (
		<div>
			<Image src='https://via.placeholder.com/100' height={100} width={100} />
			<h2>Title</h2>
			<h3>subtitle . 2018</h3>
			<p>description</p>
		</div>
	)
}

export default Achievements
