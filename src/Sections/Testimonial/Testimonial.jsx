import TestimonialCard from "../../components/shared/TestimonialCard";
import "./Testimonial.scss";

const Testimonial = () => {
  return (
    <div className="Testimonial bg-[#e4e4e4]">
      <div className="p-10 py-20">
        <div className="lg:py-10 sm:py-10">
          <div className="text-center mt-10 title">
            <h1
              className="text-2xl font-extrabold tracking-wide shadow-2 sm:text-3xl"
              style={{ color: "#000", fontSize: "3rem" }} //#122231
            >
              The Patient Comes First
            </h1>
          </div>
          <div className="mt-10">
            <div className="p-3 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
