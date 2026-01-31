import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-violet-900 to-black
      flex flex-col-reverse xl:flex-row items-center justify-center
      px-6 md:px-12 lg:px-24 relative overflow-hidden">

      {/* Left Section */}
      <div className="z-40 w-full xl:w-1/2 text-center xl:text-left mt-16 xl:mt-0">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 40, damping: 25, delay: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          Building Fast <br /> Reliable Results
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 40, damping: 25, delay: 0.9 }}
          className="text-lg md:text-xl lg:text-2xl text-purple-200 max-w-xl mx-auto xl:mx-0"
        >
          I deliver robust, production-ready websites and web apps with speed and
          precision. Every project is backed by clean code, clear communication,
          and on-time delivery.
        </motion.p>

     

      </div>

      {/* Right Section */}
      <div className="w-full xl:w-1/2 h-[350px] md:h-[450px] xl:h-[600px] relative">
        <Spline
          className="absolute inset-0"
          scene="https://prod.spline.design/yNrunLgvrSeyxjtA/scene.splinecode"
        />
      </div>
    </section>
  );
};

export default HeroSection;
