import { Web as WebType } from 'data/interface'
import { classHelper } from 'helpers/utils'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'

const Web = ({ web }: { web: WebType }) => {
	const [visible, setVisible] = useState(true)
	const [destroy, setDestroy] = useState(false)

	useEffect(() => {
		const timer1 = setTimeout(() => {
			setVisible(false)
		}, 5000)

		const timer2 = setTimeout(() => {
			setDestroy(true)
		}, 7000)

		return () => {
			clearTimeout(timer1)
			clearTimeout(timer2)
		}
	}, [])

	return !destroy ? (
		<img
			src='/images/web.svg'
			alt='web'
			className={classHelper(styles.web, visible ? styles.active : '')}
			style={{
				top: web.poxY,
				left: web.posX,
				width: web.size,
				transform: `rotate(${web.rot}deg)`
			}}
		/>
	) : null
}

export default Web
