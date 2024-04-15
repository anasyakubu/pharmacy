import { FaHourglassStart } from "react-icons/fa";

const AboutCard = () => {
  return (
    <div className="AboutCard">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <div className="">
          <div className="flex gap-5">
            <div className="p-5 my-5 bg-[#268457] text-white rounded-full">
              <FaHourglassStart />
            </div>
            <h1 className="py-3 text-black font-bold text-xl">
              Large Selection of documentations
            </h1>
          </div>
          <div className="mt-5">
            <p className="text-whit text-sm text-black">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, animi nihil. Fuga culpa nisi consectetur non earum
              rerum voluptates. Natus minima atque fugit, repellendus nesciunt
              fugiat nisi modi numquam quod quasi error qui, non magni hic saepe
              recusandae eaque repellat, excepturi sapiente doloribus. Obcaecati
              repellat nisi dolor reprehenderit ut est. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Laboriosam saepe ut quae
              doloribus at rerum voluptatem ipsum possimus. Quas, suscipit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
