"use client"
import { motion } from "framer-motion"
import Image from "next/image"

function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[298px] xl:h-[298px] mix-blend-lighten"
        >
          <Image
            src={"/assets/Images/profile-img.jpg"}
            priority
            quality={100}
            fill
            alt="Ashraful Sifat - Professional Backend Developer Profile Photo"
            className="object-cover rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo
