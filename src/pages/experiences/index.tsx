import Image from 'next/image'
import { RefObject, useEffect, useRef, useState } from 'react'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather'
import { portfolioDataObject } from 'data'
import { DataWithDates, ExperiencesType, Particle } from 'data/interface'
import { DATE_FORMAT_OPTIONS } from 'helpers/constants'
import sectionStyles from 'styles/section.module.scss'
import styles from './index.module.scss'
import { Canvas, useFrame } from '@react-three/fiber'

import Lazypay from 'components/models/Lazypay'

const ExperienceSection = (): JSX.Element => {
	const { title, data }: ExperiencesType = portfolioDataObject.experiences

	const [current, setCurrent] = useState(0)

	const switchCurrent = (sign = 1) => {
		setCurrent(curr => Math.max(0, Math.min(data.length - 1, curr + sign)))
	}

	return (
		<div className={`${sectionStyles.section} ${styles.experiences}`}>
			<img src='/images/experiences.svg' className={styles.bg} />
			<h1 className={styles.sectionTitle}>{title}</h1>
			<ArrowLeftCircle
				className={`${sectionStyles.back} ${
					current === 0 ? sectionStyles.disabled : ''
				}`}
				onClick={() => switchCurrent(-1)}
			/>
			{data &&
				data.map((exp, key) => (
					<Experience key={key} {...exp} id={key} current={current} />
				))}
			<ArrowRightCircle
				className={`${sectionStyles.next} ${
					current === data.length - 1 ? sectionStyles.disabled : ''
				}`}
				onClick={() => switchCurrent(1)}
			/>
		</div>
	)
}

const Experience3d = ({ children }: { children: any }): JSX.Element => {
	const mesh = useRef<THREE.Mesh>(null!)

	useFrame(() => {
		mesh.current.rotation.y -= 0.01
	})

	return <mesh ref={mesh}>{children}</mesh>
}

const Experience = ({
	title,
	subTitle,
	description,
	dates,
	image,
	id = 0,
	current = 0
}: DataWithDates): JSX.Element => {
	return (
		<div
			className={`${sectionStyles.subSection} ${
				id % 2 !== 0 ? sectionStyles.reverse : ''
			} ${id === current ? sectionStyles.active : ''}`}
		>
			<div className={`col a-center ${styles.object3d}`}>
				{/* <Image src={image.url} alt={image.alt} height={200} width={200} /> */}
				<Canvas>
					<ambientLight />
					<rectAreaLight position={[-7, 0, 3]} intensity={4} color='#FFD0EA' />
					<rectAreaLight position={[7, 0, 3]} intensity={4} color='#FFD0EA' />
					<Experience3d>
						<Lazypay />
					</Experience3d>
				</Canvas>
			</div>
			<div className='col'>
				<h2 className={sectionStyles.title}>{title}</h2>
				<h3 className={sectionStyles.subTitle}>{subTitle}</h3>
				<h4 className={sectionStyles.subSubTitle}>
					{dates.startDate.toLocaleString('en-IN', DATE_FORMAT_OPTIONS)} -{' '}
					{dates.endDate?.toLocaleString('en-IN', DATE_FORMAT_OPTIONS) ??
						'Present'}
				</h4>
				<p className={sectionStyles.description}>{description}</p>
			</div>
		</div>
	)
}

export default ExperienceSection
