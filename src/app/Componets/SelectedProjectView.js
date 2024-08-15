'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import "./Hero.Module.css";

export default function ProjectDetails({ selectedProject }) {
  return (
    <motion.div
      key={selectedProject.title}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="p-6 bg-muted-blue text-gray-900 rounded-lg shadow-lg"
    >
      <h1 className='text-3xl font-bold mb-4 text-dark-cyan'>{selectedProject.title}</h1>

      {/* Main Project Image */}
      <div className="mb-6 relative w-full h-80">
        <Image
          src={selectedProject.image1}
          alt={`${selectedProject.title} Main Image`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Small Project Images */}
      <div className="flex space-x-4 mb-6">
        <div className="relative w-1/2 h-48">
          <Image
            src={selectedProject.image2}
            alt={`${selectedProject.title} Small Image 1`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-1/2 h-48">
          <Image
            src={selectedProject.image3}
            alt={`${selectedProject.title} Small Image 2`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Project Description */}
      <div className="mb-6">
        <h4 className='text-lg font-semibold mb-2 text-dark-cyan'>Project Description</h4>
        <p className="mb-4 text-base">{selectedProject.description1}</p>
        <p className="mb-4 text-base">{selectedProject.description2}</p>
        <p className="text-base">{selectedProject.description3}</p>
      </div>

      {/* Tech Stack and Deployment Links */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 text-dark-cyan">Tech Stack & Deployment</h3>
        <div className="flex flex-wrap space-x-2 mt-2">
          {selectedProject.techStack.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4">
          <a href={selectedProject.url} className="text-dark-cyan underline">
            {selectedProject.url}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
