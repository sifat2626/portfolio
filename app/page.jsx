import Footer from "@/components/Footer";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

function page() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center  xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mt-1">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Ashraful Sifat</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white mt-4">
              I&apos;m a passionate web developer skilled in HTML, CSS,
              JavaScript, React, and Node.js. I create intuitive, responsive
              digital experiences and constantly refine my skills in modern web
              technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href={"/assets/CV_Ashraful_Alam_CSE.pdf"} target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles={"flex gap-6"} />
              </div>
            </div>
          </div>
          <div className="mx-auto order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      <Footer />
    </section>
  );
}

export default page;
