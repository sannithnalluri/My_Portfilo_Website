import React from 'react';
import "./Hero.Module.css";

const Hero = () => {
  return (
    <section className="homescreen h-screen  bg-gray-900 text-white">
        <div>
            <nav className='pt-4'>
                <ul className='nav flex flex-end justify-between font-bold w-2/4 p-2 pl-16 pr-36'>
                <li>
            <a href="#home" class="hover:text-purple-400 transition duration-300">Home</a>
          </li>
          <li>
            <a href="#about" class="hover:text-purple-400 transition duration-300">About</a>
          </li>
          <li>
            <a href="#skills" class="hover:text-purple-400 transition duration-300">Skills</a>
          </li>
          <li>
            <a href="#projects" class="hover:text-purple-400 transition duration-300">Projects</a>
          </li>
          <li>
            <a href="#contact" class="hover:text-purple-400 transition duration-300">Contact</a>
          </li>
                </ul>
            </nav>
        </div>
      <div className="hero m-16 mt-24 text-start ">
        <h3 className="text-4xl font-bold " >I'M</h3>
        <h1 className="text-6xl font-bold ">Sannith Kumar Nalluri</h1>
        <p className="mt-4 text-xl">Full Stack Web App Developer</p>
        <p className='w-2/4 mt-16'>Transforming Ideas into Scalable, User-Centric Web Applications with a Blend of Frontend Elegance and Backend Robustness.</p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md">
          <a href='#contact'>
            View My Work
            </a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
