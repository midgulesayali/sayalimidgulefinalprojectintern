import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./AIAvatar.css";

function Face({ avatarState }) {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
    }
  });

  const eyeColor = avatarState.eyes === "sparkle" ? "#fef3c7" : "#ffffff";
  const eyeScale = avatarState.eyes === "wide" ? 1.25 : 1;
  const mouthScale = avatarState.mouth === "smile" ? 1.4 : avatarState.mouth === "frown" ? 0.8 : 1;
  const browRotation = avatarState.brows === "arched" ? -0.25 : avatarState.brows === "down" ? 0.25 : avatarState.brows === "raised" ? -0.12 : 0;

  return (
    <group ref={group} position={[0, -0.4, 0]}>
      <mesh castShadow>
        <sphereGeometry args={[0.9, 64, 64]} />
        <meshStandardMaterial color="#2563eb" roughness={0.32} metalness={0.22} />
      </mesh>

      <mesh position={[-0.32, 0.15, 0.78]} scale={[eyeScale, eyeScale, eyeScale]}>
        <sphereGeometry args={[0.09, 32, 32]} />
        <meshStandardMaterial color={eyeColor} />
      </mesh>
      <mesh position={[0.32, 0.15, 0.78]} scale={[eyeScale, eyeScale, eyeScale]}>
        <sphereGeometry args={[0.09, 32, 32]} />
        <meshStandardMaterial color={eyeColor} />
      </mesh>

      <mesh position={[0, -0.22, 0.83]} rotation={[-0.25, 0, 0]} scale={[0.5, mouthScale, 1]}>
        <torusGeometry args={[0.18, 0.03, 16, 100]} />
        <meshStandardMaterial color="#111827" />
      </mesh>

      <mesh position={[-0.45, 0.5, 0.72]} rotation={[browRotation, 0, 0]}>
        <boxGeometry args={[0.32, 0.08, 0.05]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
      <mesh position={[0.45, 0.5, 0.72]} rotation={[browRotation, 0, 0]}>
        <boxGeometry args={[0.32, 0.08, 0.05]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
    </group>
  );
}

function AIAvatar({ avatarState }) {
  return (
    <div className="avatar-card">
      <div className="avatar-scene">
        <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 5, 3]} intensity={1} />
          <Face avatarState={avatarState} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.25} />
        </Canvas>
      </div>
      <div className="avatar-meta">
        <p className="avatar-expression">AI Avatar expression</p>
        <p className="avatar-details">
          Eyes: <span>{avatarState.eyes}</span> · Mouth: <span>{avatarState.mouth}</span> · Brows: <span>{avatarState.brows}</span>
        </p>
      </div>
    </div>
  );
}

export default AIAvatar;
