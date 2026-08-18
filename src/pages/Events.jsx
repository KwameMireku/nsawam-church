import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaArrowRight,
  FaChurch,
  FaPrayingHands,
  FaBible,
  FaUsers,
  FaMusic,
  FaHeart,
  FaStar,
  FaCross,
} from "react-icons/fa";

import { Link } from "react-router-dom";

// 👇 IMPORT YOUR EVENT IMAGE
import heroImage from "../assets/images/gallery/ev.jpg";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
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
// DRAMATIC IMAGE REVEAL
// ——————————————————————————————————————————————
const dramaticReveal = {
  hidden: {
    opacity: 0,
    scale: 0.2,
    rotate: -12,
    borderRadius: "60px",
  },
  visible: {
    opacity: 1,
    scale: [0.2, 1.2, 0.95, 1.02, 1],
    rotate: [-12, 8, -4, 2, 0],
    borderRadius: "32px",
    transition: {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      scale: {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
        times: [0, 0.35, 0.55, 0.75, 1],
      },
      rotate: {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
        times: [0, 0.3, 0.5, 0.7, 1],
      },
    },
  },
};

// ============================================================
// EVENTS DATA
// ============================================================

const events = [
  {
    date: "15",
    month: "AUG",
    day: "Friday",
    title: "Night of Prayer",
    category: "Prayer",
    description:
      "An evening dedicated to prayer, worship and seeking the presence of God together as a church family.",
    time: "7:00 PM",
    location: "Main Auditorium",
    icon: FaPrayingHands,
  },

  {
    date: "23",
    month: "AUG",
    day: "Saturday",
    title: "Youth Encounter",
    category: "Youth",
    description:
      "A powerful gathering for young people focused on faith, purpose, leadership and growing deeper in Christ.",
    time: "10:00 AM",
    location: "Church Auditorium",
    icon: FaUsers,
  },

  {
    date: "30",
    month: "AUG",
    day: "Saturday",
    title: "Worship & Praise Night",
    category: "Worship",
    description:
      "Come and lift your voice in an unforgettable night of praise, worship and thanksgiving.",
    time: "6:00 PM",
    location: "Main Auditorium",
    icon: FaMusic,
  },


];

