import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default ({ pointer }) => {
	const point = useRef(null)

	useFrame(() => {
		point.current.position.x = (pointer.clientX / window.innerWidth) * 4 - 1
		point.current.position.y = -(pointer.clientY / window.innerHeight) * 4 + 1
	})

	return (
		<pointLight
			position={[0, 0, 3]}
			ref={point}
			intensity={50}
			color='#9670ff'
		/>
	)
}
