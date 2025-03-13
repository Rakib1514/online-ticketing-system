import React from "react";
import AboutUs_first_section from "./AboutUs_first_section";
import AboutFromCustomer from "./AboutFromCustomer";
import OurTeam from "./OurTeam";
import About_Join_us_sectioin from "./About_Join_us_sectioin";
import About_Executive_team from "./About_Executive_team";

import { motion } from "framer-motion";

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div>
      <div>
        <section className="bg-gray-50">
          <div>
            {/* Section Title */}
            <div className="bg-[#4C1D95] h-[250px] flex flex-col justify-center items-center px-4">
              <motion.h2
                className="text-[30px] md:text-4xl lg:text-5xl font-bold text-center text-gray-200"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                About Project Name
              </motion.h2>
              <motion.p className="text-gray-300 font-medium text-[18px] md:text-[20px] text-center mt-4"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              >
              Online Ticketing System – Fast, secure, hassle-free ticket booking.
              </motion.p>
            </div>

            {/* Content Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20 container mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Left Side: Image */}
              <motion.div
                className="flex justify-center"
                variants={itemVariants}
              >
                <img
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="About Us"
                  className="rounded-lg shadow-lg w-full max-w-md"
                />
              </motion.div>

              {/* Right Side: Text Content */}
              <motion.div className="space-y-6" variants={containerVariants}>
                <motion.h3
                  className="text-3xl font-semibold text-gray-800"
                  variants={itemVariants}
                >
                  Who We Are
                </motion.h3>
                <motion.p
                  className="text-black  leading-relaxed"
                  variants={itemVariants}
                >
                  We are a leading online booking platform dedicated to making
                  your travel and event experiences seamless. Whether you're
                  booking flights, events, or concerts, we provide a hassle-free
                  way to plan your journey.
                </motion.p>
                <motion.p
                  className="text-black  leading-relaxed"
                  variants={itemVariants}
                >
                  Our mission is to connect people with unforgettable
                  experiences. With a user-friendly interface and secure payment
                  options, we ensure that your booking process is smooth and
                  enjoyable.
                </motion.p>
                <motion.div className="flex space-x-4" variants={itemVariants}>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                    Learn More
                  </button>
                  <button className="bg-transparent border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
                    Contact Us
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
      <AboutUs_first_section />
      <AboutFromCustomer />
      <OurTeam />
      <About_Join_us_sectioin />
      <About_Executive_team />
    </div>
  );
}
