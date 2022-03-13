import Image from 'next/image'
import sectionStyles from 'styles/section.module.scss'

const Contact = (): JSX.Element => {
	return (
		<div className={sectionStyles.section}>
			<h1 className={sectionStyles.sectionTitle}>Contact me</h1>
			<div className={sectionStyles.subSection}>
				<div className='col'>
					<Image
						src='https://via.placeholder.com/200'
						height={200}
						width={200}
					/>
				</div>
				<div className='col'>
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
