import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import Msphere from './Sphere'

const LandingContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding: 2rem;
  font-family: 'Rajdhani', sans-serif;
  position: relative;
  overflow: hidden;
`;

const TitleContainer = styled.div`
  position: relative;
  margin-top: 15vh;
  margin-bottom: 2rem;
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Title = styled.h1`
  font-size: 5rem;
  background: linear-gradient(45deg, #00ffff, #ff00ff, #00ffff);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientAnimation} 10s ease infinite;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-family: 'Rajdhani', sans-serif;
`;

const Subtitle = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2rem;
  max-width: 700px;
  color: white;
  opacity: 0.9;
  font-family: 'Rajdhani', sans-serif;
`;

const buttonAnimation = keyframes`
  0% { background-position: 0%; }
  100% { background-position: 400%; }
`;

const CTAButton = styled.button`
  text-decoration: none;
  position: relative;
  border: none;
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;
  color: #fff;
  width: 9em;
  height: 3em;
  line-height: 2em;
  text-align: center;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 300%;
  border-radius: 30px;
  z-index: 1;
  margin-top: 50px;
  text-transform: uppercase;
  letter-spacing: 2px;

  &:hover {
    animation: ${buttonAnimation} 8s linear infinite;
    border: none;
  }

  &:before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 35px;
    transition: 1s;
  }

  &:hover::before {
    filter: blur(20px);
  }

  &:active {
    background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  }
`;

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

function CustomStars() {
  const starsRef = useRef();
  const colors = [0x00ffff, 0xff00ff, 0xffff00, 0xff0000, 0x0000ff, 0xffffff];

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.x += 0.0002;
      starsRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <group ref={starsRef}>
      {[...Array(1000)].map((_, i) => (
        <mesh key={i} position={[
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 300
        ]}>
          <sphereGeometry args={[0.2, 8, 8]} />
          <meshBasicMaterial color={new THREE.Color(colors[Math.floor(Math.random() * colors.length)])} />
        </mesh>
      ))}
    </group>
  );
}

function LandingPage() {
  return (
    <LandingContainer>
      <CanvasContainer>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <CustomStars />
          <Msphere scale={2} />
        </Canvas>
      </CanvasContainer>
      <TitleContainer>
        <Title>Insight Decor</Title>
      </TitleContainer>
      <Subtitle>
        Step into the future of home design with our cutting-edge AR technology.
        Transform your space and bring your vision to life like never before.
      </Subtitle>
      <CTAButton>Start Designing</CTAButton>
    </LandingContainer>
  );
}

export default LandingPage;