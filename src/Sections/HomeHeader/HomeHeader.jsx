import { FaPhone } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoStarSharp } from "react-icons/io5";

import "./HomeHeader.scss";
const HomeHeader = () => {
  return (
    <div className="HomeHeader">
      <div className="lg:px-6 py-40">
        <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* py-24 sm:py-0 */}
          <div className="pl-3 max-w-xl lg:py-16">
            {/* sm:py-48 lg:py-56 */}
            <div className="text">
              <h1
                className="text-2xl font-extrabold tracking-wide shadow-2 sm:text-3xl"
                style={{ color: "#fff", fontSize: "4rem" }} //#122231
              >
                Kano Pharmacy
              </h1>
              <p
                className="mt-10 text-xl font-semibold leading-6"
                style={{ color: "#fff" }} //#3d4f60 122231
              >
                We sell medicine in Kano, Nigeria and beyond
              </p>
            </div>
            <div className="flex gap-5 mt-10">
              <button className="bg-[#268457] p-3 pl-5 pr-5 text-white rounded-md text-md font-semibold flex  justify-around gap-3">
                <span className="py-1">
                  <FaPhone />
                </span>
                <span>+234 9090 9999 37</span>
              </button>
              <button className="bg-white p-3 pl-5 pr-5 text-md font-semibold text-black rounded-md">
                Where to find us?
              </button>
            </div>
            <div className="mt-5 flex">
              <span className="py-2 px-2">
                <FcGoogle />
              </span>
              <span className="px-2 py-1 text-white">
                Available to Google play{" "}
              </span>
              <div className="flex text-yellow-600 py-2">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </div>
            </div>
          </div>
          <div className="text-center flex justify-center items-center">
            {/* <Image className="phoneImg" src={Img} alt="Logo" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
