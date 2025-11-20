// src/components/Background/SophisticatedBackground.jsx
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, Float, Text, Sparkles, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Elegant Floating Geometry
function FloatingGeometry() {
  const groupRef = useRef();
  const torusRef = useRef();
  const icosahedronRef = useRef();
  const sphereRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    }
    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Elegant Torus */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={torusRef}>
          <torusGeometry args={[2.5, 0.08, 16, 100]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transmission={0.9}
            thickness={1}
            roughness={0.1}
            metalness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
            envMapIntensity={2}
          />
        </mesh>
      </Float>

      {/* Floating Icosahedron */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh ref={icosahedronRef} position={[3, 1, 0]}>
          <icosahedronGeometry args={[0.8, 1]} />
          <meshPhysicalMaterial
            color="#4fd1c5"
            transmission={0.8}
            thickness={0.8}
            roughness={0.2}
            metalness={0.1}
            clearcoat={1}
          />
        </mesh>
      </Float>

      {/* Secondary Sphere */}
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh ref={sphereRef} position={[-3, -1, 0]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshPhysicalMaterial
            color="#805ad5"
            transmission={0.7}
            thickness={0.6}
            roughness={0.15}
            metalness={0.3}
          />
        </mesh>
      </Float>
    </group>
  );
}

// Subtle Particle Field
function SubtleParticles({ count = 150 }) {
  const particlesRef = useRef();
  
  const { positions, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 25;
      positions[i + 1] = (Math.random() - 0.5) * 25;
      positions[i + 2] = (Math.random() - 0.5) * 25;
      
      sizes[i / 3] = Math.random() * 0.1 + 0.05;
    }
    
    return { positions, sizes };
  }, [count]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Elegant Light Orbs
function LightOrbs() {
  const orbs = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => ({
      position: [
        Math.cos((i / 8) * Math.PI * 2) * 6,
        Math.sin((i / 8) * Math.PI * 2) * 2,
        Math.sin((i / 8) * Math.PI * 2) * 4,
      ],
      color: i % 3 === 0 ? '#4fd1c5' : i % 3 === 1 ? '#805ad5' : '#fbb6ce',
      scale: 0.3 + Math.random() * 0.2,
    }))
  , []);

  return orbs.map((orb, i) => (
    <Float
      key={i}
      speed={1 + Math.random()}
      rotationIntensity={0.5}
      floatIntensity={0.8}
    >
      <mesh position={orb.position} scale={orb.scale}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial
          color={orb.color}
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </Float>
  ));
}

// Fading Icons and Decorations
function FadingIcons() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const icons = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({
      angle: (i / 12) * Math.PI * 2,
      radius: 8,
      height: Math.sin(i * 0.5) * 2,
    }))
  , []);

  return (
    <group ref={groupRef}>
      {icons.map((icon, i) => (
        <FadingIcon
          key={i}
          position={[
            Math.cos(icon.angle) * icon.radius,
            icon.height,
            Math.sin(icon.angle) * icon.radius,
          ]}
          delay={i * 0.2}
        />
      ))}
    </group>
  );
}

function FadingIcon({ position, delay }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      // Pulsing opacity effect
      meshRef.current.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2 + delay) * 0.2;
      
      // Subtle floating
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5 + delay) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <ringGeometry args={[0.3, 0.5, 8]} />
      <meshBasicMaterial
        color="#ffffff"
        transparent
        opacity={0.4}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Elegant Connection Lines
function ConnectionLines() {
  const linesRef = useRef();

  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 24; i++) {
      const angle = (i / 24) * Math.PI * 2;
      const nextAngle = ((i + 1) / 24) * Math.PI * 2;
      
      pts.push(
        new THREE.Vector3(
          Math.cos(angle) * 7,
          Math.sin(angle * 2) * 0.5,
          Math.sin(angle) * 7
        ),
        new THREE.Vector3(
          Math.cos(nextAngle) * 7,
          Math.sin(nextAngle * 2) * 0.5,
          Math.sin(nextAngle) * 7
        )
      );
    }
    return pts;
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <group ref={linesRef}>
      {points.map((point, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                point.x, point.y, point.z,
                points[(i + 1) % points.length].x,
                points[(i + 1) % points.length].y,
                points[(i + 1) % points.length].z
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#4fd1c5"
            transparent
            opacity={0.2}
            linewidth={1}
          />
        </line>
      ))}
    </group>
  );
}

// Main Scene Component
function SophisticatedScene() {
  return (
    <>
      {/* Professional Lighting Setup */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.8}
        color="#ffffff"
        castShadow
      />
      <pointLight position={[0, 5, 5]} intensity={0.5} color="#4fd1c5" />
      <pointLight position={[5, -5, -5]} intensity={0.3} color="#805ad5" />
      
      {/* Subtle Controls */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={5}
        maxDistance={15}
        autoRotate={true}
        autoRotateSpeed={0.5}
        enableDamping
        dampingFactor={0.05}
      />

      {/* Scene Elements */}
      <FloatingGeometry />
      <SubtleParticles />
      <LightOrbs />
      <FadingIcons />
      <ConnectionLines />
      
      {/* Subtle Sparkles */}
      <Sparkles
        count={50}
        scale={15}
        size={1.5}
        speed={0.4}
        opacity={0.3}
        color="#ffffff"
      />
    </>
  );
}

// Main Background Component
export function SophisticatedBackground({ children }) {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900">
      {/* 3D Canvas */}
      <Canvas
        camera={{ 
          position: [0, 2, 10], 
          fov: 60,
          near: 0.1,
          far: 1000 
        }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        className="absolute inset-0"
      >
        <SophisticatedScene />
      </Canvas>

      {/* Sophisticated Overlay Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-cyan-500/5 animate-pulse" />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full bg-[linear-gradient(90deg,transparent_99%,#ffffff_100%)] bg-[length:80px_80px] bg-repeat" />
          <div className="w-full h-full bg-[linear-gradient(transparent_99%,#ffffff_100%)] bg-[length:80px_80px] bg-repeat" />
        </div>
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,transparent_30%,black_90%)" />
        
        {/* Scan Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.02)_50%)] bg-[length:100%_3px] opacity-30" />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  );
}