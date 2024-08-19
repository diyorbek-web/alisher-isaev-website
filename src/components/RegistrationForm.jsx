import React from "react";
import registration from "../assets/registration.png";

const RegistrationForm = () => {
  return (
    <div className="flex justify-between bg-[#1A1A1A] h-[420px] mt-[100px] border rounded-xl border-success ">
      {/* Rasm qismi */}
      <div className="w-2/5 rounded-l-xl  flex items-center justify-center">
        <div className="absolute">
          <div className="relative top-[-35px] bg-success w-[250px] h-[250px]  rounded-full"></div>
        </div>
        <img
          src={registration}
          alt="Rasm"
          className="z-10 mb-[50px] w-[322px] h-[468px] object-cover"
        />
      </div>

      {/* Form qismi */}
      <div className="w-[50%] rounded-r-xl  flex flex-col justify-center p-10 mr-[50px]">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">
          Siz bilan bog'lanishimiz uchun formani to'ldiring
        </h2>
        <form className="space-y-3 ">
          {/* Ism kiritish input */}
          <div>
            <input
              type="text"
              placeholder="Ismingizni kiriting"
              className="focus:placeholder-opacity-100 text-white focus:placeholder-[#424242] mt-1 h-[50px] p-2 focus:outline-none w-full bg-[#424242]  rounded-3xl"
            />
          </div>

          {/* Telefon raqam kiritish input */}
          <div>
            <div className="flex mt-1">
              <span className="inline-flex items-center text-[20px] text-white px-3  bg-[#424242] rounded-l-3xl border-gray-300">
                +998
              </span>
              <input
                id="phone-input"
                type="text"
                placeholder="XX XXX XX XX"
                className="focus:placeholder-opacity-100 text-white focus:placeholder-[#424242] p-2 h-[50px] w-full focus:outline-none bg-[#424242] rounded-r-3xl"
                maxlength="9"
                pattern="\d{9}"
                inputMode="numeric"
              />
            </div>
          </div>

          {/* Biznes turi kiritish input */}
          <div>
            <input
              type="text"
              placeholder="Biznes turini kiriting"
              className="focus:placeholder-opacity-100 text-white focus:placeholder-[#424242] mt-1 p-2 h-[50px] rounded-3xl w-full focus:outline-none bg-[#424242]"
            />
          </div>

          {/* Kursga yozilish tugmasi */}
          <div>
            <button
              type=""
              className="w-full bg-success h-[70px] text-white py-2 px-4 rounded-[30px]"
            >
              Kursga Yozilish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
