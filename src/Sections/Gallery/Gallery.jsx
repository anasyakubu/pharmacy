import Img from "../../assets/img-1.jpg";
import "./Gallery.scss";
const Gallery = () => {
  return (
    <div className="Gallery bg-white">
      <div className="p-10">
        <div className="lg:py-10 sm:py-10">
          <div className="text-center mt-10 title">
            <h1
              className="text-2xl font-extrabold tracking-wide shadow-2 sm:text-3xl"
              style={{ color: "#000", fontSize: "3rem" }} //#122231
            >
              Gallery
            </h1>
          </div>
        </div>
        <div className="p-25 mt-10">
          <div className="p-3 space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-2 lg:space-y-0">
            <img className="rounded-lg shadow-sm" src={Img} alt="Image" />
            <img className="rounded-lg shadow-sm" src={Img} alt="Image" />
            <img className="rounded-lg shadow-sm" src={Img} alt="Image" />
            <img className="rounded-lg shadow-sm" src={Img} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
