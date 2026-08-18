import { motion } from "framer-motion";
import {
  FaChurch,
  FaCross,
  FaBible,
  FaPrayingHands,
  FaHeart,
  FaUsers,
  FaHandsHelping,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaGlobeAfrica,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import pastorPhoto from "../assets/images/pastor.jpg";
import churchLogo from "../assets/images/church-logo.png";
// ============================================================
// ANIMATIONS
// ============================================================

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
    x: -60,
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
    x: 60,
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

export default function Leadership() {
  return (
    <main className="overflow-hidden bg-white">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[68vh] bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white flex items-center pt-20">

        {/* Background glow */}

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-[550px] h-[550px] rounded-full bg-blue-400/20 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl"
        />

        {/* Decorative cross */}

        <FaCross className="absolute text-[300px] text-white opacity-[0.025] right-[5%] top-[15%]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-24 w-full">

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >

            {/* Logo */}

            <motion.div
              variants={fadeUp}
              className="mb-8"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white p-3 shadow-2xl flex items-center justify-center">

                <img
                  src={churchLogo}
                  alt="Nsawam Central Assemblies of God logo"
                  className="w-full h-full object-contain"
                />

              </div>
            </motion.div>

            {/* Label */}

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
            >
              <FaChurch className="text-blue-300" />

              <span className="text-sm font-semibold">
                The Great Commission House
              </span>
            </motion.div>

            {/* Small heading */}

            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[5px] text-blue-300 font-bold mt-8"
            >
              Church Leadership
            </motion.p>

            {/* Main heading */}

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-black leading-[1] mt-4"
            >
              Leadership That
              <span className="block text-blue-300 mt-2">
                Serves With Purpose
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-blue-100 max-w-2xl leading-8 mt-8"
            >
              Meet the leadership of Nsawam Central Assemblies of God,
              committed to serving Christ, building people and advancing
              the mission of the church.
            </motion.p>

          </motion.div>

        </div>

        {/* Bottom wave */}

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white [clip-path:polygon(0_100%,100%_100%,100%_40%,75%_70%,50%_30%,25%_70%,0_40%)]" />

      </section>


      {/* =========================================================
          PASTOR PROFILE
      ========================================================= */}

      <section className="py-24 md:py-32">

        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 xl:gap-24 items-center">

            {/* =====================================================
                PASTOR PHOTO
            ===================================================== */}

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="relative"
            >

              {/* Decorative background */}

              <div className="absolute -inset-5 bg-blue-100 rounded-[3rem] rotate-3" />

              <div className="absolute -inset-5 bg-blue-900/10 rounded-[3rem] -rotate-3" />

              {/* Actual photo */}

              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="relative rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-2xl border-8 border-white"
              >

                <img
                  src={pastorPhoto}
                  alt="Rev. Obed Anderson Asiedu"
                  className="w-full h-auto object-contain block"
                />

              </motion.div>

              {/* Pastor title card */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.4,
                }}
                className="relative md:absolute md:-bottom-8 md:-right-8 bg-white rounded-3xl shadow-2xl p-6 md:w-[320px] border border-gray-100 mt-5 md:mt-0"
              >

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center shrink-0">
                    <FaChurch />
                  </div>

                  <div>

                    <p className="font-black text-blue-950">
                      Rev. Obed Anderson Asiedu
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      Lead Pastor
                    </p>

                  </div>

                </div>

              </motion.div>

            </motion.div>


            {/* =====================================================
                PROFILE INFORMATION
            ===================================================== */}

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >

              <p className="text-blue-700 font-bold uppercase tracking-[4px]">
                Our Lead Pastor
              </p>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 leading-tight">
                Rev. Obed Anderson
                <span className="block text-blue-800">
                  Asiedu
                </span>
              </h2>

              {/* Titles */}

              <div className="flex flex-wrap gap-3 mt-6">

                <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-800 text-sm font-bold">
                  Lead Pastor
                </span>

                <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-bold">
                  Regional Superintendent
                </span>

              </div>

              <div className="w-20 h-1 bg-blue-900 rounded-full mt-7" />

              <p className="text-gray-600 text-lg leading-8 mt-8">
                Rev. Obed Anderson Asiedu provides spiritual leadership
                and pastoral direction to the church, with a strong
                commitment to the Word of God, prayer, discipleship
                and the advancement of the Gospel.
              </p>

              <p className="text-gray-600 leading-8 mt-5">
                His desire is to see individuals and families encounter
                Christ, discover their God-given purpose and become
                effective servants in the Kingdom of God.
              </p>

              {/* CTA */}

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 mt-8 bg-blue-900 text-white px-7 py-4 rounded-full font-bold hover:bg-blue-800 hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                Connect With Our Pastor
                <FaArrowRight />
              </Link>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PASTOR'S MESSAGE
      ========================================================= */}

      <section className="relative py-28 bg-gray-50">

        <div className="max-w-5xl mx-auto px-6 md:px-8">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative bg-white rounded-[2.5rem] shadow-xl p-8 md:p-14 border border-gray-100"
          >

            {/* Quote */}

            <div className="absolute -top-7 left-8 md:left-14 w-14 h-14 rounded-2xl bg-blue-900 text-white flex items-center justify-center shadow-xl">
              <FaQuoteLeft className="text-xl" />
            </div>

            <div className="pt-7">

              <p className="text-blue-700 font-bold uppercase tracking-[4px]">
                A Message From Our Pastor
              </p>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-4">
                Welcome To The Great Commission House
              </h2>

              <div className="w-16 h-1 bg-blue-900 rounded-full mt-6" />

              <p className="text-gray-700 text-lg leading-9 mt-8">
                Dear friend,
              </p>

              <p className="text-gray-600 text-lg leading-9 mt-4">
                It is my joy to welcome you to Nsawam Central Assemblies
                of God, The Great Commission House. We are a family of
                believers who are passionate about Jesus Christ and
                committed to seeing lives transformed by the power of
                God's Word.
              </p>

              <p className="text-gray-600 text-lg leading-9 mt-5">
                Whether you are visiting us for the first time, searching
                for a church family or looking for a place to grow in your
                relationship with God, we believe there is a place for you
                here.
              </p>

              <p className="text-gray-600 text-lg leading-9 mt-5">
                Our prayer is that every person who comes through our doors
                will encounter the presence of God, experience His love
                and leave encouraged to live for Christ.
              </p>

              <p className="text-gray-800 font-bold text-lg mt-8">
                God bless you,
              </p>

              <p className="text-blue-900 font-black text-xl mt-2">
                Rev. Obed Anderson Asiedu
              </p>

              <p className="text-gray-500 mt-1">
                Lead Pastor
              </p>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          LEADERSHIP PHILOSOPHY
      ========================================================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
            >

              <p className="text-blue-700 font-bold uppercase tracking-[4px]">
                Our Leadership
              </p>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 leading-tight">
                Leading By
                <span className="block text-blue-800">
                  Serving Others
                </span>
              </h2>

              <div className="w-20 h-1 bg-blue-900 rounded-full mt-7" />

              <p className="text-gray-600 text-lg leading-8 mt-8">
                Biblical leadership is not about position alone.
                It is about responsibility, humility, service and
                helping people become everything God has called
                them to be.
              </p>

              <p className="text-gray-600 leading-8 mt-5">
                At The Great Commission House, we seek to develop
                leaders who lead with integrity, compassion, courage
                and a deep dependence on God.
              </p>

            </motion.div>


            {/* RIGHT */}

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="grid sm:grid-cols-2 gap-5"
            >

              {[
                {
                  icon: FaPrayingHands,
                  title: "Prayer",
                  text: "We seek God's direction before making decisions.",
                },
                {
                  icon: FaBible,
                  title: "The Word",
                  text: "Scripture remains the foundation of our leadership.",
                },
                {
                  icon: FaHeart,
                  title: "Compassion",
                  text: "We lead people with grace, care and understanding.",
                },
                {
                  icon: FaHandsHelping,
                  title: "Service",
                  text: "We believe leadership exists to serve others.",
                },
              ].map((item) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    whileHover={{
                      y: -8,
                    }}
                    className="bg-white rounded-3xl p-7 border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow"
                  >

                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center">
                      <Icon className="text-2xl" />
                    </div>

                    <h3 className="text-xl font-black mt-6">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-7 mt-3">
                      {item.text}
                    </p>

                  </motion.div>
                );

              })}

            </motion.div>

          </div>

        </div>

      </section>


      {/* =========================================================
          LEADERSHIP IMPACT
      ========================================================= */}

      <section className="py-24 bg-blue-950 text-white">

        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="text-center max-w-3xl mx-auto"
          >

            <p className="text-blue-300 uppercase tracking-[4px] font-bold">
              Our Commitment
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Leadership With Impact
            </h2>

            <p className="text-blue-100 leading-8 mt-6">
              Our leadership is committed to building a healthy church
              where people encounter Christ, grow in faith and serve
              God's purpose.
            </p>

          </motion.div>


          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14"
          >

            {[
              {
                icon: FaUsers,
                number: "People",
                title: "Building People",
              },
              {
                icon: FaBible,
                number: "Word",
                title: "Teaching Truth",
              },
              {
                icon: FaPrayingHands,
                number: "Prayer",
                title: "Seeking God",
              },
              {
                icon: FaGlobeAfrica,
                number: "Mission",
                title: "Reaching Nations",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  className="bg-white/10 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-sm"
                >

                  <Icon className="text-4xl text-blue-300 mx-auto" />

                  <p className="text-blue-300 font-bold uppercase tracking-widest text-sm mt-6">
                    {item.number}
                  </p>

                  <h3 className="text-xl font-black mt-2">
                    {item.title}
                  </h3>

                </motion.div>
              );

            })}

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          SCRIPTURE
      ========================================================= */}

      <section className="relative py-28 bg-gradient-to-br from-blue-900 to-blue-950 text-white overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute w-[400px] h-[400px] rounded-full border border-white/10 -left-48 -top-48"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute w-[500px] h-[500px] rounded-full border border-white/10 -right-64 -bottom-64"
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <FaCross className="text-5xl text-blue-300 mx-auto" />

            <p className="text-2xl md:text-4xl font-serif italic leading-relaxed mt-8">
              “Whoever wants to become great among you must be your servant.”
            </p>

            <div className="w-16 h-1 bg-blue-300 rounded-full mx-auto my-7" />

            <p className="font-bold tracking-widest text-blue-200">
              MATTHEW 20:26
            </p>

          </motion.div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="py-24">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="max-w-5xl mx-auto px-6 text-center"
        >

          <div className="w-20 h-20 rounded-3xl bg-blue-50 flex items-center justify-center mx-auto">

            <FaStar className="text-3xl text-blue-800" />

          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-7">
            We'd Love To Hear From You
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-8 mt-5">
            Have a question, need prayer or want to connect with
            the church? Our team would be happy to hear from you.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-9">

            <Link
              to="/contact"
              className="bg-blue-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              Contact The Church
            </Link>

            <Link
              to="/ministries"
              className="border border-gray-200 px-8 py-4 rounded-full font-bold text-gray-800 hover:border-blue-800 hover:text-blue-800 transition-all"
            >
              Explore Ministries
            </Link>

          </div>

        </motion.div>

      </section>

    </main>
  );
}