export default function Events() {
  return (
    <main className="overflow-hidden bg-white">

      {/* =========================================================
          HERO (clean blue header)
      ========================================================= */}
      <section className="relative min-h-[55vh] bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white flex items-center overflow-hidden">
        {/* Background glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.2, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 -top-48 w-[650px] h-[650px] rounded-full bg-blue-300 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-56 -bottom-56 w-[650px] h-[650px] rounded-full border border-white/10"
        />

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
              <FaCalendarAlt className="text-blue-300" />
              <span className="text-sm font-bold">
                The Great Commission House
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[5px] text-blue-300 font-bold mt-9"
            >
              Church Events
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-black leading-[1] mt-4"
            >
              Something Great
              <span className="block text-blue-300 mt-2">Is Happening</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-blue-100 max-w-2xl leading-8 mt-8"
            >
              Stay connected with everything happening at Nsawam Central
              Assemblies of God. Join us for worship, fellowship, prayer,
              teaching and outreach.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-9">
              <a
                href="#upcoming-events"
                className="inline-flex items-center gap-3 bg-white text-blue-900 px-7 py-4 rounded-full font-bold hover:-translate-y-1 hover:shadow-2xl transition-all"
              >
                View Upcoming Events
                <FaArrowRight />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white/10 border border-white/30 backdrop-blur-sm px-7 py-4 rounded-full font-bold hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom shape */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white [clip-path:polygon(0_100%,100%_100%,100%_35%,75%_70%,50%_30%,25%_70%,0_35%)]" />
      </section>

      {/* =========================================================
          FEATURED IMAGE SECTION — TALLER & MORE VISIBLE
          Image height increased so you can see it well!
      ========================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
            {/* LEFT: Text */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-blue-700 font-bold uppercase tracking-[4px]">
                Featured
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 leading-tight">
                A Church
                <span className="block text-blue-800">That Gathers</span>
              </h2>
              <div className="w-20 h-1 bg-blue-800 rounded-full mt-6" />
              <p className="text-gray-600 text-lg leading-8 mt-7">
                Every event at The Great Commission House is an opportunity
                to encounter God, connect with others, and grow in faith.
              </p>
              <p className="text-gray-600 leading-8 mt-4">
                From powerful worship services to life‑changing conferences,
                there's always something happening — and you're invited.
              </p>
              <div className="flex items-center gap-3 mt-8">
                <FaStar className="text-blue-800" />
                <span className="font-bold text-gray-800">
                  Come and be part of it.
                </span>
              </div>
            </motion.div>

            {/* RIGHT: Dramatic image with full visibility — NOW TALLER */}
            <motion.div
              variants={dramaticReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="relative"
            >
              {/* Pulsing glow ring behind image */}
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

              {/* Larger glow orb */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-blue-400/20 blur-3xl -z-10"
              />

              {/* Image container — HEIGHT INCREASED */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/20 border-4 border-white/80">
                <img
                  src={heroImage}
                  alt="Nsawam Central Assemblies of God events"
                  className="w-full h-[400px] md:h-[650px] object-cover"
                />

                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 via-transparent to-transparent" />

                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-white/40 rounded-tl-2xl" />
                <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-white/40 rounded-tr-2xl" />
                <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-white/40 rounded-bl-2xl" />
                <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-white/40 rounded-br-2xl" />

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md text-blue-900 text-xs md:text-sm font-extrabold tracking-wider px-5 py-2.5 rounded-full shadow-lg border border-white/50 whitespace-nowrap"
                >
                  <span className="flex items-center gap-2">
                    <FaCross className="text-blue-700" />
                    The Great Commission House
                    <FaCross className="text-blue-700" />
                  </span>
                </motion.div>
              </div>

              {/* Floating particle glows */}
              <motion.div
                animate={{
                  y: [0, -16, 0],
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
                  y: [0, 14, 0],
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
          INTRO
      ========================================================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-center"
          >
            <p className="text-blue-700 uppercase tracking-[4px] font-bold">
              What's Happening
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
              Connect With Us
            </h2>
            <div className="w-20 h-1 bg-blue-900 rounded-full mx-auto mt-6" />
            <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-8 mt-7">
              There is always something happening at The Great Commission
              House. Come worship, learn, fellowship and grow with us.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14"
          >
            {[
              { icon: FaPrayingHands, title: "Prayer" },
              { icon: FaBible, title: "Word" },
              { icon: FaMusic, title: "Worship" },
              { icon: FaUsers, title: "Fellowship" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  key={item.title}
                  className="flex items-center justify-center gap-3 bg-white border border-gray-100 rounded-2xl p-5 hover:bg-blue-50 hover:border-blue-100 transition-all shadow-sm"
                >
                  <Icon className="text-blue-800" />
                  <span className="font-bold text-gray-800">{item.title}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FEATURED EVENT
      ========================================================= */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-900 to-blue-950 text-white"
          >
            <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl" />
            <FaStar className="absolute right-14 top-12 text-7xl opacity-10" />

            <div className="relative grid lg:grid-cols-[1fr_1.5fr] items-center">
              <div className="p-10 md:p-14 lg:p-16">
                <p className="uppercase tracking-[4px] text-blue-300 font-bold">
                  Featured Event
                </p>
                <div className="mt-8">
                  <span className="block text-8xl md:text-9xl font-black leading-none">
                    24
                  </span>
                  <span className="text-2xl font-black tracking-[5px] text-blue-300">
                    SUNDAY
                  </span>
                </div>
              </div>

              <div className="p-10 md:p-14 lg:p-16 lg:border-l border-white/10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-bold">
                  <FaPrayingHands />
                  Prayer
                </div>
                <h3 className="text-4xl md:text-5xl font-black mt-6">
                  Night of Prayer
                </h3>
                <p className="text-blue-100 text-lg leading-8 mt-5 max-w-2xl">
                  An evening dedicated to prayer, worship and seeking the
                  presence of God together as one church family.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                      <FaClock />
                    </div>
                    <div>
                      <p className="text-xs text-blue-300 uppercase font-bold">
                        Time
                      </p>
                      <p className="font-bold">7:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <p className="text-xs text-blue-300 uppercase font-bold">
                        Location
                      </p>
                      <p className="font-bold">Main Auditorium</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          UPCOMING EVENTS
      ========================================================= */}
      <section id="upcoming-events" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[4px] text-blue-700 font-bold">
              Mark Your Calendar
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
              Upcoming Events
            </h2>
            <p className="text-gray-600 text-lg mt-5 max-w-2xl">
              Plan ahead and join us at our upcoming church gatherings and
              special programs.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14"
          >
            {events.map((event) => {
              const Icon = event.icon;
              return (
                <motion.article
                  variants={fadeUp}
                  whileHover={{ y: -10 }}
                  key={event.title}
                  className="group bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl overflow-hidden transition-all duration-300"
                >
                  <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white p-7">
                    <div className="flex justify-between items-start">
                      <div className="bg-white rounded-2xl text-blue-900 w-20 h-24 flex flex-col items-center justify-center shadow-lg">
                        <span className="text-3xl font-black leading-none">
                          {event.date}
                        </span>
                        <span className="text-xs font-black tracking-widest mt-1">
                          {event.month}
                        </span>
                      </div>

                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                        <Icon className="text-xl text-blue-200" />
                      </div>
                    </div>

                    <div className="mt-7">
                      <span className="text-xs uppercase tracking-widest font-bold text-blue-300">
                        {event.day}
                      </span>
                      <h3 className="text-2xl font-black mt-2">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-7">
                    <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-blue-50 text-blue-800">
                      {event.category}
                    </span>
                    <p className="text-gray-600 text-sm leading-7 mt-5">
                      {event.description}
                    </p>

                    <div className="space-y-3 mt-6 pt-5 border-t border-gray-100">
                      <div className="flex items-center gap-3 text-sm">
                        <FaClock className="text-blue-800" />
                        <span className="text-gray-600">{event.time}</span>
                      </div>

                      <div className="flex items-center gap-3 text-sm">
                        <FaMapMarkerAlt className="text-blue-800" />
                        <span className="text-gray-600">{event.location}</span>
                      </div>
                    </div>

                    <button className="mt-7 flex items-center gap-2 text-blue-900 font-bold group-hover:gap-4 transition-all">
                      Event Details
                      <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CHURCH GATHERING MESSAGE
      ========================================================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 text-blue-800 font-bold text-sm">
                <FaChurch />
                You Are Welcome
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-6 leading-tight">
                Come As You Are.
                <span className="block text-blue-800">Worship With Us.</span>
              </h2>

              <div className="w-20 h-1 bg-blue-900 rounded-full mt-7" />

              <p className="text-gray-600 text-lg leading-8 mt-7">
                Our events are more than dates on a calendar. They are
                opportunities to encounter God, build relationships and grow
                together as a church family.
              </p>

              <p className="text-gray-600 leading-8 mt-5">
                Whether it is a Sunday service, prayer meeting, youth gathering
                or special conference, there is always room for you.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-blue-900 text-white px-7 py-4 rounded-full font-bold mt-8 hover:bg-blue-800 hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                Visit Our Church
                <FaArrowRight />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-900 rounded-[3rem] rotate-3" />
              <div className="relative bg-gradient-to-br from-blue-800 to-blue-950 rounded-[3rem] p-10 md:p-14 text-white overflow-hidden">
                <FaCalendarAlt className="absolute -right-10 -bottom-10 text-[260px] opacity-[0.04]" />
                <div className="relative">
                  <FaHeart className="text-5xl text-blue-300" />
                  <h3 className="text-3xl md:text-4xl font-black mt-8">
                    Every Gathering
                    <span className="block text-blue-300">Matters</span>
                  </h3>
                  <p className="text-blue-100 leading-8 mt-6">
                    When we gather together, we encourage one another, strengthen
                    our faith and celebrate what God is doing in our lives.
                  </p>
                  <div className="flex items-center gap-3 mt-8">
                    <div className="w-10 h-1 bg-blue-300 rounded-full" />
                    <span className="text-blue-200 font-bold">
                      Hebrews 10:25
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SCRIPTURE CTA
      ========================================================= */}
      <section className="relative py-28 bg-blue-950 text-white overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute w-[500px] h-[500px] rounded-full border border-white/20 -left-60 -top-60"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 11, repeat: Infinity }}
          className="absolute w-[600px] h-[600px] rounded-full border border-white/10 -right-72 -bottom-72"
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaBible className="text-5xl text-blue-300 mx-auto" />
            <p className="text-2xl md:text-4xl font-serif italic leading-relaxed mt-8">
              “Let us consider how we may spur one another on toward love and
              good deeds.”
            </p>
            <div className="w-16 h-1 bg-blue-300 rounded-full mx-auto my-7" />
            <p className="font-bold tracking-widest text-blue-200">
              HEBREWS 10:24
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
            <FaCalendarAlt className="text-3xl text-blue-800" />
          </div>

          <p className="text-blue-700 font-bold uppercase tracking-[4px] mt-7">
            Stay Connected
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
            Don't Miss What
            <span className="block text-blue-800">God Is Doing</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-8 mt-5">
            Keep checking this page for upcoming programs, special services and
            church activities.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-9">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-blue-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              Contact The Church
              <FaArrowRight />
            </Link>

            <Link
              to="/ministries"
              className="inline-flex items-center gap-3 border border-gray-200 px-8 py-4 rounded-full font-bold text-gray-800 hover:border-blue-800 hover:text-blue-800 transition-all"
            >
              Explore Ministries
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}