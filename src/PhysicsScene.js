import { Debug, Physics, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
const PhysicsScene = () => {
  const firstCubeRef = useRef();
  const secondCubeRef = useRef();

  const firstCubeClickHandler = () => {
    firstCubeRef.current.applyImpulse({ x: -100, y: 0, z: 0 });
  };

  const secondCubeClickHandler = () => {
    secondCubeRef.current.applyImpulse({ x: 100, y: 0, z: 0 });
  };

  return (
    <>
      <Physics>
        <Debug />
        <RigidBody ref={firstCubeRef}>
          <mesh
            castShadow
            position={[1.5, 2.5, 0]}
            onClick={firstCubeClickHandler}
            scale={3}
            mass={20}


          >
            <boxGeometry />
            <meshStandardMaterial color="#777bdd" />
          </mesh>
        </RigidBody>

        <RigidBody ref={secondCubeRef} mass={150}>
          <mesh
            castShadow
            position={[-1.5, 2.5, 0]}
            onClick={secondCubeClickHandler}
          >
            <boxGeometry />
            <meshStandardMaterial color="#dedcff" />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed" restitution={0.2}>
          <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
            <boxGeometry args={[15, 15, 0.35]} />
            <meshStandardMaterial color="#C7CAC7" />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
};

export default PhysicsScene;
