import Banner from "../../assets/Banner-2.jpg";
import "./WideSection.scss";
import { FaCheckCircle } from "react-icons/fa";

const WideSection = () => {
  return (
    <>
      <div className="WideSection">
        <div className="bg-white text-black">
          <div className="p-10 lg:py-20">
            <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              {/* Image */}
              <div className="">
                <img
                  className="rounded-2xl"
                  src={Banner}
                  alt="Banner"
                  style={{ width: "550px" }}
                />
              </div>
              {/* Text */}
              <div className="py-5 p-5">
                <h1
                  className="text-3xl font-medium"
                  style={{ fontSize: "3rem", lineHeight: "115%" }}
                >
                  Wide Selection
                </h1>
                <p className="mt-5 text-sm font-light">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus nobis vero ab nihil. Possimus quos impedit eum, a
                  rerum saepe quasi sed molestias, dolor pariatur aut
                  consectetur soluta neque. Voluptatibus. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Hic quo, accusantium, nisi
                  et aperiam voluptas sed magni magnam nihil fuga expedita in!
                  Numquam nam repudiandae doloribus dolorem nostrum voluptatibus
                  animi!
                </p>
                <div className="mt-10">
                  <p className="mt-3 flex">
                    <span className="py-1 text-[#11bd6b]">
                      <FaCheckCircle />
                    </span>
                    <span className="ml-3 text-sm font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                  </p>
                  <p className="mt-3 flex">
                    <span className="py-1 text-[#11bd6b]">
                      <FaCheckCircle />
                    </span>
                    <span className="ml-3 text-sm font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                  </p>
                  <p className="mt-3 flex">
                    <span className="py-1 text-[#11bd6b]">
                      <FaCheckCircle />
                    </span>
                    <span className="ml-3 text-sm font-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      adipisicing elit.
                    </span>
                  </p>
                </div>
                <div className="mt-10">
                  <button className="bg-[#268457] p-3 pl-5 pr-5 text-white rounded-md text-md font-semibold">
                    Where to find us?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WideSection;
