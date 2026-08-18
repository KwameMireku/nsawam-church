import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-xl font-bold">
            NSAWAM CENTRAL
          </h2>

          <p className="text-gray-400 mt-2">
            ASSEMBLIES OF GOD
          </p>

          <p className="text-gray-400 mt-5 leading-7">
            The Great Commission House — a church family
            committed to Christ, community and the Gospel.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg">
            Quick Links
          </h3>

          <div className="space-y-3 mt-5 text-gray-400">
            <p>About Us</p>
            <p>Leadership</p>
            <p>Ministries</p>
            <p>Events</p>
            <p>Contact</p>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg">
            Connect With Us
          </h3>

          <div className="flex gap-4 mt-5">

            <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center">
              <FaFacebookF />
            </div>

            <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center">
              <FaInstagram />
            </div>

            <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center">
              <FaYoutube />
            </div>

          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Nsawam Central Assemblies of God.
        All Rights Reserved.
      </div>

    </footer>
  );
}