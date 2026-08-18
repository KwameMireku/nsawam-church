import { motion } from "framer-motion";
import { FaCamera, FaChurch, FaUsers, FaPray } from "react-icons/fa";

const stats = [
  {
    icon: <FaCamera />,
    number: "500+",
    title: "Photos",
  },
  {
    icon: <FaChurch />,
    number: "150+",
    title: "Church Events",
  },
  {
    icon: <FaUsers />,
    number: "1000+",
    title: "Members",
  },
  {
    icon: <FaPray />,
    number: "15+",
    title: "Years of Ministry",
  },
];

export default function GalleryStats() {
  return (
    <>
      {/* Statistics */}

      <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="uppercase tracking-[5px] text-blue-300 font-bold">
              Gallery Highlights
            </p>

            <h2 className="text-5xl font-black mt-4">
              Every Moment Matters
            </h2>

            <div className="w-24 h-1 bg-blue-300 mx-auto rounded-full mt-6"></div>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {stats.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 text-center"
              >

                <div className="text-5xl text-blue-300 flex justify-center mb-6">
                  {item.icon}
                </div>

                <h1 className="text-5xl font-black">
                  {item.number}
                </h1>

                <p className="mt-4 text-blue-100">
                  {item.title}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Scripture */}

      <section className="py-28 bg-white">

        <div className="max-w-5xl mx-auto text-center px-6">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-blue-900 leading-tight"
          >
            "Great are the works
            <br />
            of the Lord;
            <br />
            they are pondered
            <br />
            by all who delight
            <br />
            in them."
          </motion.h2>

          <p className="mt-10 uppercase tracking-[6px] text-blue-700 font-bold">
            Psalm 111:2
          </p>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-blue-950 text-white">

        <div className="max-w-5xl mx-auto text-center px-6">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-black"
          >
            Become Part of Our Story
          </motion.h2>

          <p className="mt-8 text-blue-100 text-xl leading-9 max-w-3xl mx-auto">
            Every worship service, outreach program,
            conference and fellowship tells the story of
            God's faithfulness at
            <strong> The Great Commission House.</strong>
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-white text-blue-900 px-10 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            Plan Your Visit
          </a>

        </div>

      </section>
    </>
  );
}