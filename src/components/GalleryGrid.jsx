import { useState } from "react";
import { motion } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FaExpandAlt } from "react-icons/fa";

// Import your images
import img1 from "../assets/images/gallery/gallery1.jpg";
import img2 from "../assets/images/gallery/gallery2.jpg";
import img3 from "../assets/images/gallery/gallery3.jpg";
import img4 from "../assets/images/gallery/gallery4.jpg";
import img5 from "../assets/images/gallery/gallery5.jpg";
import img6 from "../assets/images/gallery/gallery6.jpg";
import img7 from "../assets/images/gallery/gallery7.jpg";
import img8 from "../assets/images/gallery/gallery8.jpg";
import img9 from "../assets/images/gallery/gallery9.jpg";
import img10 from "../assets/images/gallery/gallery10.jpg";
import img11 from "../assets/images/gallery/gallery11.jpg";
import img12 from "../assets/images/gallery/gallery12.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

export default function GalleryGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section
        id="gallery"
        className="bg-white py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-blue-700 font-bold">
              Church Gallery
            </p>

            <h2 className="text-5xl font-black text-gray-900 mt-4">
              Moments Worth Remembering
            </h2>

            <div className="w-20 h-1 bg-blue-900 mx-auto rounded-full mt-6"></div>

            <p className="text-gray-600 max-w-3xl mx-auto mt-7 text-lg leading-8">
              Every image captures worship,
              fellowship, love and the amazing
              things God is doing through
              Nsawam Central Assemblies of God.
            </p>

          </div>

          <ResponsiveMasonry
            columnsCountBreakPoints={{
              350: 1,
              750: 2,
              1000: 3,
            }}
          >
            <Masonry gutter="20px">

              {images.map((image, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="relative overflow-hidden rounded-3xl cursor-pointer group shadow-xl"
                  onClick={() => setSelected(image)}
                >

                  <img
                    src={image}
                    alt=""
                    className="w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500">

                    <div className="absolute bottom-6 left-6 right-6">

                      <h3 className="text-white font-bold text-xl">
                        Church Moment
                      </h3>

                      <p className="text-blue-200 text-sm mt-2">
                        The Great Commission House
                      </p>

                      <div className="mt-5 flex items-center gap-3 text-white">

                        <FaExpandAlt />

                        <span className="font-semibold">
                          View Photo
                        </span>

                      </div>

                    </div>

                  </div>

                </motion.div>

              ))}

            </Masonry>
          </ResponsiveMasonry>

        </div>
      </section>

      {/* Lightbox */}

      {selected && (

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >

          <motion.img
            initial={{
              scale: 0.8,
            }}
            animate={{
              scale: 1,
            }}
            src={selected}
            alt=""
            className="max-h-[90vh] rounded-3xl shadow-2xl"
          />

        </motion.div>

      )}
    </>
  );
}