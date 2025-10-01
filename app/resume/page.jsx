"use client"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata = {
  title: "Resume - Skills, Experience & Education",
  description:
    "View Ashraful Sifat's professional resume including backend development skills, work experience at SM Technology, education from Faridpur Engineering College, and technical certifications.",
  keywords: [
    "Backend Developer Resume",
    "Node.js Developer CV",
    "JavaScript Developer Resume",
    "MongoDB Developer",
    "PostgreSQL Developer",
    "Docker Developer",
    "Full Stack Developer Resume",
    "Ashraful Sifat Resume",
    "CSE Graduate Resume",
  ],
  openGraph: {
    title: "Resume - Skills, Experience & Education | Ashraful Sifat",
    description:
      "Professional resume showcasing backend development expertise, technical skills, and work experience.",
    url: "https://ashraful-sifat.vercel.app/resume",
  },
}
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import { FaCss3, FaHtml5, FaJs, FaNode, FaReact } from "react-icons/fa"
import { SiMongodb, SiPostman, SiTailwindcss, SiDocker } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import { RiNextjsFill } from "react-icons/ri"
import { FaCode } from "react-icons/fa6"

const about = {
  title: "About me",
  description:
    "Backend Developer — passionate about problem-solving and building scalable, high-performance web applications. Dedicated to continuous learning with a strong focus on Node.js, Docker, and system design.",
  info: [
    { fieldName: "Name", fieldValue: "Ashraful Sifat" },
    { fieldName: "Phone", fieldValue: "(+880) 1303 291 451" },
    { fieldName: "Experience", fieldValue: "1+ year" },
    { fieldName: "Nationality", fieldValue: "Bangladeshi" },
    { fieldName: "Languages", fieldValue: "Bengali, English" },
    { fieldName: "Email", fieldValue: "ashrafulsifat26@gmail.com" },
  ],
}

const experience = {
  title: "My experience",
  description:
    "Currently working as a Backend Developer focusing on Node.js, REST APIs, authentication, and scalable system design.",
  items: [
    {
      institute: "SM Technology",
      degree: "Backend Developer",
      duration: "2024 - Present",
    },
  ],
}

const courses = {
  title: "Courses & Certifications",
  description:
    "Completed professional certifications to strengthen my web development and backend expertise.",
  items: [
    {
      institute: "Programming Hero",
      degree: "Certified Web Developer",
      duration: "6 months",
    },
    {
      institute: "Ostad",
      degree: "Certified Backend Developer",
      duration: "7 months",
    },
  ],
}

const education = {
  title: "My education",
  description:
    "Completed B.Sc in Computer Science & Engineering with a focus on software development and problem-solving.",
  items: [
    {
      institute: "Faridpur Engineering College",
      degree: "B.Sc in CSE",
      duration: "2019 - 2024",
    },
  ],
}

const problemSolving = {
  title: "Problem Solving",
  description:
    "I actively practice problem-solving to strengthen my algorithms and data structure skills.",
  items: [
    { platform: "LeetCode", link: "https://leetcode.com/u/bAnduOVIZQ/" },
    {
      platform: "Codeforces",
      link: "https://codeforces.com/profile/ash_sifat26",
    },
  ],
}

const skills = {
  title: "My skills",
  description:
    "Skilled in backend development with expertise in Node.js, Express.js, and MongoDB. Proficient in JavaScript, React, Next.js, PostgreSQL, Docker, and modern development tools.",
  skillList: [
    { icon: <FaJs />, name: "javascript" },
    { icon: <FaNode />, name: "node.js" },
    { icon: <SiMongodb />, name: "mongo db" },
    { icon: <SiDocker />, name: "docker" },
    { icon: <SiPostman />, name: "postman" },
    { icon: <FaReact />, name: "react.js" },
    // { icon: <SiTailwindcss />, name: "tailwind.css" },
    { icon: <RiNextjsFill />, name: "next.js" },
    { icon: <BiLogoPostgresql />, name: "postgresql" }, // You can swap the icon with a Postgres one if you have
  ],
}

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="problemSolving">Problem Solving</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.title}
                  </h3>
                  <p>{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl">{experience.title}</h3>
                <p className="max-w-[600px] mx-auto text-white/60 xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institute}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Courses */}
            <TabsContent value="courses" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl">{courses.title}</h3>
                <p className="max-w-[600px] mx-auto text-white/60 xl:mx-0">
                  {courses.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {courses.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <p className="text-white/60">{item.institute}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl">{education.title}</h3>
                <p className="max-w-[600px] mx-auto text-white/60 xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <p className="text-white/60">{item.institute}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Problem Solving */}
            <TabsContent value="problemSolving" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl">{problemSolving.title}</h3>
                <p className="max-w-[600px] mx-auto text-white/60 xl:mx-0">
                  {problemSolving.description}
                </p>
                <ul className="flex flex-col xl:flex-row gap-6 mt-6 justify-center xl:justify-start">
                  {problemSolving.items.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#232329] py-3 px-6 rounded-xl hover:bg-accent hover:text-black transition-colors"
                      >
                        <FaCode className="text-2xl" />
                        <span>{item.platform}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
