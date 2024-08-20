import React, { useState } from "react";
import youtuberasm from "../assets/youtubeuchun1.webp";
import youtuberasmtwo from "../assets/youtubeuchun2.webp";
import youtubethree from "../assets/youtubeuchun3.webp";
import mfactor from "../assets/mfactor.webp";
import ReactPlayer from "react-player";

const YoutubeComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative ">
      <div>
        <p className="max-xs:text-[30px] leading-snug text-[40px] text-white">
          Buning isbotini Tadbirkorlarning <br />
          <span className="text-success">Fikrlaridan bilib oling</span>
        </p>
      </div>
      <div className="flex flex-wrap justify-between w-full mx-auto p-4">
        <div
          className="max-xs:w-full  w-[48%] cursor-pointer"
          onClick={openModal}
        >
          <img
            src={youtuberasm}
            alt="Sample"
            className="w-full cursor-pointer rounded-xl filter group-hover:blur-sm transition ease-in-out duration-300"
          />
          <div className="mt-[30px] ">
            <div className="flex">
              <div className="">
                <p className="mb-[10px] max-xs:text-[20px] text-[25px] font-bold text-white ">
                  Xusan Mamasaidov
                </p>
                <span className="text-[15px] text-white">Decos, Mfaktor</span>
              </div>
              <img
                className="ml-auto w-[60px] h-[60px] rounded-full"
                src={mfactor}
              />
            </div>
            <div className="border rounded-xl mt-[20px] h-[100px] items-center border-success flex">
              <div className="font-bold ml-[20px]">
                <p className="text-white">Soxa</p>
                <p className="text-white">Shaxar</p>
              </div>
              <div className="w-[2px] h-[50px] ml-[50px] bg-success"></div>
              <div className="ml-[50px]">
                <p className="text-white ">Kantselyariya</p>
                <p className="text-white">Toshkent</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="max-xs:w-full max-xs:mt-5 w-[48%] cursor-pointer"
          onClick={openModal}
        >
          <img
            src={youtuberasmtwo}
            alt="Sample"
            className="w-full cursor-pointer rounded-xl filter group-hover:blur-sm transition ease-in-out duration-300"
          />
          <div className="mt-[30px] ">
            <div className="flex">
              <div className="">
                <p className="mb-[10px] max-xs:text-[20px] text-[25px] font-bold text-white ">
                  Xayrulla Shokirov
                </p>
                <span className="text-[15px] text-white">AZN Fortuna</span>
              </div>
              <img
                className="ml-auto w-[60px] h-[60px] rounded-full"
                src={mfactor}
              />
            </div>
            <div className="border rounded-xl mt-[20px] h-[100px] items-center border-success flex">
              <div className="font-bold ml-[20px]">
                <p className="text-white">Soxa</p>
                <p className="text-white">Shaxar</p>
              </div>
              <div className="w-[2px] h-[50px] ml-[50px] bg-success"></div>
              <div className="ml-[50px]">
                <p className="text-white ">Distributsiya</p>
                <p className="text-white">Toshkent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="max-xs:w-full max-xs:mt-1 w-[48%] m-auto cursor-pointer"
        onClick={openModal}
      >
        <img
          src={youtubethree}
          alt="Sample"
          className="w-full cursor-pointer rounded-xl filter group-hover:blur-sm transition ease-in-out duration-300"
        />
        <div className="mt-[30px] ">
          <div className="flex">
            <div className="">
              <p className="mb-[10px] max-xs:text-[20px] text-[25px] font-bold text-white ">
                Doniyor Usmonov
              </p>
              <span className="text-[15px] text-white">Safopharm</span>
            </div>
            <img
              className="ml-auto w-[60px] h-[60px] rounded-full"
              src={mfactor}
            />
          </div>
          <div className="border rounded-xl mt-[20px] h-[100px] items-center border-success flex">
            <div className="font-bold ml-[20px]">
              <p className="text-white">Soxa</p>
              <p className="text-white">Shaxar</p>
            </div>
            <div className="w-[2px] h-[50px] ml-[50px] bg-success"></div>
            <div className="ml-[50px]">
              <p className="text-white ">Kantselyariya</p>
              <p className="text-white">Toshkent</p>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl">
            <button
              className=" top-0 right-0 mt-4 mr-4 text-white text-4xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="relative pb-[56.25%] h-0">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ynq9TSxnIuA&t=1s"
                playing={isModalOpen}
                controls={true}
                className="absolute top-0 left-0 w-[700px] h-[900px]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YoutubeComponent;
