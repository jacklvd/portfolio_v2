import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

interface PlanetProps {
    isMobile: boolean;
}

const Planet: React.FC<PlanetProps> = ({ isMobile }) => {
    const planet = useGLTF("./planet/scene.gltf");

    return (
        <mesh>
            <hemisphereLight intensity={1} groundColor='black' skycolor='black' />
            <spotLight
                position={[-20, 50, 40]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive object={planet.scene} scale={isMobile ? 2.7 : 3} position={isMobile ? [0, 1.2, -.2] : [0, 1.56, -1.76]} rotation-y={0} />

        </mesh>
    );
};

const PlanetCanvas = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            shadows
            frameloop="always"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{ position: [20, 3, 1], fov: 25 }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate={true}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Planet isMobile={isMobile} />

                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default PlanetCanvas;
