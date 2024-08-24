import parma from "../assets/parma.png";
import osuvchi from "../assets/osuvchi.png";
import xalta from "../assets/xalta.png";
const Body = () => {
  return (
    <div className="max-xs:mt-[-90px] w-full bg-black-90">
      <div>
        <p className="max-xs:text-[25px] max-xs:text-center text-6xl font-bold  text-white uppercase">
          <span className="text-success">Sales Doctor Academy</span> <br />
          Dasturi kimlar uchun
        </p>
      </div>
      <div className="max-xs:flex-col max-xs:space-y-6 flex justify-between ">
        <div className="relative max-xs:h-[400px] max-xs:w-[90%] max-xs:m-auto w-[30%] mt-16 h-[471px] rounded-lg bg-black-70">
          <div
            className="absolute max-xm:w-[120px] max-xm:h-[120px] max-xs:left-[80px] w-[160px] h-[160px] bg-[#4DAA8A] rounded-full top-[130px] left-[60px] opacity-50 backdrop-blur-md"
            style={{ boxShadow: "0 0 50px 50px #4DAA8A" }}
          ></div>
          <div className="relative ml-[110px] mt-[10px]">
            <img
              className="max-xs:w-[110px] max-xs:h-[110px] w-[150px] h-[160px]"
              src={parma}
            />
          </div>
          <div className="relative p-5">
            <span className="text-[20px] text-white font-semibold">
              Biznesni <br /> tizimlashtirmoqchi <br /> bo'lganlar uchun
            </span>
            <p className="text-[16px] text-white font-normal p-4">
              Xodimlar uzlariga berilgan <br /> vazifalarni bajarmayaptimi?{" "}
              <br />
              Jamoani boshqarishda muammo bormi?
            </p>
          </div>
        </div>
        <div className="relative max-xs:h-[450px] max-xs:w-[90%] max-xs:m-auto w-[30%] mt-16 h-[471px] rounded-lg bg-black-70">
          <div
            className="absolute max-xm:w-[120px] max-xm:h-[120px] max-xs:left-[80px] w-[160px] h-[160px] bg-[#4DAA8A] rounded-full top-[130px] left-[60px] opacity-50 backdrop-blur-md"
            style={{ boxShadow: "0 0 50px 50px #4DAA8A" }}
          ></div>
          <div className="relative ml-[110px] mt-[10px]">
            <img
              className="max-xs:w-[110px] max-xs:h-[110px] w-[150px] h-[160px]"
              src={osuvchi}
            />
          </div>
          <div className="relative p-5">
            <span className="text-[20px] text-white font-semibold">
              Biznesni <br /> kattalashtirmoqchi bo'lgan
              <br /> tadbirkorlar uchun
            </span>
            <p className="text-[16px] text-white font-normal p-4">
              Moliya bo'limidagi raqamlar <br /> xisoblay olmayapsizmi? <br />
              Biznesni kengaytirmoqchimisiz, <br /> lekin xodimlaringiz tayyor
              emasmi?
            </p>
          </div>
        </div>

        <div className="relative  max-xs:w-[90%] max-xs:m-auto w-[30%] mt-16 max-xs:h-[400px] h-[471px] rounded-lg bg-black-70">
          <div
            className="absolute max-xm:w-[120px] max-xm:h-[120px] max-xs:left-[80px] w-[160px] h-[160px] bg-[#4DAA8A] rounded-full top-[130px] left-[60px] opacity-50 backdrop-blur-md"
            style={{ boxShadow: "0 0 50px 50px #4DAA8A" }}
          ></div>
          <div className="relative ml-[130px] mt-[10px]">
            <img
              className="max-xs:w-[80px] max-xs:h-[120px] w-[120px] h-[160px]"
              src={xalta}
            />
          </div>
          <div className="relative p-5">
            <span className="text-[20px] text-white font-semibold">
              Sotuv va mijozlar <br /> bilan muammosi borlar <br /> uchun
            </span>
            <p className="text-[16px] text-white font-normal p-4">
              Sotuv boyicha rejalar <br /> bajarmayaptimi? <br />
              Nasiyangiz ko'payib ketdimi?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
