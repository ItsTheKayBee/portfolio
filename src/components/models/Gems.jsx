import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Gems(props) {
	const bigGem = useRef(null)
	const smallGem = useRef(null)
	const { nodes, materials } = useGLTF('/models/gems.glb')

	return (
		<group {...props} dispose={null}>
			<group
				position={[0.5, 2.45, 0]}
				rotation={[0.21, 0.35, -0.04]}
				scale={[1.4 * 1.5, 0.75 * 1.5, 1 * 1.5]}
			>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Icosphere.geometry}
					material={materials['Material.001']}
					position={[-1.08, -2.86, -0.01]}
					rotation={[0, -0.19, 0]}
					scale={[0.73, 1.34, 0.99]}
					ref={bigGem}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Icosphere002.geometry}
					material={materials['Material.001']}
					position={[0.5, -3.81, 0.48]}
					rotation={[0, -0.19, 0]}
					scale={[0.73, 1.34, 0.99]}
					ref={smallGem}
				/>
			</group>
		</group>
	)
}

useGLTF.preload('/models/gems.glb')
