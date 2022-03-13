import Image from 'next/image'

const Contact = (): JSX.Element => {
	return (
		<div>
			<h1>Contact me</h1>
			<div>
				<Image src='https://via.placeholder.com/200' height={200} width={200} />
				<div>
					<ContactButton />
					<ContactButton />
					<ContactButton />
					<ContactButton />
				</div>
			</div>
		</div>
	)
}

const ContactButton = (): JSX.Element => {
	return (
		<button>
			<Image src='https://via.placeholder.com/40' height={40} width={40} />
			kbohra89@gmail.com
		</button>
	)
}

export default Contact
