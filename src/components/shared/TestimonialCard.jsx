import { IoStarSharp } from "react-icons/io5";
import User from "../../assets/user-1.jpg";
import Google from "../../assets/google.png";

const TestimonialCard = () => {
  return (
    <div className="TestimonialCard">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <div className="">
          <div className="">
            <div className="flex text-yellow-600 py-2">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
          </div>
          <div className="mt-5">
            <p className="text-whit text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, animi nihil. Fuga culpa nisi consectetur non earum
              rerum voluptates. Natus minima atque fugit, repellendus nesciunt
              fugiat nisi modi numquam quod quasi error qui, non magni hic saepe
              recusandae eaque repellat, excepturi sapiente doloribus.
            </p>
          </div>
          <div className="mt-5">
            <div className="flex justify-between">
              <div className="flex justify-around gap-3">
                <img className="h-10 w-10 rounded-full" src={User} alt="User" />
                <small className="py-2 text-black font-semibold">
                  Anas Yakubu
                </small>
              </div>
              <div className="">
                <img
                  className="h-10 w-10 rounded-full"
                  src={Google}
                  alt="User"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
