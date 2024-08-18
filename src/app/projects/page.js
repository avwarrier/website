"use client"
import React from 'react'
import Project from '@/components/Project/Project'
import hackdavis from '../../assets/hackdavis.png'
import triceratops from '../../assets/triceratops.png'
import project from '../../assets/project.jpg'
import truckpedia from '../../assets/truckpedia.jpeg'
import codelab from '../../assets/codelab.jpeg'
import hackdavistwo from '../../assets/hackdavistwo.jpeg'

const Projects = () => {

    const projects = [
        {
            name: "HackDavis 2024 Winner (2nd place overall)",
            start: "April 27",
            end: "April 28",
            description: [
                "Created a full-stack mobile application called nomad that allows users to drop pins and create hotspots when they see a homeless person in need or a displaced animal in their everyday lives",
                "Developed a fully functioning product using React Native, Google Firebase for Google authentication and the firestore database, and the Google Maps API",
                "Utilized the Haversine formula to create an algorithm that finds the closest animal or homeless shelter to a dropped pin and used React Native Linking to draft an email automatically to that shelter",
                "Implemented the Expo Reverse Geolocation API to automatically create the address of a pin",
                "Used Firestore to track dropped pins and user data such as user drop numbers and made sure to implement real-time updates for all app users whenever a new drop gets posted"
            ],
            skills: "React Native, Javascript, HTML/CSS, Google Firebase, Firestore, Google Maps API, Reverse Geolocation",
            links: [
                {
                    name: "github",
                    link: "https://github.com/Yatsz/Nom.a.d."
                },
                {
                    name: "figma",
                    link: "https://www.figma.com/file/O01rTTxycF7Eo6uZTINcos/nom.a.d.-hack-davis-2024?type=design&mode=design&t=PytM9Z6k4ijeztxH-0"
                }
            ],
            logo: hackdavis,
          },
          {
            name: "Backend Software Engineer @ Training Tool",
            start: "January 2024",
            end: "June 2024",
            description: [
                "Completely rebuilding the backend for UC Davis CodeLab's internal training tool using Java Spring Boot and PostgreSQL",
                "Built Models, Controllers, and Services for different training tool components such as courses, modules, progresses, users, and more",
                "Developed fully functioning CRUD routes for accessing data from our PostgreSQL database based on many different parameters and response types",
                "Working on combining with our existing front end and implementing AWS real-time video streaming to enhance productivity and lesson accessibility for members",
            ],
            skills: "Java, Spring Boot, PostgreSQL, Postman, JPA Repository, AWS, Kubernetes, Docker, API Development",
            links: [],
            logo: codelab,
          },
          {
            name: "Mobile Application Developer @ Truckpedia",
            start: "Sept 2023",
            end: "Dec 2023",
            description: [
                "Developed a mobile version of the Truckpedia Web Application as part of a project with CodeLab UC Davis",
                "Built multiple screens to align with predetermined Figma designs in react native and put them together with a navigation bar",
                "Worked to implement backend routes and get/post data from the company's database and used them to populate our screens",
                "Put together a functioning application with a simple user flow and backend integration",
            ],
            skills: "Typescript, Rest APIs, React Native, Javascript, HTML, CSS, JSON, Postman, Fullstack SWE",
            links: [],
            logo: truckpedia,
          },
          {
            name: "Mesha Productivity Master",
            start: "June 2023",
            end: "Sept 2023",
            description: [
                "Developed a web application that streamlines productivity through the use of a Binder, a file structure like system in order to arrange projects, classes, or files while being able to edit/track progress",
                "Created a React.js frontend using a firestore database which integrates a nested collection structure",
                "Built the ability to use due dates, large file hierarchies, color-coded classes, progress trackers, comment system, note-taking framework (quill)",
            ],
            skills: "React.js, Node.js, Firebase, Firestore, Tailwind.css, Quill Editor, Collections, dnd-kit, React DND",
            links: [
                {
                    name: "tool",
                    link: "https://mesha-7d338.web.app/#"
                }
            ],
            logo: project,
          },
          {
            name: "Davis Triceratops Mobile Application",
            start: "Sept 2022",
            end: "June 2023",
            description: [
                "Developed an app used by over 3500 users and a total of 750 triceratop hunts",
                "Created backend routes to MongoDB database using express and Axios, implemented google authentication, and used AWS S3 database for images",
                "Created front end pages using react native such as the Profile, Login, and Google Maps pages",
                "Used Git, Jira Kanban boards, and Notion software to track progress and review code"
            ],
            skills: "React Native, JSON, API Development, Mongoose Web Server, Axios, Express.js, Google authentication, Jira, Notion Productivity Software, React.js, JavaScript, Cascading Style Sheets (CSS)",
            links: [],
            logo: triceratops,
          },
    ]

    return (
        <div className="flex w-screen flex-wrap gap-[25px] overflow-x-hidden justify-center h-[90vh] pt-[2vh] pb-[3vh]">
            {
              projects.map((project) => {
                return <Project project={project} />
            })
            }
        </div>
      )
}

export default Projects