import AboutCard from "../../components/shared/AboutCard";
import "./About.scss";

const About = () => {
  return (
    <div className="About bg-[#e4e4e4]">
      <div className="p-10 py-20">
        <div className="lg:py-10 sm:py-10">
          <div className="text-center title">
            <h1
              className="text-2xl font-extrabold tracking-wide shadow-2 sm:text-3xl"
              style={{ color: "#000", fontSize: "4rem" }} //#122231
            >
              Kano Pharmacy
            </h1>
          </div>
          <div className="mt-24">
            <div className="p-3 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <AboutCard />
              <AboutCard />
              <AboutCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
