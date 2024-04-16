import "./contact.scss";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="p-10 py-14">
        <div className="bg-[#e4e4e4] text-black p-10">
          <div className="p-3 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <div className="">
              <div className="">
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
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
