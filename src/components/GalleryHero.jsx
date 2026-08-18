import { motion } from "framer-motion";
import { FaImages, FaArrowDown } from "react-icons/fa";

import hero from "../assets/images/gallery/gallery1.jpg";

export default function GalleryHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Image */}
      <motion.img
        src={hero}
        alt="Church Gallery"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-black/60" />

      {/* Decorative Circles */}
      <motion.div
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-white/10"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full border border-blue-400/10"
      />

      {/* Content - CENTERED */}
      <div className="relative z-20 w-full flex items-center justify-center px-6 py-20">
        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
            <FaImages className="text-blue-300" />
            <span className="text-white font-semibold">
              Moments in TGCH 
            </span>
          </div>

          {/* Heading - Church name on separate lines */}
          <h1 className="font-black text-white leading-none">
            <span className="block text-6xl md:text-8xl">
              LIFE AT
            </span>
            
            <span className="block mt-6 text-blue-300 text-3xl md:text-6xl">
              NSAWAM CENTRAL
            </span>
            
            <span className="block mt-2 text-white text-3xl md:text-6xl">
              ASSEMBLIES OF GOD
            </span>

            <span className="block mt-6 text-yellow-400/90 text-2xl md:text-4xl">
              THE GREAT COMMISSION HOUSE
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mt-8 max-w-2xl mx-auto text-base md:text-xl text-blue-100/90 leading-relaxed">
            Every picture tells a story of worship, fellowship, revival 
            and transformed lives at <strong>The Great Commission House.</strong>
          </p>

          {/* Buttons - VISIBLE AND CENTERED */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a
              href="#gallery"
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Explore Gallery
            </a>

            <a
              href="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Visit Our Church
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >
        <FaArrowDown className="text-2xl" />
      </motion.div>

    </section>
  );
}