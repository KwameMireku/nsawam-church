import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaChurch,
  FaHeart,
  FaUsers,
  FaPrayingHands,
  FaCalendarAlt,
  FaClock,
  FaMusic,
  FaChild,
  FaBible,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import pastorCouplePhoto from "../assets/maadad.jpg";
import pastorPhoto from "../assets/images/pastor.jpg";

// 👇 YOUR WORSHIP IMAGE (just one)
import worshipImage from "../assets/images/gallery/wor.jpg";

// ============================================================
// ANIMATIONS
// ============================================================

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
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

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white flex items-center pt-20">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.12)_100%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* HERO CONTENT */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
              >
                <FaChurch className="text-blue-200" />
                <span className="text-sm font-semibold">
                  The Great Commission House
                </span>
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="uppercase tracking-[4px] text-blue-200 font-semibold mt-7"
              >
                Welcome To Our Church
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="mt-4 font-black leading-[1.05] tracking-tight"
              >
                <span className="block whitespace-nowrap text-4xl md:text-5xl xl:text-6xl">
                  Nsawam Central
                </span>
                <span className="block whitespace-nowrap text-4xl md:text-5xl xl:text-6xl text-blue-300 mt-2">
                  Assemblies of God <br />Ghana
                </span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-7 text-lg md:text-xl text-blue-100 max-w-xl leading-8"
              >
                A church family where faith grows, lives are transformed, and
                people discover their purpose in Christ.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-4 mt-9"
              >
                <Link to="/contact">
                  <motion.div
                    whileHover={{ scale: 1.04, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-white text-blue-900 px-7 py-4 rounded-full font-bold shadow-xl flex items-center gap-2"
                  >
                    Worship With Us
                    <FaArrowRight />
                  </motion.div>
                </Link>
                <Link to="/about">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="border border-white/40 bg-white/5 backdrop-blur-sm px-7 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-all"
                  >
                    Discover Our Church
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* PASTOR COUPLE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-6 rounded-full border border-dashed border-white/20"
                />
                <div className="absolute -inset-10 rounded-full bg-blue-400/10 blur-3xl" />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-8 border-white/20 shadow-2xl"
                >
                  <img
                    src={pastorCouplePhoto}
                    alt="Rev. Obed Anderson Asiedu & Mrs. Princess Gloria Asiedu"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-white text-gray-900 rounded-2xl shadow-2xl px-6 py-4 text-center w-[280px]"
                >
                  <p className="font-extrabold text-blue-950">
                    Rev. Obed Asiedu & Mrs. Princess Gloria Asiedu
                  </p>
                  <p className="text-xs text-gray-500 mt-1"></p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[3px]"
        >
          SCROLL
        </motion.div>
      </section>

      {/* =====================================================
          WELCOME
      ====================================================== */}
      <section className="py-24 md:py-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-blue-700 font-bold uppercase tracking-[4px]"
          >
            Welcome Home
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-black text-gray-900 mt-4"
          >
            A Place To Belong
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-3xl mx-auto mt-7 text-gray-600 text-lg leading-8"
          >
            At Nsawam Central Assemblies of God — The Great Commission House, we
            believe church is more than a building. We are a family of believers
            growing together in faith, serving one another and sharing the love
            of Jesus Christ.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-blue-800 font-bold hover:gap-4 transition-all"
            >
              Learn More About Us
              <FaArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          PASTOR MESSAGE
      ====================================================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-blue-700 font-bold uppercase tracking-[4px]">
              From Our Pastor
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4">
              A Word From Our Pastor
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[2rem] shadow-2xl overflow-hidden grid md:grid-cols-2"
          >
            <div className="bg-blue-950 p-8 md:p-14 flex items-center justify-center">
              <motion.img
                whileHover={{ scale: 1.03 }}
                src={pastorPhoto}
                alt="Rev. Obed Anderson Asiedu"
                className="w-full max-w-md aspect-[4/5] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="p-8 md:p-14 lg:p-16 flex flex-col justify-center">
              <p className="text-blue-700 font-bold uppercase tracking-widest">
                Rev. Obed Anderson Asiedu
              </p>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mt-3">
                Lead Pastor & Regional Superintendent
              </h3>
              <div className="w-20 h-1 bg-blue-800 rounded-full my-7" />
              <p className="text-gray-600 leading-8">
                Welcome to Nsawam Central Assemblies of God, The Great
                Commission House.
              </p>
              <p className="text-gray-600 leading-8 mt-4">
                It is a great joy to welcome you to our church family. We are
                committed to knowing Christ, growing together in faith and
                fulfilling the Great Commission.
              </p>
              <p className="text-gray-600 leading-8 mt-4">
                My prayer is that everyone who comes through our church will
                experience the love of God, encounter His presence and discover
                the purpose He has for their life.
              </p>
              <p className="font-bold text-blue-900 mt-7">
                Rev. Obed Anderson Asiedu
              </p>
              <p className="text-gray-500 text-sm">
                Lead Pastor & Regional Superintendent
              </p>
              <Link
                to="/leadership"
                className="mt-7 inline-flex items-center gap-2 text-blue-800 font-bold hover:gap-4 transition-all"
              >
                Meet Our Leadership
                <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-blue-700 font-bold uppercase tracking-[4px]"
            >
              What Defines Us
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-black mt-4"
            >
              Faith. Love. Service.
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-7 mt-14">
            {[
              {
                icon: FaPrayingHands,
                title: "Prayer",
                text: "We believe in the power of prayer and seek God together in every season.",
              },
              {
                icon: FaHeart,
                title: "Love",
                text: "We demonstrate the love of Christ through compassion, fellowship and service.",
              },
              {
                icon: FaUsers,
                title: "Community",
                text: "We grow together as one church family, supporting and encouraging one another.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group p-9 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-900 transition-colors duration-300">
                    <Icon className="text-2xl text-blue-800 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mt-6">{item.title}</h3>
                  <p className="text-gray-600 leading-7 mt-4">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          MINISTRIES
      ====================================================== */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-blue-300 font-bold uppercase tracking-[4px]">
                Get Connected
              </p>
              <h2 className="text-3xl md:text-5xl font-black mt-4">
                Find Your Place
              </h2>
            </div>
            <Link
              to="/ministries"
              className="inline-flex items-center gap-2 font-bold text-blue-200 hover:text-white transition"
            >
              View All Ministries
              <FaArrowRight />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {[
              {
                icon: FaUsers,
                title: "Youth Ministry",
              },
              {
                icon: FaChild,
                title: "Children's Ministry",
              },
              {
                icon: FaMusic,
                title: "Music Ministry",
              },
              {
                icon: FaBible,
                title: "Bible Study",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-7 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 backdrop-blur-sm transition-colors"
                >
                  <Icon className="text-3xl text-blue-300" />
                  <h3 className="font-bold text-lg mt-5">{item.title}</h3>
                  <p className="text-blue-200 text-sm mt-2">
                    Grow, serve and connect with others.
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE TIMES + SINGLE IMAGE (UPDATED)
      ====================================================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Text & Service Cards */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-blue-700 font-bold uppercase tracking-[4px]">
                Join Us
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-4">
                Worship With Us
              </h2>

              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {[
                  {
                    icon: FaChurch,
                    title: "Sunday Service",
                    day: "Every Sunday",
                    time: "8:00 AM",
                  },
                  {
                    icon: FaPrayingHands,
                    title: "Command Your Week",
                    day: "Every Sunday",
                    time: "6:30 PM",
                  },
                ].map((service) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.title}
                      whileHover={{ y: -8 }}
                      className="bg-white p-7 rounded-3xl shadow-lg border border-gray-100"
                    >
                      <Icon className="text-4xl text-blue-800" />
                      <h3 className="text-xl font-bold mt-5">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-4 text-gray-600">
                        <FaCalendarAlt className="text-blue-700" />
                        {service.day}
                      </div>
                      <div className="flex items-center gap-3 mt-2 text-gray-600">
                        <FaClock className="text-blue-700" />
                        {service.time}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* RIGHT: Single Image with Beautiful Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md">
                {/* Animated Glow Effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-4 bg-blue-500/30 rounded-3xl blur-2xl"
                />

                {/* Image with Hover Effect */}
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    rotate: -1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white"
                >
                  <img
                    src={worshipImage}
                    alt="Worship at Nsawam Central Assemblies of God"
                    className="w-full h-auto aspect-[4/5] object-cover transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent flex items-end p-6">
                    <div>
                      <p className="text-white text-2xl font-bold">
                        Come & Worship
                      </p>
                      <p className="text-blue-200 text-sm">
                        The Great Commission House
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EVENTS CTA
      ====================================================== */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <FaCalendarAlt className="text-5xl text-blue-200 mx-auto" />
          <h2 className="text-3xl md:text-5xl font-black mt-7">
            Something Is Always Happening
          </h2>
          <p className="text-blue-100 text-lg mt-5">
            Stay connected with what's happening at The Great Commission House.
          </p>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 mt-8 bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            Explore Upcoming Events
            <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <FaChurch className="text-5xl text-blue-300 mx-auto" />
            <h2 className="text-3xl md:text-5xl font-black mt-7">
              There Is A Place For You Here
            </h2>
            <p className="text-blue-200 text-lg mt-5 leading-8">
              Come as you are. Worship with us. Grow with us. Serve with us.
              Let's follow Jesus together.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-9">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:shadow-2xl transition"
              >
                Plan Your Visit
              </Link>
              <Link
                to="/gallery"
                className="border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition"
              >
                View Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}