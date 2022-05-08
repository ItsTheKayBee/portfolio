import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default () => {
	const group = useRef()
	const { nodes, materials } = useGLTF('/models/lazypay.glb')
	return (
		<group ref={group} dispose={null} rotation={[0, Math.PI, 0]} scale={1}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Curve007.geometry}
				material={materials['SVGMat.001']}
				position={[2.28, -2.16, -0.12]}
				rotation={[Math.PI / 2, 0, Math.PI]}
				scale={592.1}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Curve008.geometry}
				material={materials['SVGMat.002']}
				position={[2.28, -2.16, -0.12]}
				rotation={[Math.PI / 2, 0, Math.PI]}
				scale={592.1}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Curve009.geometry}
				material={materials['SVGMat.003']}
				position={[2.28, -2.16, -0.12]}
				rotation={[Math.PI / 2, 0, Math.PI]}
				scale={592.1}
			/>
		</group>
	)
}

useGLTF.preload('/models/lazypay.glb')
