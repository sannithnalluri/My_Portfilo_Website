import React from 'react';
import html from "../Asset/html.png"
import Image from 'next/image';
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




const skills = [
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css},
  { name: 'JavaScript', icon: js },
  {name:"nextjs" , icon: nextjs} ,
  {name:"github" , icon: github} ,
  {name:"flutter" , icon: flutter} ,
  {name:"dart" , icon: dart} ,
  {name:"SpringBoot" , icon: springboot} ,
  {name:"reactnative" , icon: reactnative} ,
];

const Skills = () => {
  return (
    <section className='skills bg-muted-blue text-gray-200'>
      <h1 className='heading'>Skills</h1>
      <div className='skills-containers  justify-space-around'>
        <div className='webdevelopemt'>
          <h3>Web developemt</h3>
              <ul className='flex justify-center'>
                <li className='flex m-2 p-4'><Image src={html} alt='logo1' width={30} height={30}/><spam>HTML</spam></li>
                <li className='flex m-2 p-4'><Image src={css}   alt='logo1'width={30} height={30}/><spam>Css</spam></li>
                <li className='flex m-2 p-4'><Image src={reactnative} alt='logo1' width={30} height={30}/><spam>React</spam></li>
                <li className='flex m-2 p-4'><Image src={nextjs}  alt='logo1' width={30} height={30}/><spam>Nextjs</spam></li>
                <li className='flex m-2 p-4'><Image  src={nodejs}  alt='logo1' width={30} height={30}/><spam>nodejs</spam></li>
      
              </ul>
        </div>
        <div className='webdevelopemt'>
          <h3>App developemt</h3>
              <ul className='flex justify-center'>
                <li className='flex m-2 p-4'><Image src={reactnative}   alt='logo1'width={30} height={30}/><spam>React Native</spam></li>
                <li className='flex m-2 p-4'><Image src={flutter}  alt='logo1'width={30} height={30}/><spam>Flutter</spam></li>
                <li className='flex m-2 p-4'><Image src={dart}  alt='logo1'width={30} height={30}/><spam>Dart</spam></li>
                <li className='flex m-2 p-4'><Image src={springboot} alt='logo1' width={30} height={30}/><spam>SpringBoot</spam></li>
                <li className='flex m-2 p-4'><Image  src={html}  alt='logo1'width={30} height={30}/><spam>HTML</spam></li>
      
              </ul>
        </div>
        <div className='webdevelopemt '>
          <h3>SoftWare</h3>
              <ul className='flex justify-center'>
                <li className='flex m-2 p-4'><Image src={github}  alt='logo1' width={30} height={30}/><spam>Github</spam></li>
                <li className='flex m-2 p-4'><Image src={Devops}  alt='logo1' width={30} height={30}/><spam>Devops</spam></li>
                <li className='flex m-2 p-4'><Image src={reactnative}  alt='logo1' width={30} height={30}/><spam>React</spam></li>
                <li className='flex m-2 p-4'><Image src={nextjs}  alt='logo1' width={30} height={30}/><spam>Nextjs</spam></li>
                <li className='flex m-2 p-4'><Image  src={html}  alt='logo1' width={30} height={30}/><spam>HTML</spam></li>
              </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
