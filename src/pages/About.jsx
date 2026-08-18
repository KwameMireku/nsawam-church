import { motion } from "framer-motion";
import {
  FaChurch,
  FaCross,
  FaHeart,
  FaHandsHelping,
  FaBible,
  FaPrayingHands,
  FaUsers,
  FaArrowRight,
  FaGlobeAfrica,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// 👇 IMPORT YOUR IMAGE
import bgImage from "../assets/images/Gallery/bg.jpg";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// ——————————————————————————————————————————————
// 🔥 DRAMATIC IMAGE REVEAL
// ——————————————————————————————————————————————
const dramaticReveal = {
  hidden: {
    opacity: 0,
    scale: 0.2,
    rotate: -18,
    borderRadius: "60px",
  },
  visible: {
    opacity: 1,
    scale: [0.2, 1.4, 0.95, 1.05, 0.98, 1],
    rotate: [-18, 12, -6, 4, -2, 0],
    borderRadius: "32px",
    transition: {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      scale: {
        duration: 2.2,
        ease: [0.22, 1, 0.36, 1],
        times: [0, 0.35, 0.5, 0.65, 0.8, 1],
      },
      rotate: {
        duration: 2.2,
        ease: [0.22, 1, 0.36, 1],
        times: [0, 0.3, 0.5, 0.7, 0.85, 1],
      },
    },
  },
};

export default function About() {
  return (
    <main className="overflow-hidden bg-white">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[70vh] bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white flex items-center pt-20">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-[550px] h-[550px] rounded-full bg-blue-400/20 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl"
        />

        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <FaCross className="absolute top-32 left-[12%] text-[180px]" />
          <FaCross className="absolute bottom-10 right-[12%] text-[220px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-24 w-full">

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
            >
              <FaChurch className="text-blue-200" />
              <span className="text-sm font-semibold">
                The Great Commission House
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[5px] text-blue-200 font-bold mt-8"
            >
              About Our Church
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-black leading-[1] mt-4"
            >
              More Than A Church.
              <span className="block text-blue-300 mt-2">
                A Family. A Mission.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-blue-100 max-w-2xl leading-8 mt-8"
            >
              Discover who we are, what we believe, what drives us,
              and why we exist as a church family in Nsawam.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mt-9"
            >
              <Link to="/leadership">
                <motion.div
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-white text-blue-900 px-7 py-4 rounded-full font-bold flex items-center gap-2 shadow-xl"
                >
                  Meet Our Leadership
                  <FaArrowRight />
                </motion.div>
              </Link>

              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="border border-white/30 bg-white/5 backdrop-blur-sm px-7 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-all"
                >
                  Plan Your Visit
                </motion.div>
              </Link>
            </motion.div>

          </motion.div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white [clip-path:polygon(0_100%,100%_100%,100%_30%,75%_65%,50%_25%,25%_65%,0_30%)]" />

      </section>


      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="py-24 md:py-32">

        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >

              <p className="text-blue-700 font-bold uppercase tracking-[4px]">
                Who We Are
              </p>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 leading-tight">
                Welcome to
                <span className="block text-blue-800">
                  Nsawam Central
                </span>
              </h2>

              <div className="w-20 h-1 bg-blue-800 rounded-full mt-7" />

              <p className="text-gray-600 text-lg leading-8 mt-8">
                Nsawam Central Assemblies of God, The Great Commission
                House, is a community of believers committed to Jesus
                Christ, the Word of God, prayer, fellowship and the
                mission of reaching people with the Gospel.
              </p>

              <p className="text-gray-600 leading-8 mt-5">
                We believe that every person matters to God and that
                the local church should be a place where people can
                encounter Christ, discover their purpose and grow
                in their relationship with Him.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 font-bold text-blue-800 hover:gap-4 transition-all"
              >
                Connect With Us
                <FaArrowRight />
              </Link>

            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >

              <div className="absolute -inset-5 bg-blue-100 rounded-[3rem] rotate-3" />

              <div className="relative bg-blue-950 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl">

                <div className="flex items-center justify-between">

                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                    <FaChurch className="text-3xl text-blue-300" />
                  </div>

                  <span className="text-blue-300 text-sm font-bold tracking-widest">
                    ESTABLISHED IN FAITH
                  </span>

                </div>

                <h3 className="text-3xl md:text-4xl font-black mt-10">
                  The Great
                  <span className="block text-blue-300">
                    Commission House
                  </span>
                </h3>

                <p className="text-blue-100 leading-8 mt-6">
                  We exist to glorify God, build strong disciples,
                  strengthen families and take the Gospel of Jesus
                  Christ beyond the walls of the church.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-10">

                  <div className="bg-white/10 rounded-2xl p-5">
                    <FaBible className="text-2xl text-blue-300" />
                    <p className="font-bold mt-3">God's Word</p>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-5">
                    <FaPrayingHands className="text-2xl text-blue-300" />
                    <p className="font-bold mt-3">Prayer</p>
                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =========================================================
          OUR STORY
      ========================================================= */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >

            <p className="text-blue-700 font-bold uppercase tracking-[4px]">
              Our Story
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
              A Journey Of Faith
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-6">
              Every church has a story. Ours is a story of God's
              faithfulness, grace, people and a continuing commitment
              to the Great Commission.
            </p>

          </motion.div>

          <div className="relative max-w-4xl mx-auto mt-16">

            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-blue-200 md:-translate-x-1/2" />

            {[
              {
                number: "01",
                title: "Our Foundation",
                text: "Built upon the foundation of Jesus Christ and the authority of God's Word.",
              },
              {
                number: "02",
                title: "Our Growth",
                text: "Through prayer, fellowship and faithful service, our church family continues to grow.",
              },
              {
                number: "03",
                title: "Our Mission",
                text: "We continue to carry the Gospel to our community and beyond.",
              },
              {
                number: "04",
                title: "Our Future",
                text: "We look forward with faith, trusting God for greater impact and greater kingdom influence.",
              },
            ].map((item, index) => (

              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -40 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className={`relative flex items-start gap-6 mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >

                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-blue-900 border-4 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold z-10">
                  {item.number}
                </div>

                <div className="ml-16 md:ml-0 md:w-[45%] bg-white p-7 rounded-3xl shadow-lg border border-gray-100">

                  <p className="text-blue-700 text-sm font-bold uppercase tracking-widest">
                    {item.number}
                  </p>

                  <h3 className="text-2xl font-black mt-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-7 mt-4">
                    {item.text}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          MISSION / VISION
      ========================================================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-7"
          >

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-[2rem] bg-blue-950 text-white p-9 md:p-12 shadow-xl"
            >

              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-blue-500/20 blur-2xl" />

              <div className="relative">

                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                  <FaHandsHelping className="text-3xl text-blue-300" />
                </div>

                <p className="uppercase tracking-[4px] text-blue-300 font-bold mt-8">
                  Our Mission
                </p>

                <h3 className="text-3xl md:text-4xl font-black mt-3">
                  To Make Disciples
                </h3>

                <p className="text-blue-100 leading-8 mt-6">
                  To proclaim the Gospel of Jesus Christ, make disciples,
                  nurture believers and empower people to become effective
                  servants of God in their communities and beyond.
                </p>

              </div>

            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-[2rem] bg-gray-100 p-9 md:p-12 shadow-xl"
            >

              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-blue-200/50 blur-2xl" />

              <div className="relative">

                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <FaGlobeAfrica className="text-3xl text-blue-800" />
                </div>

                <p className="uppercase tracking-[4px] text-blue-700 font-bold mt-8">
                  Our Vision
                </p>

                <h3 className="text-3xl md:text-4xl font-black mt-3">
                  Christ In Every Life
                </h3>

                <p className="text-gray-600 leading-8 mt-6">
                  To become a vibrant, Christ-centered church that
                  transforms lives, strengthens families and impacts
                  our community and the world through the Gospel.
                </p>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          CORE VALUES
      ========================================================= */}

      <section className="py-24 bg-blue-950 text-white">

        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >

            <p className="text-blue-300 font-bold uppercase tracking-[4px]">
              What We Stand For
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Our Core Values
            </h2>

            <p className="text-blue-100 max-w-2xl mx-auto mt-6 leading-8">
              These values shape the way we worship, serve,
              lead and live together as a church family.
            </p>

          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14"
          >

            {[
              {
                icon: FaCross,
                title: "Christ-Centered",
                text: "Jesus Christ is at the center of everything we do.",
              },
              {
                icon: FaBible,
                title: "Biblical",
                text: "We build our faith and lives upon God's Word.",
              },
              {
                icon: FaHeart,
                title: "Loving",
                text: "We demonstrate the love of Christ to everyone.",
              },
              {
                icon: FaHandsHelping,
                title: "Serving",
                text: "We use our gifts and abilities to serve God and people.",
              },
            ].map((value) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  whileHover={{ y: -10 }}
                  className="bg-white/10 border border-white/10 rounded-3xl p-7 backdrop-blur-sm hover:bg-white/15 transition-colors"
                >

                  <Icon className="text-3xl text-blue-300" />

                  <h3 className="text-xl font-bold mt-6">
                    {value.title}
                  </h3>

                  <p className="text-blue-100 text-sm leading-7 mt-3">
                    {value.text}
                  </p>

                </motion.div>
              );
            })}

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          WHAT WE BELIEVE  —  STRETCHED & FIXED
          Left column is wider → text is fully visible
      ========================================================= */}

      <section className="py-24 relative overflow-hidden">

        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-50/60 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-60 -left-60 w-[700px] h-[700px] rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8">

          {/*
            👇 STRETCHED LAYOUT:
            Left column (text) is wider → 1.3fr
            Right column (image) is narrower → 0.8fr
            This gives the belief list more room.
          */}
          <div className="grid lg:grid-cols-[1.3fr_0.8fr] gap-12 xl:gap-16 items-center">

            {/* ——— LEFT COLUMN: text + beliefs (now wider) ——— */}

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >

              <p className="text-blue-700 font-bold uppercase tracking-[4px]">
                Our Faith
              </p>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 leading-tight">
                What We Believe
              </h2>

              <p className="text-gray-600 text-lg leading-8 mt-6 max-w-lg">
                Our faith is rooted in Scripture and centered on
                the person and work of Jesus Christ.
              </p>

              {/* Belief list – now with extra breathing room */}

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-4 mt-8"
              >

                {[
                  "We believe in one true and living God.",
                  "We believe that Jesus Christ is Lord and Savior.",
                  "We believe in the authority and truth of the Holy Scriptures.",
                  "We believe in the power and work of the Holy Spirit.",
                  "We believe in prayer, worship and Christian fellowship.",
                  "We believe that the Church is called to fulfill the Great Commission.",
                ].map((belief, index) => (

                  <motion.div
                    key={belief}
                    variants={fadeUp}
                    whileHover={{
                      x: 10,
                      scale: 1.01,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    // 👇 Added overflow-visible + break-words to prevent clipping
                    className="flex items-center gap-5 p-4 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-blue-300 hover:bg-blue-50/70 hover:shadow-lg transition-all duration-300 overflow-visible break-words"
                  >

                    <div className="w-9 h-9 shrink-0 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-bold shadow-md">
                      {index + 1}
                    </div>

                    <p className="font-semibold text-gray-800 text-base md:text-lg leading-relaxed">
                      {belief}
                    </p>

                  </motion.div>

                ))}

              </motion.div>

            </motion.div>


            {/* ——— RIGHT COLUMN: DRAMATIC IMAGE (narrower) ——— */}

            <motion.div
              variants={dramaticReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="relative"
            >

              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-blue-200/40 via-blue-100/20 to-transparent blur-xl -z-10"
              />

              <motion.div
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-blue-400/20 blur-3xl -z-10"
              />

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/20 border-2 border-white/20">

                <img
                  src={bgImage}
                  alt="Nsawam Central Assemblies of God Church"
                  className="w-full h-auto max-h-[480px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-white/30 rounded-tl-2xl" />
                <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-white/30 rounded-tr-2xl" />
                <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-white/30 rounded-bl-2xl" />
                <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-white/30 rounded-br-2xl" />

                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.9,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md text-blue-900 text-xs md:text-sm font-extrabold tracking-wider px-5 py-2.5 rounded-full shadow-lg border border-white/50 whitespace-nowrap"
                >
                  <span className="flex items-center gap-2">
                    <FaCross className="text-blue-700" />
                    The Great Commission House
                    <FaCross className="text-blue-700" />
                  </span>
                </motion.div>

              </div>

              <motion.div
                animate={{
                  y: [0, -18, 0],
                  opacity: [0.4, 0.9, 0.4],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-blue-300/20 blur-xl"
              />

              <motion.div
                animate={{
                  y: [0, 16, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.1,
                }}
                className="absolute -bottom-3 -left-3 w-20 h-20 rounded-full bg-blue-400/15 blur-xl"
              />

            </motion.div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SCRIPTURE / GREAT COMMISSION
      ========================================================= */}

      <section className="relative py-28 bg-gradient-to-br from-blue-900 to-blue-950 text-white overflow-hidden">

        <motion.div
          animate={{
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full border border-white/10"
        />

        <motion.div
          animate={{
            rotate: [0, -5, 0, 5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 -top-32 w-96 h-96 rounded-full border border-white/10"
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <FaCross className="text-5xl text-blue-300 mx-auto" />

            <p className="text-2xl md:text-4xl font-serif italic leading-relaxed mt-8">
              “Go therefore and make disciples of all nations,
              baptizing them in the name of the Father and of the
              Son and of the Holy Spirit.”
            </p>

            <div className="w-16 h-1 bg-blue-300 rounded-full mx-auto my-7" />

            <p className="font-bold tracking-widest text-blue-200">
              MATTHEW 28:19
            </p>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="py-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-6 text-center"
        >

          <div className="w-20 h-20 rounded-3xl bg-blue-50 flex items-center justify-center mx-auto">
            <FaStar className="text-3xl text-blue-800" />
          </div>

          <h2 className="text-4xl md:text-5xl font-black mt-7">
            You Have A Place Here
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-8 mt-5">
            Whether you're looking for a church family, seeking
            to grow in your faith or simply want to know more about
            Jesus, we'd love to welcome you.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-9">

            <Link
              to="/contact"
              className="bg-blue-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              Plan Your Visit
            </Link>

            <Link
              to="/ministries"
              className="border border-gray-200 px-8 py-4 rounded-full font-bold text-gray-800 hover:border-blue-800 hover:text-blue-800 transition-all"
            >
              Explore Our Ministries
            </Link>

          </div>

        </motion.div>

      </section>

    </main>
  );
}