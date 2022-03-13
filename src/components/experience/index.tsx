import Image from 'next/image'

const ExperienceSection = (): JSX.Element => {
	return (
		<div>
			<h1>Experience</h1>
			<Experience />
			<Experience />
			<Experience />
		</div>
	)
}

const Experience = (): JSX.Element => {
	return (
		<div>
			<div>
				<Image src='https://via.placeholder.com/200' height={200} width={200} />
			</div>
			<div>
				<h2>LazyPay</h2>
				<h3>Software development Engineer | Full time</h3>
				<h4>Aug 2021 - Present (8 months)</h4>
				<p>subtitle</p>
			</div>
		</div>
	)
}

export default ExperienceSection
