import { animate, motion } from "framer-motion";

function Stairs() {
  const stairAnimation = {
    initial: {
      top: "0%",
    },
    animate: {
      top: "100%",
    },
    exit: {
      top: ["100%", "0%"],
    },
  };

  const reversedIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
  };
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit={"exit"}
          transition={{
            delay: reversedIndex(index) * 0.1,
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
}

export default Stairs;
