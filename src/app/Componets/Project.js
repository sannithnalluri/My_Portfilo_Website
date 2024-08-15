'use client'
import { useState } from 'react';
import { animate, easeIn, motion } from 'framer-motion';
import Image from 'next/image';
import ProjectDetails from './SelectedProjectView';
import startify1 from "../Asset/startfiy360-1.png";
import startify2 from "../Asset/st-2.png";
import startify3 from "../Asset/st-3.png";
import nan1 from "../Asset/naandi.png";
import nan2 from "../Asset/naandi3.png";
import nan3 from "../Asset/naandi2.png";
import hype1 from "../Asset/hype1.png"
import hype2 from "../Asset/hype2.png"
import hype3 from "../Asset/hype3.png"
import hw1 from "../Asset/hw1.png"
import hw2 from "../Asset/hw2.png"
import hw3 from "../Asset/hw3.png"
import html from "../Asset/html.png"
import css from "../Asset/css.png"
import js from "../Asset/js.png"
import dart from "../Asset/dart.png"
import Devops from "../Asset/Devops.png"
import flutter from "../Asset/flutter.png"
import github from "../Asset/github.png"
import java from "../Asset/java.png"
import nextjs from "../Asset/nextjs.jpeg"
import nodejs from "../Asset/nodejs.png"
import reactnative from "../Asset/reactnative.png"
import springboot from "../Asset/springboot.png"
import "./Hero.Module.css";


const projects = [
  {
    title: 'Hyperide',
    subtitle: 'Developed Website for Bike Booking using ReactJs,FastAPI',
    techStack: ['ReactJS', 'FastAPI', 'PhonePe'],
    techStackLogo: [reactnative, nextjs, css],
    details: 'Detailed information about Project One...',
    image1:hype1,
    image2:hype2,
    image3:hype3,
    url:"https://hyperride.netlify.app/",
    description1:"Integrate Developed d MongoDB, reducing storage by 95%, and implemented microservices for a 5% server response improvement, while also integrating PhonePe for more efficient transactions.Achieved a 40% increase in booking rates, 20% boost in customer retention, and 15% rise in average customer lifetime ",
    description2:"value through strategic optimizations and UI enhancements, demonstrating strong team leadership.Tech Stack: ReactJs, Fast Api, MongoDB, Microservices architecture, PhonePe integration, UI/UX optimization",
  },
  {
    title: 'Startify360',
    subtitle: 'Developed Website for SaaS Platform using ReactJs',
    techStack: ['React', 'Next.js', 'Tailwind CSS'],
    techStackLogo: [reactnative, nextjs, css],
    details: 'Detailed information about Project One...',
    image1:startify1,
    image2:startify2,
    image3:startify3,
    url:"https://startify360.in",
    description1:"Design and Developed Website for SaaS Platform using ReactJs. Research on UX/UI and Behaviour pattern of User. Implemented Framer Motion, Tailwind CSS for Good Visualize Impact and Responsive Design for Both mobile and desktop. Grab the User attention and improved the Loading Speed using ReactJs.",
    description2:"shdflasdjflknsd s ijnfohafn, zcbuefljNlnflass fehrhlasndnasldasdad"
  },
  {
    title: 'Naandi Ventures',
    subtitle: 'Developed Website for a venture capital company using Next.js',
    techStack: ['JavaScript', 'Next.js', 'tailwind'],
    details: 'Detailed information about Project Two...',
    image1:nan1,
    image2:nan3,
    image3:nan2,
    description1:" developed for a venture capital company using Next.js and Tailwind CSS. The site features dynamic routing for detailed portfolio pages, responsive design for seamless viewing on all devices, and optimized performance through server-side rendering and static site generation.",
    description2:"Tailwind CSS was utilized for a clean and intuitive UI, enhancing user navigation and overall experience. The project successfully delivers a professional online presence, helping the company engage with potential investors and partners.",
    url:"https://naanduventures.netlify.app/"
  },
  {
    title: 'Happening Wave',
    subtitle: 'An App Developed Using ReactNative,Spring Boot',
    techStack: ['React Native', 'SpringBoot', 'Spring Security'],
    details: 'Detailed information about Project Two...',
    image1:hw1,
    image2:hw2,
    image3:hw3,
    description1:"Happening Wave is an event management application designed to streamline the process of booking, promoting, and managing events. Whether it's a festive celebration, college function, or corporate event, Happening Wave provides a comprehensive platform with features like event booking, venue suggestions, weather insights, food supply chain management, and much more.",
    url:"https://github.com/sannithnalluri/HappeningWave2"
  },

];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="Projects flex h-screen">
      {/* Left Side: Project Titles */}
      <div className="w-2/5 p-8 bg-gray-800 text-white">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-6 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-400">{project.subtitle}</p>
          </motion.div>
        ))}
      </div>

      {/* Right Side: Project Details */}
      <div className="project-detials w-3/5 p-8  text-white">
        {selectedProject ? (
          <motion.div
          key={selectedProject.title}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="h-full overflow-y-auto p-4"
        >
          <ProjectDetails selectedProject={selectedProject} />
        </motion.div>
        ) : (
          <p className="text-gray-500">Select a project to see the details.</p>
        )}
      </div>
    </div>
  );
}
