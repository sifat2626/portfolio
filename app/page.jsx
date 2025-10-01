"use client"
import Photo from "@/components/Photo"
import Socials from "@/components/Socials"
import Stats from "@/components/Stats"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FiDownload } from "react-icons/fi"

function page() {
  return (
    <div className="h-[calc(100vh-110px)] flex flex-col overflow-hidden">
      {/* Main Hero Section - Takes up most space */}
      <section className="flex-1 flex items-start justify-center min-h-0 pt-8 xl:pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-4 xl:gap-8 h-full py-4 xl:py-8 lg:-mt-32">
            {/* Content Section */}
            <div className="text-center xl:text-left order-2 xl:order-1 flex-1 xl:max-w-[600px] flex flex-col justify-start">
              <span className="text-lg sm:text-xl text-accent block mb-2">
                Software Developer
              </span>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight mb-4">
                Hello I&apos;m <br className="hidden sm:block" />
                <span className="text-accent">Ashraful Sifat</span>
              </h1>
              <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 text-white/80 text-sm sm:text-base leading-relaxed">
                I&apos;m a passionate Backend Developer skilled in Node.js,
                Express.js, MongoDB, PostgreSQL, React, and Next.js. I build
                scalable, high-performance web applications, focus on system
                design and problem-solving, and continuously refine my skills in
                modern web technologies.
              </p>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row xl:flex-row items-center justify-center xl:justify-start gap-4 sm:gap-6">
                <Link
                  href={
                    "https://drive.google.com/file/d/1jh2m--KIxNu1pLb_IwqwBgxUhLV-XeVE/view?usp=sharing"
                  }
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2 w-full sm:w-auto hover:bg-accent hover:text-primary transition-colors duration-300"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </Link>
                <div>
                  <Socials containerStyles={"flex gap-4 sm:gap-6"} />
                </div>
              </div>
            </div>

            {/* Photo Section */}
            <div className="order-1 xl:order-2 flex-shrink-0 flex items-center justify-center relative">
              {/* Complete Rotating Border with Random Segments */}
              <div className="absolute inset-0 w-full h-full">
                <svg
                  className="absolute inset-0 w-full h-full"
                  style={{
                    width: "125%",
                    height: "125%",
                    left: "-12.5%",
                    top: "-12.5%",
                    animation: "easeSpin 8s ease-out infinite",
                  }}
                  viewBox="0 0 100 100"
                >
                  {/* Segment 1 - 25% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#00ff99"
                    strokeWidth="3"
                    strokeDasharray="35 105"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    className="opacity-90"
                  />
                  {/* Segment 2 - 30% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#00ff99"
                    strokeWidth="3"
                    strokeDasharray="42 98"
                    strokeDashoffset="-50"
                    strokeLinecap="round"
                    className="opacity-90"
                  />
                  {/* Segment 3 - 20% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#00ff99"
                    strokeWidth="3"
                    strokeDasharray="28 112"
                    strokeDashoffset="-105"
                    strokeLinecap="round"
                    className="opacity-90"
                  />
                  {/* Segment 4 - 15% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#00ff99"
                    strokeWidth="3"
                    strokeDasharray="21 119"
                    strokeDashoffset="-145"
                    strokeLinecap="round"
                    className="opacity-90"
                  />
                </svg>
              </div>
              <Photo />

              <style jsx>{`
                @keyframes easeSpin {
                  0% {
                    transform: rotate(0deg);
                  }
                  20% {
                    transform: rotate(180deg);
                  }
                  40% {
                    transform: rotate(270deg);
                  }
                  70% {
                    transform: rotate(330deg);
                  }
                  100% {
                    transform: rotate(360deg);
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Compact */}
      <section className="flex-shrink-0 bg-primary/50 backdrop-blur-sm ">
        <Stats />
      </section>

      {/* Footer Section - Compact */}
      <section className="flex-shrink-0">
        <Footer />
      </section>
    </div>
  )
}

export default page
