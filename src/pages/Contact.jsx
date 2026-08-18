import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
  FaPrayingHands,
  FaChurch,
  FaPaperPlane,
} from "react-icons/fa";

import contactImage from "../assets/images/gallery/gallery63.jpg";
import cardimage from "../assets/images/gallery/gallery1.jpg";


export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setError("");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/mdenkrgn",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(
          "We could not send your message. Please try again."
        );
      }
    } catch (err) {
      setError(
        "Unable to send your message. Please check your internet connection."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="bg-slate-950 text-white overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">

        <motion.img
          src={contactImage}
          alt="Nsawam Central Assemblies of God"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.16 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/70 to-transparent" />

        {/* Animated circles */}

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 top-20 w-96 h-96 rounded-full border border-blue-300/10"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 bottom-0 w-[500px] h-[500px] rounded-full border border-white/10"
        />

        {/* Hero Content */}

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-blue-300 animate-pulse" />

              <span className="text-sm font-bold tracking-wide">
                WE WOULD LOVE TO HEAR FROM YOU
              </span>
            </motion.div>

            <h1 className="mt-8 text-5xl sm:text-6xl md:text-8xl font-black leading-[0.95]">

              LET'S

              <span className="block text-blue-300 mt-2">
                CONNECT.
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl text-blue-100 leading-8">
              Whether you have a question, need prayer,
              want to visit us, or simply want to connect
              with our church family, we are here for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <a
                href="#contact-form"
                className="group inline-flex items-center justify-center gap-3 bg-white text-blue-950 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Send Us a Message

                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#visit"
                className="inline-flex items-center justify-center gap-3 border border-white/40 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-950 transition-all duration-300"
              >
                Find Our Church
              </a>

            </div>

          </motion.div>

        </div>

        {/* Scroll indicator */}

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-7 h-11 rounded-full border border-white/40 flex justify-center pt-2">
            <div className="w-1.5 h-2.5 rounded-full bg-white" />
          </div>
        </motion.div>

      </section>


      {/* =====================================================
          CONTACT INTRO
      ===================================================== */}

      <section className="relative py-24 bg-white text-slate-900">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >

            <p className="text-blue-700 uppercase tracking-[5px] font-bold text-sm">
              Get In Touch
            </p>

            <h2 className="text-4xl md:text-6xl font-black mt-5">
              We Are Here For You
            </h2>

            <div className="w-20 h-1 bg-blue-800 rounded-full mx-auto mt-6" />

            <p className="text-slate-600 text-lg leading-8 mt-7">
              The church is more than a building. It is a family.
              Reach out to us and let us know how we can serve,
              pray with you, or welcome you into our fellowship.
            </p>

          </motion.div>


          {/* Contact Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            {/* Location */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl p-8 bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all"
            >

              <div className="w-14 h-14 rounded-2xl bg-blue-900 text-white flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                <FaMapMarkerAlt />
              </div>

              <h3 className="text-xl font-black mt-6">
                Our Location
              </h3>

              <p className="text-slate-600 mt-3 leading-7">
                Nsawam, Eastern Region
                <br />
                Ghana
              </p>

            </motion.div>


            {/* Phone */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl p-8 bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all"
            >

              <div className="w-14 h-14 rounded-2xl bg-blue-900 text-white flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                <FaPhoneAlt />
              </div>

              <h3 className="text-xl font-black mt-6">
                Call Us
              </h3>

              <p className="text-slate-600 mt-3 leading-7">
               0556187231
                <br />
            
              </p>

            </motion.div>


            {/* Email */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl p-8 bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all"
            >

              <div className="w-14 h-14 rounded-2xl bg-blue-900 text-white flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                <FaEnvelope />
              </div>

              <h3 className="text-xl font-black mt-6">
                Email Us
              </h3>

              <p className="text-slate-600 mt-3 leading-7">
               nsawamcentral50@gmail.com
                <br />
            
              </p>

            </motion.div>


            {/* Worship */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl p-8 bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all"
            >

              <div className="w-14 h-14 rounded-2xl bg-blue-900 text-white flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                <FaClock />
              </div>

              <h3 className="text-xl font-black mt-6">
                Worship With Us
              </h3>

              <p className="text-slate-600 mt-3 leading-7">
                Join us for worship,
                <br />
                prayer and fellowship.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT FORM + IMAGE
      ===================================================== */}

      <section
        id="contact-form"
        className="relative py-28 bg-slate-100 text-slate-900"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Image */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative"
            >

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">

                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src={cardimage}
                  alt="Life at Nsawam Central Assemblies of God"
                  className="w-full h-[600px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white">

                  <p className="uppercase tracking-[4px] text-yellow-300 font-bold text-sm">
                    The Great Commission House
                  </p>

                  <h3 className="text-3xl md:text-4xl font-black mt-3">
                    Come As You Are.
                  </h3>

                  <p className="text-blue-100 mt-4 leading-7 max-w-md">
                    A place to worship, grow, serve and experience
                    the love of God together.
                  </p>

                </div>

              </div>


              {/* Floating Prayer Card */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -bottom-6 -right-4 md:-right-8 bg-white text-slate-900 rounded-2xl shadow-2xl p-5 border border-slate-200"
              >

                <div className="flex items-center gap-3">

                  <div className="w-11 h-11 rounded-xl bg-blue-900 text-white flex items-center justify-center">
                    <FaPrayingHands />
                  </div>

                  <div>
                    <p className="font-black">
                      Need Prayer?
                    </p>

                    <p className="text-sm text-slate-500">
                      We are here to stand with you.
                    </p>
                  </div>

                </div>

              </motion.div>

            </motion.div>


            {/* FORM */}

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="bg-white rounded-[2rem] shadow-xl p-7 md:p-10"
            >

              <p className="uppercase tracking-[4px] text-blue-700 font-bold text-sm">
                Send A Message
              </p>

              <h2 className="text-4xl md:text-5xl font-black mt-4">
                Let's Talk
              </h2>

              <p className="text-slate-600 mt-5 leading-7">
                Fill out the form below and our team will get back
                to you as soon as possible.
              </p>


              {/* SUCCESS MESSAGE */}

              {submitted ? (

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="mt-10 rounded-3xl bg-green-50 border border-green-200 p-8 text-center"
                >

                  <FaCheckCircle className="text-green-600 text-5xl mx-auto" />

                  <h3 className="text-2xl font-black text-green-900 mt-5">
                    Message Sent!
                  </h3>

                  <p className="text-green-800 mt-3">
                    Thank you for reaching out to Nsawam Central
                    Assemblies of God. We have received your message.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-green-700 font-bold underline"
                  >
                    Send another message
                  </button>

                </motion.div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >

                  {/* NAME + EMAIL */}

                  <div className="grid sm:grid-cols-2 gap-5">

                    <div>

                      <label
                        htmlFor="name"
                        className="block font-bold text-sm mb-2"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                      />

                    </div>


                    <div>

                      <label
                        htmlFor="email"
                        className="block font-bold text-sm mb-2"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                      />

                    </div>

                  </div>


                  {/* PHONE */}

                  <div>

                    <label
                      htmlFor="phone"
                      className="block font-bold text-sm mb-2"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+233 ..."
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                    />

                  </div>


                  {/* SUBJECT */}

                  <div>

                    <label
                      htmlFor="subject"
                      className="block font-bold text-sm mb-2"
                    >
                      How Can We Help?
                    </label>

                    <select
                      id="subject"
                      name="subject"
                      defaultValue="General Enquiry"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                    >

                      <option>
                        General Enquiry
                      </option>

                      <option>
                        Prayer Request
                      </option>

                      <option>
                        Pastoral Care
                      </option>

                      <option>
                        Visit the Church
                      </option>

                      <option>
                        Ministry Information
                      </option>

                      <option>
                        Other
                      </option>

                    </select>

                  </div>


                  {/* MESSAGE */}

                  <div>

                    <label
                      htmlFor="message"
                      className="block font-bold text-sm mb-2"
                    >
                      Your Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      placeholder="Write your message or prayer request..."
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none resize-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                    />

                  </div>


                  {/* ERROR */}

                  {error && (

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="rounded-2xl bg-red-50 border border-red-200 text-red-700 p-4 font-semibold"
                    >
                      {error}
                    </motion.div>

                  )}


                  {/* SUBMIT */}

                  <button
                    type="submit"
                    disabled={sending}
                    className="group w-full bg-blue-900 text-white rounded-2xl py-4 font-bold flex items-center justify-center gap-3 hover:bg-blue-800 hover:scale-[1.02] transition-all shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >

                    {sending ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />

                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message

                        <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}

                  </button>

                </form>

              )}

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISIT SECTION
      ===================================================== */}

      <section
        id="visit"
        className="relative py-28 bg-blue-950 overflow-hidden"
      >

        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full border border-white/10"
        />

        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-40 -bottom-40 w-[500px] h-[500px] rounded-full border border-blue-400/10"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Text */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <p className="uppercase tracking-[5px] text-blue-300 font-bold">
                Plan Your Visit
              </p>

              <h2 className="text-5xl md:text-7xl font-black mt-5 leading-tight">

                Your Seat

                <span className="block text-blue-300">
                  Is Waiting.
                </span>

              </h2>

              <p className="text-blue-100 text-lg leading-8 mt-7 max-w-xl">
                We would be honoured to welcome you to
                Nsawam Central Assemblies of God —
                The Great Commission House.
              </p>


              <div className="mt-10 space-y-5">

                <div className="flex gap-4 items-start">

                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                    <FaChurch />
                  </div>

                  <div>
                    <h3 className="font-black">
                      Come Worship With Us
                    </h3>

                    <p className="text-blue-200 mt-1">
                      Nsawam, Eastern Region, Ghana
                    </p>
                  </div>

                </div>


                <div className="flex gap-4 items-start">

                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                    <FaClock />
                  </div>

                  <div>
                    <h3 className="font-black">
                      Service Times
                    </h3>

                    <p className="text-blue-200 mt-1">
                      Sunday - 8:00 Am 
                    </p>
                  </div>

                </div>

              </div>

            </motion.div>


            {/* Find Us Card */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-8 md:p-10"
            >

              <div className="w-16 h-16 rounded-2xl bg-white text-blue-900 flex items-center justify-center text-2xl">
                <FaMapMarkerAlt />
              </div>

              <h3 className="text-3xl font-black mt-7">
                Find Us
              </h3>

              <p className="text-blue-100 leading-7 mt-4">
                We are located in Nsawam, Eastern Region of Ghana.
                Use your preferred map application to navigate
                directly to the church.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Nsawam+Central+Assemblies+of+God+Ghana"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-3 bg-white text-blue-950 px-7 py-4 rounded-full font-bold hover:scale-105 transition-all"
              >
                Open in Google Maps

                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="py-24 bg-white text-slate-900">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
          >

            <FaPrayingHands className="text-blue-900 text-4xl mx-auto" />

            <h2 className="text-4xl md:text-6xl font-black mt-6">
              Need Someone To Pray With You?
            </h2>

            <p className="text-slate-600 text-lg leading-8 max-w-2xl mx-auto mt-6">
              Whatever season you are in, you don't have to walk
              through it alone. Reach out to our church family.
            </p>

            <a
              href="#contact-form"
              className="inline-flex items-center gap-3 mt-9 bg-blue-900 text-white px-9 py-4 rounded-full font-bold hover:bg-blue-800 hover:scale-105 transition-all shadow-xl"
            >
              Send a Prayer Request

              <FaArrowRight />
            </a>

          </motion.div>

        </div>

      </section>

    </main>
  );
}