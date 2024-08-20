import { useState } from "react";
import YouTube from "react-youtube";
import conference from "../assets/conference.png";
import youtuberasm from "../assets/rasmyou1.png";
import youtuberasmtwo from "../assets/rasmyou2.png";
import youtuberasmthree from "../assets/rasmyou3.png";
import { FaPlay } from "react-icons/fa";
const Conference = () => {
  const videoOptions = {
    height: "500px",
    width: "900px",
    playerVars: {
      autoplay: 0, // Videolar avtomatik ravishda boshlanishi
    },
  };
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      <div>
        <p className="max-xs:text-[24px] text-center text-4xl text-white">
          <span className="text-success">+1000 TA </span>
          TADBIRKORLAR{" "}
          <span className="text-success">
            SALES <br /> DOCTOR
          </span>{" "}
          KURSINI BITIRISHGAN
        </p>
      </div>
      <div className="mt-[30px] justify-center">
        <div className="relative">
          <img
            src={conference}
            alt="Video Thumbnail"
            className="w-[900px] m-auto rounded-lg shadow-lg  transition-transform duration-300 "
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <FaPlay
              color="#4DAA8A"
              className="cursor-pointer w-[140px] h-[140px] max-xs:w-[70px] max-xs:h-[70px]"
              onClick={openModal}
            />
          </div>
        </div>
        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
            <div className="relative w-full max-w-3xl p-4">
              <button
                className="absolute top-0 right-0 text-white text-3xl leading-none font-bold"
                onClick={closeModal}
              >
                &times;
              </button>
              <YouTube videoId="cBNxy_LuHfw" opts={videoOptions} />
            </div>
          </div>
        )}
      </div>
      <div className="max-xs:ml-0 max-xs:w-full ml-[30px] mt-[20px] w-[94%] flex-wrap flex justify-between">
        <img className="max-xs:w-[100%] w-[32.5%]" src={youtuberasm} />
        <img
          className="max-xs:w-[48%] max-xs:mt-4 w-[32.5%]"
          src={youtuberasmtwo}
        />
        <img
          className="max-xs:w-[48%] max-xs:mt-4 w-[32.5%]"
          src={youtuberasmthree}
        />
      </div>
      <div className="flex justify-center mt-10">
        <button className="py-7 px-10 bg-success rounded-full uppercase text-white flex gap-2 tracking-wider">
          <span>Joyni band qilish</span>
        </button>
      </div>
    </div>
  );
};
export default Conference;
