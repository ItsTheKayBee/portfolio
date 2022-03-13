import Image from 'next/image'
import Stats from '../stats'

const About = (): JSX.Element => {
	return (
		<div>
			<div>
				<div>
					<h1>Kunal Bohra</h1>
					<h2>Frontend Engineer</h2>
					<p>Subtitle</p>
				</div>
				<div>
					<Image
						src='https://via.placeholder.com/200'
						height={200}
						width={200}
					/>
					<SocialMediaStrip />
				</div>
			</div>
			<Stats />
		</div>
	)
}

export default About

const SocialMediaStrip = (): JSX.Element => {
	return (
		<div>
			<div>
				<Image src='https://via.placeholder.com/50' height={50} width={50} />
			</div>
			<div>
				<Image src='https://via.placeholder.com/50' height={50} width={50} />
			</div>
			<div>
				<Image src='https://via.placeholder.com/50' height={50} width={50} />
			</div>
			<div>
				<Image src='https://via.placeholder.com/50' height={50} width={50} />
			</div>
		</div>
	)
}
