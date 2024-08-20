import React from "react";
import registration from "../assets/registration.png";
import PhoneInput from "react-phone-input-2";

const RegistrationForm = () => {
  return (
    <div className="flex max-xs:flex-col-reverse max-xs:h-full justify-between bg-[#1A1A1A] h-[420px] mt-[100px] border rounded-xl border-success ">
      {/* Rasm qismi */}
      <div className="max-xs:w-full max-xs:mb-[-50px] w-2/5 rounded-l-xl  flex items-center justify-center">
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
      <div className="max-xs:w-full w-[50%] rounded-r-xl  flex flex-col justify-center p-10 mr-[50px]">
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

          <PhoneInput
            country={"uz"}
            inputStyle={{
              backgroundColor: "#424242",
              color: "white",
              height: "50px",
              padding: "8px",
              borderRadius: "1.5rem",
              border: "none",
              width: "100%",
            }}
            buttonStyle={{
              backgroundColor: "#424242",
              color: "white",
              borderRadius: "1.5rem",
            }}
            placeholderStyle={{
              color: "#424242",
            }}
          />

          <div>
            <input
              type="text"
              placeholder="Biznes turini kiriting"
              className="focus:placeholder-opacity-100 text-white focus:placeholder-[#424242] mt-1 p-2 h-[50px] rounded-3xl w-full focus:outline-none bg-[#424242]"
            />
          </div>

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
