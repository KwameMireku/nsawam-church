import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaChurch,
  FaBible,
  FaChild,
  FaUsers,
  FaFemale,
  FaMale,
  FaMusic,
  FaHandsHelping,
  FaArrowRight,
  FaHeart,
  FaCross,
  FaStar,
  FaPrayingHands,
  FaPlay,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import churchLogo from "../assets/images/church-logo.png";
import TGCH33 from "../assets/images/gallery/TGCH33.jpg";
import image from "../assets/images/Gallery/image.png";
import w from "../assets/images/Gallery/w.jpg";
import m from "../assets/images/Gallery/m.jpg";
import wor1 from "../assets/images/Gallery/wor1.jpg";
import wor3 from "../assets/images/Gallery/wor3.jpg";
import heroBg from "../assets/images/Gallery/gallery8.jpg";

// ============================================================
// ANIMATION PRESETS
// ============================================================

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11 },
  },
};

const floating = {
  animate: {
    y: [0, -18, 0],
    rotate: [0, 4, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ============================================================
// MINISTRIES DATA
// ============================================================

const ministries = [
  {
    icon: FaUsers,
    title: "Youth Ministry",
    subtitle: "Raising A Generation",
    description:
      "A vibrant community helping young people grow in Christ, discover their identity and become leaders for God's Kingdom.",
    verse: "1 Timothy 4:12",
    image: TGCH33,
  },
  {
    icon: FaChild,
    title: "Children's Ministry",
    subtitle: "Building Young Disciples",
    description:
      "Creating a safe, joyful and Christ-centered environment where children learn God's Word and develop a strong foundation of faith.",
    verse: "Proverbs 22:6",
    image,
  },
  {
    icon: FaFemale,
    title: "Women's Ministry",
    subtitle: "Women Of Faith",
    description:
      "Empowering women to grow spiritually, build meaningful relationships and fulfill their God-given purpose.",
    verse: "Proverbs 31:25",
    image: w,
  },
  {
    icon: FaMale,
    title: "Men's Ministry",
    subtitle: "Men Of Purpose",
    description:
      "Equipping men to become strong spiritual leaders in their families, workplaces, communities and the church.",
    verse: "Joshua 1:9",
    image: m,
  },
  {
    icon: FaMusic,
    title: "Music & Choir",
    subtitle: "Worship Through Music",
    description:
      "Leading the congregation into God's presence through worship, music and heartfelt praise.",
    verse: "Psalm 95:1",
    image: wor1,
  },
];

// ============================================================
// PILLARS DATA
// ============================================================

const pillars = [
  {
    icon: FaHeart,
    title: "Connect",
    text: "Build meaningful relationships with God's people.",
  },
  {
    icon: FaBible,
    title: "Grow",
    text: "Develop your faith through God's Word and discipleship.",
  },
  {
    icon: FaHandsHelping,
    title: "Serve",
    text: "Use your gifts to make a difference for Christ.",
  },
];

export default function Ministries() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 120]);
  const heroScale = useTransform(scrollYProgress, [0, 0.35], [1, 1.08]);

  return (
    <main className="overflow-hidden bg-white text-gray-900">
      {/* =========================================================
          HERO — FULL IMAGE WITH ZOOM + STATS + SCROLL INDICATOR
      ========================================================= */}
      <section className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center overflow-hidden bg-blue-950 text-white">
        {/* Background image – full picture, no crop */}
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.img
            src={heroBg}
            alt="Church background"
            className="h-full w-full object-contain"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-blue-950/30" />

        {/* Glows */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.12, 0.3, 0.12],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-48 -top-48 h-[650px] w-[650px] rounded-full bg-blue-400/25 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.2, 0.08],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-56 -left-56 h-[650px] w-[650px] rounded-full bg-white/10 blur-3xl"
        />

        {/* Floating decorative rings */}
        <motion.div
          {...floating}
          className="absolute right-[8%] top-[18%] hidden h-40 w-40 rounded-full border border-white/10 lg:block"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -8, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[14%] top-[26%] hidden h-24 w-24 rounded-full border border-blue-300/20 lg:block"
        />

        <FaCross className="absolute right-[5%] top-[7%] text-[330px] text-white opacity-[0.025]" />

        {/* Tiny floating particles */}
        {[...Array(7)].map((_, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.15, 0.65, 0.15],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut",
            }}
            className="absolute h-2 w-2 rounded-full bg-blue-200"
            style={{
              left: `${12 + i * 11}%`,
              top: `${18 + (i % 4) * 17}%`,
            }}
          />
        ))}

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 md:px-8 lg:py-36">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              {/* Logo */}
              <motion.div variants={fadeUp}>
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex h-20 w-20 items-center justify-center rounded-[1.6rem] border border-white/30 bg-white p-3 shadow-2xl shadow-blue-950/40 md:h-24 md:w-24"
                >
                  <img
                    src={churchLogo}
                    alt="Nsawam Central Assemblies of God"
                    className="h-full w-full object-contain"
                  />
                </motion.div>
              </motion.div>

              {/* Label */}
              <motion.div
                variants={fadeUp}
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 backdrop-blur-xl"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-400/20">
                  <FaChurch className="text-blue-200" />
                </span>
                <span className="text-sm font-semibold tracking-wide">
                  The Great Commission House
                </span>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mt-8 font-bold uppercase tracking-[5px] text-blue-300"
              >
                Our Ministries
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mt-4 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.8rem]"
              >
                There Is A Place
                <motion.span
                  className="mt-3 block bg-gradient-to-r from-blue-200 via-white to-blue-300 bg-clip-text text-transparent"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  For Everyone.
                </motion.span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-2xl text-lg leading-8 text-blue-100/90 md:text-xl"
              >
                Discover the different ministries of Nsawam Central Assemblies of
                God and find a place where you can grow, serve, connect and make
                an impact.
              </motion.p>

              {/* Buttons */}
              <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
                <motion.a
                  href="#ministries"
                  whileHover={{ y: -5, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-blue-950 shadow-2xl shadow-blue-950/30"
                >
                  Explore Ministries
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </motion.a>

                <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 font-bold backdrop-blur-md transition hover:bg-white/20"
                  >
                    Get Connected
                  </Link>
                </motion.div>
              </motion.div>

              {/* 👇 STATS – added back */}
              <motion.div
                variants={fadeUp}
                className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-6"
              >
                <div>
                  <p className="text-2xl font-black">5+</p>
                  <p className="text-sm text-blue-200">Ministry Areas</p>
                </div>
                <div className="h-10 w-px bg-white/15" />
                <div>
                  <p className="text-2xl font-black">1</p>
                  <p className="text-sm text-blue-200">United Family</p>
                </div>
                <div className="h-10 w-px bg-white/15" />
                <div>
                  <p className="text-2xl font-black">∞</p>
                  <p className="text-sm text-blue-200">Ways To Serve</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero side card – with wor3 */}
            <motion.div
              initial={{ opacity: 0, x: 80, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.45, ease: "easeOut" }}
              className="hidden lg:block relative"
            >
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-[3rem] overflow-hidden border border-white/20 shadow-2xl bg-white/10 backdrop-blur-md p-3"
              >
                <div className="relative h-[470px] rounded-[2.4rem] overflow-hidden">
                  <img
                    src={wor3}
                    alt="Church ministry"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/10 to-transparent" />

                  <div className="absolute bottom-7 left-7 right-7">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 backdrop-blur-md">
                        <FaPrayingHands className="text-xl text-blue-200" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-blue-200">
                          One Church
                        </p>
                        <p className="text-2xl font-black">Many Gifts. One Mission.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full border border-blue-300/30"
              />
            </motion.div>
          </div>
        </div>

        {/* 👇 SCROLL INDICATOR – added back */}
        <motion.a
          href="#intro"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="absolute bottom-20 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-white/60 md:flex"
        >
          <span>Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-white/70 to-transparent" />
        </motion.a>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white [clip-path:polygon(0_100%,100%_100%,100%_55%,80%_75%,60%_45%,40%_75%,20%_48%,0_70%)]" />
      </section>

      {/* =========================================================
          INTRO — PILLARS
      ========================================================= */}
      <section id="intro" className="relative py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="font-bold uppercase tracking-[4px] text-blue-700">
              Find Your Place
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-950 md:text-5xl">
              Grow. Connect. Serve.
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto mt-6 h-1.5 rounded-full bg-blue-900"
            />
            <p className="mx-auto mt-7 text-lg leading-8 text-gray-600">
              Church is more than attending a service. It is about belonging to
              a family, growing in your relationship with Christ and using your
              gifts to serve others.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-14 grid gap-6 md:grid-cols-3"
          >
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-gray-50 p-8 text-center transition-all duration-300 hover:bg-white hover:shadow-2xl"
                >
                  <span className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-150" />
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut" }}
                    className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-900 transition-all duration-300 group-hover:rotate-6 group-hover:bg-blue-900 group-hover:text-white"
                  >
                    <Icon className="text-2xl" />
                  </motion.div>
                  <h3 className="relative mt-6 text-2xl font-black">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 leading-7 text-gray-600">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          MINISTRIES — PREMIUM 5‑COLUMN GRID
      ========================================================= */}
      <section id="ministries" className="relative bg-gray-50 py-24 md:py-28">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-blue-900" />
              <p className="font-bold uppercase tracking-[4px] text-blue-700">
                Ministry Areas
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-gray-950 md:text-5xl">
              Discover Your Ministry
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Whatever your age, background or stage of life, there is a place
              for you to connect and serve.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          >
            {ministries.map((ministry, index) => {
              const Icon = ministry.icon;
              return (
                <motion.article
                  key={ministry.title}
                  variants={fadeUp}
                  whileHover={{ y: -12, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 240, damping: 20 }}
                  className="group relative flex min-h-[520px] flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
                >
                  {/* Image */}
                  <div className="relative h-64 flex-shrink-0 overflow-hidden">
                    <img
                      src={ministry.image}
                      alt={ministry.title}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/10 to-transparent" />

                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.08 }}
                      className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white text-blue-900 shadow-xl"
                    >
                      <Icon className="text-2xl" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
                      {ministry.subtitle}
                    </p>

                    <h3 className="mt-1 text-2xl font-black text-gray-950">
                      {ministry.title}
                    </h3>

                    <p className="mt-3 flex-grow text-sm leading-7 text-gray-600">
                      {ministry.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                      <div className="flex items-center gap-2">
                        <FaBible className="text-blue-800" />
                        <span className="text-sm font-bold text-gray-500">
                          {ministry.verse}
                        </span>
                      </div>

                      <motion.span
                        initial={{ opacity: 0, x: 8 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-900"
                      >
                        <FaArrowRight className="text-xs" />
                      </motion.span>
                    </div>
                  </div>

                  {/* Animated bottom accent */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-0 left-0 right-0 origin-left h-1.5 bg-blue-900"
                  />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SERVE — OVERLAPPING IMAGES (wor3 + wor1)
      ========================================================= */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-800">
                <FaHandsHelping />
                Serve With Us
              </div>

              <h2 className="mt-6 text-4xl font-black leading-tight text-gray-950 md:text-5xl">
                Your Gift Can
                <span className="block text-blue-800">Make A Difference.</span>
              </h2>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mt-7 h-1.5 rounded-full bg-blue-900"
              />

              <p className="mt-7 text-lg leading-8 text-gray-600">
                God has given every believer gifts, talents and abilities that
                can be used to strengthen His church and bless others.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Whether you love music, teaching, children, evangelism, prayer,
                technology or serving behind the scenes, there is a place for
                you.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-900 px-7 py-4 font-bold text-white shadow-xl shadow-blue-900/20 transition hover:-translate-y-1 hover:bg-blue-800"
              >
                I Want To Serve
                <FaArrowRight />
              </Link>
            </motion.div>

            {/* Image composition */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="relative min-h-[500px]"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-0 top-0 h-[330px] w-[72%] overflow-hidden rounded-[2.5rem] shadow-2xl"
              >
                <img
                  src={wor3}
                  alt="Church ministry"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -1.5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 h-[330px] w-[58%] overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl"
              >
                <img
                  src={wor1}
                  alt="Church worship"
                  className="h-full w-full object-cover object-top"
                />
              </motion.div>

              {/* Floating message card */}
              <motion.div
                {...floating}
                className="absolute bottom-[25%] right-[5%] z-10 rounded-2xl border border-white/50 bg-white/95 px-5 py-4 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-900 text-white">
                    <FaHandsHelping />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                      Your Place
                    </p>
                    <p className="font-black text-gray-950">Serve. Impact. Inspire.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TOGETHER CARD
      ========================================================= */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 p-10 text-white shadow-2xl md:p-16"
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, 8, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/10"
            />

            <FaCross className="absolute -bottom-28 right-0 text-[300px] opacity-[0.035]" />

            <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1fr_auto]">
              <div>
                <FaHandsHelping className="text-5xl text-blue-300" />
                <h3 className="mt-7 text-3xl font-black md:text-5xl">
                  We Are Better
                  <span className="block text-blue-300">Together.</span>
                </h3>
                <p className="mt-6 max-w-2xl leading-8 text-blue-100">
                  The church becomes stronger when every believer discovers
                  their place and faithfully serves with what God has given
                  them.
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <div className="h-1 w-10 rounded-full bg-blue-300" />
                  <span className="font-bold text-blue-200">1 Peter 4:10</span>
                </div>
              </div>

              <motion.div
                whileHover={{ rotate: 8, scale: 1.05 }}
                className="hidden h-32 w-32 items-center justify-center rounded-[2rem] border border-white/15 bg-white/10 backdrop-blur-md md:flex"
              >
                <FaChurch className="text-5xl text-blue-200" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SCRIPTURE
      ========================================================= */}
      <section className="relative overflow-hidden bg-blue-950 py-28 text-white md:py-36">
        <motion.div
          animate={{ scale: [1, 1.12, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-48 -top-48 h-[450px] w-[450px] rounded-full border border-white/10"
        />

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-64 -right-64 h-[550px] w-[550px] rounded-full border border-white/10"
        />

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/10 border-dashed"
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <FaBible className="mx-auto text-5xl text-blue-300" />
            </motion.div>

            <p className="mt-8 font-serif text-2xl italic leading-relaxed md:text-4xl">
              “As each of you has received a gift, use it to serve one another.”
            </p>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto my-7 h-1 w-16 rounded-full bg-blue-300"
            />

            <p className="font-bold tracking-[4px] text-blue-200">1 PETER 4:10</p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative py-24 md:py-32">
        <motion.div
          animate={{ x: [-100, 100, -100], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl"
        />
        <motion.div
          animate={{ x: [100, -80, 100], y: [0, -25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-blue-50 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl px-6 text-center"
        >
          <motion.div
            animate={{ y: [0, -7, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50"
          >
            <FaStar className="text-3xl text-blue-800" />
          </motion.div>

          <p className="mt-7 font-bold uppercase tracking-[4px] text-blue-700">
            The Great Commission House
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-gray-950 md:text-5xl">
            Find Your Place.
            <span className="block text-blue-800">Make An Impact.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            We would love to help you find a ministry where you can connect with
            others, grow in Christ and serve God's purpose.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ y: -5, scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-blue-900 px-8 py-4 font-bold text-white shadow-xl shadow-blue-900/20 transition hover:-translate-y-1 hover:bg-blue-800"
              >
                Get Connected
                <FaArrowRight />
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -5, scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/events"
                className="inline-flex items-center gap-3 rounded-full border border-gray-200 px-8 py-4 font-bold text-gray-800 transition hover:-translate-y-1 hover:border-blue-800 hover:text-blue-800"
              >
                See Our Events
                <FaPlay className="text-xs" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}