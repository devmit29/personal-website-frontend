import { Canvas } from "@react-three/fiber";
import { CameraControls, Environment, PerspectiveCamera } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Model } from "./Model5";
import { Suspense } from "react";
import { useMediaQuery } from 'react-responsive';

function GlbModel() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });
  const isMediumScreen = useMediaQuery({ query: '(min-width: 641px) and (max-width: 1024px)' });
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1025px) and (max-width: 1330px)' });
  const isExtraLargeScreen = useMediaQuery({ query: '(min-width: 1331px)' });

  // For Older avatar
  // const getAvatarPosition = () => {
  //   if (isSmallScreen) return [0.2, -1.0, 1.0];
  //   if (isMediumScreen) return [0.3, -1.1, 1.2];
  //   if (isLargeScreen) return [0.7, -1.15, 1.3];
  //   if (isExtraLargeScreen) return [1, -1.15, 1.3];
  //   return [0.8, -1.15, 1.3];
  // };
  const getAvatarPosition = () => {
    if (isSmallScreen) return [-0.1, -1.1, 0.8];
    if (isMediumScreen) return [-0.1, -1.2, 1.2];
    if (isLargeScreen) return [0.4, -1.2, 1.3];
    if (isExtraLargeScreen) return [0.5, -1.2, 1.3];
    return [0.8, -1.15, 1.3];
  };
  const getCameraPosition = () => {
    // if (isSmallScreen) return [-2, 0.2, 3];
    // if (isMediumScreen) return [-1, 0.2, 3];
    // if (isLargeScreen) return [0, 0.2, 3];
    // if (isExtraLargeScreen) return [0, 0.2, 3];
    return [-0.4, 0.2, 3];
  };

  return (
    <>
      <main className="px-5">
        <div className="min-h-screen my-5">
          <Canvas style={{ height: '100vh' }}>
            <PerspectiveCamera
              makeDefault
              fov={45}
              // position={[0.8, 0.2, 3]}
              position={getCameraPosition()}
              resolution={1024}
            />
            <CameraControls />
            <ambientLight intensity={0.5} />
            <Suspense fallback={null}>
              <group position={getAvatarPosition()}>
                              {/* <Avatar className="h-full" /> */}
                              <Model className="h-full" />
              </group>
            </Suspense>
            <Environment
              background={false}
              preset="city"
            />
          </Canvas>
        </div>
      </main>
    </>
  );
}

export default GlbModel;