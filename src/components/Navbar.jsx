import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import churchLogo from "../assets/images/church-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Leadership", path: "/leadership" },
    { name: "Ministries", path: "/ministries" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">

          <div className="h-20 flex items-center justify-between">

            {/* ================= LOGO ================= */}

            <Link
              to="/"
              className="flex items-center gap-3 group"
            >
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                }}
                transition={{ duration: 0.25 }}
                className="w-12 h-12 flex items-center justify-center"
              >
                <img
                  src={churchLogo}
                  alt="Nsawam Central Assemblies of God"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <div className="hidden sm:flex flex-col leading-tight">

                <span className="text-sm md:text-base font-extrabold text-blue-950">
                  NSAWAM CENTRAL
                </span>

                <span className="text-[10px] md:text-xs tracking-[2px] text-gray-500">
                  ASSEMBLIES OF GOD
                </span>

                <span className="text-[9px] tracking-[1.5px] text-blue-700 font-semibold mt-0.5">
                  THE GREAT COMMISSION HOUSE
                </span>

              </div>
            </Link>

            {/* ================= DESKTOP MENU ================= */}

            <div className="hidden lg:flex items-center gap-1">

              {links.map((link) => {
                const active = location.pathname === link.path;

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="relative px-4 py-2 group"
                  >

                    <span
                      className={`text-sm font-semibold transition-colors duration-300 ${
                        active
                          ? "text-blue-800"
                          : "text-gray-600 group-hover:text-blue-800"
                      }`}
                    >
                      {link.name}
                    </span>

                    {/* Animated underline */}

                    <motion.span
                      initial={false}
                      animate={{
                        width: active ? "70%" : "0%",
                        opacity: active ? 1 : 0,
                      }}
                      whileHover={{
                        width: "70%",
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-blue-800 rounded-full"
                    />

                  </Link>
                );
              })}

              {/* Visit Us */}

              <Link
                to="/contact"
                className="ml-3"
              >
                <motion.div
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="px-5 py-2.5 rounded-full bg-blue-900 text-white text-sm font-semibold shadow-md hover:bg-blue-800 hover:shadow-xl transition-all flex items-center gap-2"
                >
                  Visit Us
                  <FaArrowRight className="text-xs" />
                </motion.div>
              </Link>

            </div>

            {/* ================= MOBILE BUTTON ================= */}

            <motion.button
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={() => setOpen(!open)}
              className="lg:hidden w-11 h-11 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              <AnimatePresence mode="wait">

                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <FaTimes size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <FaBars size={20} />
                  </motion.div>
                )}

              </AnimatePresence>
            </motion.button>

          </div>

          {/* ================= MOBILE MENU ================= */}

          <AnimatePresence>

            {open && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="lg:hidden overflow-hidden"
              >

                <div className="border-t border-gray-100 py-4">

                  {links.map((link, index) => {
                    const active =
                      location.pathname === link.path;

                    return (
                      <motion.div
                        key={link.name}
                        initial={{
                          opacity: 0,
                          x: -20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.05,
                        }}
                      >

                        <Link
                          to={link.path}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition ${
                            active
                              ? "bg-blue-50 text-blue-800"
                              : "text-gray-700 hover:bg-gray-50 hover:text-blue-800"
                          }`}
                        >
                          {link.name}

                          {active && (
                            <motion.span
                              layoutId="mobileActive"
                              className="w-2 h-2 rounded-full bg-blue-800"
                            />
                          )}

                        </Link>

                      </motion.div>
                    );
                  })}

                  <Link
                    to="/contact"
                    className="block mt-3"
                  >
                    <motion.div
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-blue-900 text-white font-semibold"
                    >
                      Visit Our Church
                      <FaArrowRight className="text-xs" />
                    </motion.div>
                  </Link>

                </div>

              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </motion.nav>
    </>
  );
}