import "./contact.scss";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="p-10 py-14">
        <div className="bg-[#e4e4e4] text-black p-10">
          <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            <div className="">
              <div className="lg:py-24 py-5">
                <h1 className="text-black text-2xl font-semibold">
                  Write to Us
                </h1>
                <p className="mt-3 text-black">Anas Yakubu</p>
                <p className="mt-3 text-black">Zoo road Kano, Nigeria</p>
                <p className="mt-3 text-black">+234 9090 9999 37</p>
                <div className="flex gap-3 mt-5">
                  <FaInstagram />
                  <FaWhatsapp />
                  <FaLinkedin />
                </div>
              </div>
            </div>
            <div className="">
              <div className="p-8 bg-white text-black rounded-lg shadow-lg">
                <div className="">
                  <label className="text-lg">Your Email :</label>
                  <input
                    className="w-full h-full outline-none border border-black mt-3 p-3 rounded-lg"
                    type="text"
                  />
                </div>
                <div className="mt-5">
                  <label className="text-lg">Your Email :</label>
                  <textarea
                    className="w-full h-full outline-none border border-black mt-3 p-3 rounded-lg"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="mt-5">
                  <button className="w-full h-full bg-[#268457] text-white p-3 text-lg rounded-lg">
                    Submit Form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
