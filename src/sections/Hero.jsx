import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import { Linkedin, Github } from 'lucide-react';
import { SiLeetcode, SiFiverr } from 'react-icons/si';
import { TbBrandFiverr } from "react-icons/tb";

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      {/* Main Flex Container for Side-by-Side Layout */}
      <div className="container mx-auto w-full flex flex-col lg:flex-row items-center justify-center gap-2 px-1">
        {/* Left Side: Text Content */}
        <div className="w-full mt-36 lg:w-1/2 flex flex-col items-center text-center lg:text-left">
          <img
            className="w-40 h-40 mb-8 rounded-full object-cover border-4 border-gray-300"
            src="assets/profile.jpg"
            alt=""
          />
          <p className="sm:text-4xl text-xl font-semibold text-white font-generalsans">
            Hi, I am Mohd. Shaqib Raza <span className="waving-hand">👋</span>
          </p>
          <p className="hero_tag text-gray_gradient mt-2 text-medium sm:text-lg">
            Full-Stack Developer building modern web solutions with React, Node.js, and MongoDB. I focus on clean code, intuitive UI/UX, and fast, scalable performance.
          </p>
          <div className="mt-8 flex items-center justify-center gap-8">
            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/in/mohd-shaqib-raza-4088aa310/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-7 h-7 text-blue-700 cursor-pointer transition-transform duration-300 hover:scale-100 hover:-translate-y-1 hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]" />
            </a>

            {/* GitHub Icon */}
            <a href="https://github.com/IamMSR-01" target="_blank" rel="noopener noreferrer">
              <Github className="w-7 h-7 text-white cursor-pointer transition-transform duration-300 hover:scale-100 hover:-translate-y-1 hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
            </a>

            {/* LeetCode Icon */}
            <a href="https://leetcode.com/u/iammsr/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode className="w-7 h-7 text-yellow-600 cursor-pointer transition-transform duration-300 hover:scale-100 hover:-translate-y-1 hover:drop-shadow-[0_0_5px_rgba(202,138,4,0.8)]" />
            </a>
            {/* Fiverr Icon */}
            <a href="https://www.fiverr.com/shaqib_raza" target="_blank" rel="noopener noreferrer">
              <TbBrandFiverr  className="w-8 h-8 text-green-600 cursor-pointer transition-transform duration-300 hover:scale-100 hover:-translate-y-1 hover:drop-shadow-[0_0_5px_rgba(34,197,94,0.8)]" />
            </a>
          </div>
        </div>

        {/* Right Side: 3D Model Canvas */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px]">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <Leva hidden />
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />

              <HeroCamera isMobile={isMobile}>
                <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
              </HeroCamera>

              {/* <group>
                <ReactLogo position={sizes.reactLogoPosition} />
              </group> */}

              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        </div>
      </div>

      {/* Button at the bottom */}
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 flex justify-center px-4">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
