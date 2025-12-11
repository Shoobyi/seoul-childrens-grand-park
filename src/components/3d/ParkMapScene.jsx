import React, { useRef, useLayoutEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF, SpotLight } from '@react-three/drei'
import * as THREE from 'three'

const ParkMapScene = ({ scrollProgress }) => {
    const { scene } = useGLTF('/models/park_map.glb')
    const { camera } = useThree()

    // Refs for Lights
    const zooLight = useRef()
    const gardenLight = useRef()
    const amusementLight = useRef()

    // Clean up materials 
    useLayoutEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true
                child.receiveShadow = true
                if (child.material) {
                    // Reset material to standard to react well to light
                    child.material.roughness = 0.8
                    child.material.metalness = 0.1
                    // Ensure no emissive interference
                    child.material.emissiveIntensity = 0
                }
            }
        })
    }, [scene])

    useFrame((state, delta) => {
        // Scroll progress (0 to 1)
        const smoothedProgress = THREE.MathUtils.lerp(
            state.camera.userData.progress || 0,
            scrollProgress,
            delta * 2
        )
        state.camera.userData.progress = smoothedProgress

        // --- Camera Movement (Keep Extreme Dynamic) ---
        const maxRadius = 25
        const minRadius = 10
        const radius = maxRadius - Math.sin(smoothedProgress * Math.PI) * (maxRadius - minRadius)

        const maxHeight = 30
        const minHeight = 6
        const height = maxHeight - Math.sin(smoothedProgress * Math.PI) * (maxHeight - minHeight)

        const startAngle = Math.PI
        const endAngle = -Math.PI
        const currentAngle = THREE.MathUtils.lerp(startAngle, endAngle, smoothedProgress)

        const x = radius * Math.sin(currentAngle)
        const z = radius * Math.cos(currentAngle)

        const targetPosition = new THREE.Vector3(x, height, z)
        const lookAtTarget = new THREE.Vector3(0, 0, 0)

        camera.position.lerp(targetPosition, delta * 3)
        if (!state.camera.userData.target) state.camera.userData.target = new THREE.Vector3().copy(lookAtTarget)
        state.camera.userData.target.lerp(lookAtTarget, delta * 3)
        state.camera.lookAt(state.camera.userData.target)


        // --- Light Intensity Animation (Spotlights) ---
        // Target intensities based on scroll section
        let zInt = 0 // Zoo
        let gInt = 0 // Garden
        let aInt = 0 // Amusement

        if (smoothedProgress > 0.15 && smoothedProgress < 0.4) {
            zInt = 20 // Intense Light
        } else if (smoothedProgress >= 0.4 && smoothedProgress < 0.65) {
            gInt = 20
        } else if (smoothedProgress >= 0.65 && smoothedProgress < 0.9) {
            aInt = 20
        }

        if (zooLight.current) zooLight.current.intensity = THREE.MathUtils.lerp(zooLight.current.intensity, zInt, delta * 4)
        if (gardenLight.current) gardenLight.current.intensity = THREE.MathUtils.lerp(gardenLight.current.intensity, gInt, delta * 4)
        if (amusementLight.current) amusementLight.current.intensity = THREE.MathUtils.lerp(amusementLight.current.intensity, aInt, delta * 4)

    })

    return (
        <group dispose={null}>
            {/* Kept scale 12.0 */}
            <primitive object={scene} scale={[12.0, 12.0, 12.0]} />

            {/* Dynamic Spotlights for Coloring Areas */}
            {/* Zoo: Left (-X) - Red Light */}
            <SpotLight
                ref={zooLight}
                position={[-15, 20, 15]}
                angle={0.5}
                penumbra={1}
                color="#FF4444"
                distance={60}
                target-position={[-5, 0, 0]}
            />

            {/* Garden: Back (-Z) - Green Light */}
            <SpotLight
                ref={gardenLight}
                position={[0, 20, -15]}
                angle={0.6}
                penumbra={1}
                color="#00FF88"
                distance={60}
                target-position={[0, 0, -5]}
            />

            {/* Amusement: Right (+X) - Purple Light */}
            <SpotLight
                ref={amusementLight}
                position={[15, 20, 15]}
                angle={0.5}
                penumbra={1}
                color="#DDA0DD"
                distance={60}
                target-position={[5, 0, 0]}
            />
        </group>
    )
}

useGLTF.preload('/models/park_map.glb')

export default ParkMapScene
