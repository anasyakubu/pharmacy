import "./Map.scss";
const Map = () => {
  return (
    <div className="Map bg-white">
      <div className="p-10">
        <div className="mt-10 text-center">
          <h1
            className="text-2xl font-extrabold shadow-2 sm:text-3xl"
            style={{ color: "#000", fontSize: "2rem" }}
          >
            How to get to us?
          </h1>
          <h5 className="mt-5 text-black font-semibold">
            Mon-Fri:00:00 - 19:00PM
          </h5>
          <h5 className="mt-3 text-black font-semibold">
            Zoo road, Kano Nigeria
          </h5>
          <h5 className="mt-3 text-black font-semibold">+234 9090 9999 37</h5>
          <div className="mt-10">
            <div className="flex justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.84170368465!2d7.367465763153411!3d9.02424682072699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1713259931254!5m2!1sen!2sng"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
