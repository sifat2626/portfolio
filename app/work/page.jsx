"use client"
import { animate, motion } from "framer-motion"

import "swiper/css"

export const metadata = {
  title: "Portfolio - Full Stack Development Projects",
  description:
    "Explore my portfolio featuring full-stack web applications built with Node.js, Express.js, React, MongoDB, and modern web technologies. View live projects and source code.",
  keywords: [
    "Full Stack Portfolio",
    "Web Development Projects",
    "Node.js Projects",
    "React Applications",
    "MongoDB Projects",
    "Study Companion",
    "ClayZen",
    "TieTheKnot",
    "JavaScript Projects",
  ],
  openGraph: {
    title: "Portfolio - Full Stack Development Projects | Ashraful Sifat",
    description:
      "View my complete portfolio of full-stack web applications and development projects.",
    url: "https://ashraful-sifat.vercel.app/work",
  },
}
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { useState } from "react"
import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects = [
  {
    num: "01",
    category: "full stack",
    title: "Study Companion",
    description:
      "A tutoring platform where students upload tasks, tutors bid, and students select tutors to complete assignments.",
    features: [
      "Implemented real-time messaging with Socket.io for smooth communication between students and tutors",
      "Built secure REST APIs for authentication, task management, and payment workflow",
    ],
    stack: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Prisma" },
      { name: "MongoDB" },
      { name: "Socket.io" },
    ],
    image: "/assets/Images/study-companion.png", // Replace with actual image path
    live: "https://studycompanion.online/", // Replace with actual live link
    github: "https://github.com/sifat2626/study-companion",
  },
  {
    num: "02",
    category: "full stack",
    title: "ClayZen",
    description:
      "Welcome to ClayZen, your ultimate destination for discovering exquisite artisanal creations!",
    features: [
      "Seamless CRUD operations for craft items",
      "Browse craft subcategories easily",
      "User-specific access control for privacy",
    ],
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "React.js" },
      { name: "Tailwind" },
      { name: "Node.js" },
    ],
    image: "/assets/Images/crafty.png",
    live: "https://travel-guru-a9df2.web.app/",
    github: "https://github.com/sifat2626/crafty-client",
  },
  {
    num: "03",
    category: "full stack",
    title: "TieTheKnot",
    description:
      "Welcome to TieTheKnot, your premier destination for navigating the realm of matrimonial opportunities!",
    features: [
      "Extensive biodata listings with diverse profiles",
      "Advanced search functionality for finding matches",
      "User-friendly dashboard for profile management",
      "Add to favorites for quick access to profiles",
      "Comprehensive admin dashboard for management",
    ],
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Tailwind" },
      { name: "React.js" },
      { name: "Node.js" },
    ],
    image: "/assets/Images/matrimoni.png",
    live: "https://tietheknot-3a6f0.web.app/",
    github: "https://github.com/sifat2626/matrimony-client",
  },
  {
    num: "04",
    category: "frontend",
    title: "Gable",
    description:
      "Welcome to Gable, your premier destination for navigating the realm of professional opportunities!",
    features: [
      "Comprehensive job listings across various industries",
      "Advanced search functionality to find relevant jobs",
      "User-friendly dashboard for tracking applications",
      "Blog creation and management",
    ],
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "JavaScript" },
      { name: "Tailwind" },
      { name: "React.js" },
      { name: "Firebase" },
    ],
    image: "/assets/Images/gable.png",
    live: "https://webby-522d9.web.app/",
    github: "https://github.com/sifat2626/job-portal-client",
  },
  {
    num: "05",
    category: "frontend",
    title: "OmniFood",
    description: "Your ultimate meal planner and delivery app!",
    features: ["Choose recipe for your preferred diet!"],
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/assets/Images/omnifood.png",
    live: "https://sifat2626.github.io/OmniFood/",
    github: "https://github.com/sifat2626/OmniFood",
  },
]

function Work() {
  const [project, setProject] = useState(projects[0])
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex])
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="-mt-6 list-disc pl-5">
                {project.features?.map((feature, index) => (
                  <li key={index} className="text-sm col-span-1 mt-0.5">
                    {feature}
                  </li>
                ))}
              </ul>
              <ul className="flex gap-2">
                {project.stack?.map((item, index) => (
                  <li key={index} className="text-accent text-sm col-span-1">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2  ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt={`${project.title} - ${project.category} project screenshot`}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles={
                  "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                }
                btnStyles={
                  "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                }
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
