"use client"
import Image from "next/image";
import profile from '../assets/abhimanyu_image.png'
import { saveAs } from "file-saver";
import CodeIcon from '@mui/icons-material/Code';
import Skill from "@/components/Skill/Skill";

export default function Home() {
//Java - Python - C - C++ - Javascript - Dart - HTML - CSS - SQL
  const languages = [
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Javascript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Dart",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    },
    {
      name: "Typescript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "SQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    }
  ];
//React.js - Node.js - Tailwind.css - Flutter - Express.js - React Native - Firebase - MongoDB - AWS - Django - Typescript - PostgreSQL
  const frameWorks = [
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Tailwind.css",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    },
    {
      name: "Flutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "AWS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png",
    },
    {
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    
  ]
  
//Git - Jira - Google Cloud Platform - Expo - Notion - Algolia - MySQL - Docker - Jenkins
  const tools = [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Jira",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    },
    {
      name: "Google Cloud Platform",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    },
    {
      name: "Expo",
      icon: "https://seeklogo.com/images/E/expo-go-app-logo-BBBE394CB8-seeklogo.com.png",
    },
    {
      name: "Notion",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg",
    },
    {
      name: "Algolia",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/algolia/algolia-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Jenkins",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    }
  ];
  
  return (
    <div className="flex w-screen justify-center h-[90vh] gap-[70px]">
      <div className=" flex justify-center items-start w-[52vw] gap-[30px] mt-[20vh]">
          <Image className=" object-contain border-[4px] border-black rounded-xl shadow-md w-[20vw] hover:scale-[1.02] transition-all duration-200 ease-in-out" src={profile} alt="abhimanyu" />
          <div className=" mt-[10px]">
            <p>Hey, I'm Abhimanyu, a passionate Computer Science student at UC Davis! I have lots of experience in fields of Computer Science including full-stack development, software engineering, web dev, machine learning, and AI.</p>
            <p className="mt-[20px]">Outside of academics, I like to play many instruments including the Indian Carnatic Violin, Flute, Tenor Saxophone, and Bass Clarinet, and I also love working out, playing basketball, and hanging with friends!</p>
            <a href="./resume.pdf" download="abhimanyu-warrier-resume.pdf" className={`cursor-pointer flex items-center justify-center hover:border-[2px] hover:border-black hover:bg-[#f5f0e6] text-[#f5f0e6] hover:text-black bg-black mt-[20px] w-[120px] h-[50px] rounded-md shadow-md gap-[5px] px-[10px]`}>
              <p className="">Resume</p>
              <CodeIcon className=""/>
            </a>
          </div>
      </div>

      <div className=" w-[40vw] mt-[3vh] flex flex-col items-center">
        <h1 className=" text-[40px] font-semibold mb-[20px]">Skills</h1>
        <div className="flex justify-center gap-[10px]">
          <div className="flex flex-col justify-start gap-[10px]">
            <p className="text-[23px] font-medium ">Languages</p>
            {
              languages.map((language) => {
                return (
                  <Skill item={language} />
                )
              })
            }
          </div>
          <div className="flex flex-col justify-start gap-[10px]">
          <p className="text-[23px] font-medium">Frameworks</p>
            {
              frameWorks.map((frameWork) => {
                return (
                  <Skill item={frameWork} />
                )
              })
            }
          </div>
          <div className="flex flex-col justify-start gap-[10px]">
          <p className="text-[23px] font-medium">Tools</p>
            {
              tools.map((tool) => {
                return (
                  <Skill item={tool} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
