import Image from 'next/image';
import React from 'react';
import myimg from "../Asset/myimage.jpg";
import "./Hero.Module.css";

const About = () => {
  return (
    <section className="about-section py-8 sm:py-16 text-white flex flex-col sm:flex-row justify-center items-center">
      <div className="mb-8 sm:mb-0 sm:mr-8">
        <div className='aboutimg'>
          <Image src={myimg} alt="Sannith Kumar" className="w-full h-auto" />
        </div>
      </div>
      <div className="container mx-4 sm:mx-20 px-4 sm:px-6 w-full sm:w-2/4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">About Me</h2>
        <p className="text-base sm:text-lg mb-4">
          Hi there! I'm Sannith Kumar, a passionate Full Stack Web App Developer with a strong foundation in both frontend and backend technologies. With a keen eye for detail and a commitment to excellence, I specialize in creating seamless, user-centric web applications that not only look great but also perform exceptionally well.
        </p>
        <p className="text-base sm:text-lg mb-4">
          Over the years, I've honed my skills in technologies like React, Next.js, Tailwind CSS, Java, Spring Boot, and more. I enjoy the process of transforming ideas into scalable, maintainable, and impactful solutions. Whether it's crafting intuitive user interfaces or developing robust backend systems, I thrive on tackling challenges and continuously learning to stay at the forefront of the ever-evolving tech landscape.
        </p>
        <p className="text-base sm:text-lg">
          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
        </p>
      </div>
    </section>
  );
};

export default About;
