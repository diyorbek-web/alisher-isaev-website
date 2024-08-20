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
      <div className="max-xs:flex-col flex justify-between ">
        <div className="max-xs:w-[90%] max-xs:m-auto w-[30%] mt-16 h-[471px] rounded-lg bg-black-70">
          <div className="ml-[110px] mt-[10px]">
            <img className="w-[150px]  h-[160px]" src={parma} />
          </div>
          <div className="p-5">
            <span className="text-[20px] text-white font-semibold ">
              Biznesni <br /> tizimlashtirmoqchi <br /> bo'lganlar uchun
            </span>
            <p className="text-[16px] text-white font-normal p-4">
              Xodimlar uzlariga berilgan <br /> vazifalarni bajarmayaptimi?{" "}
              <br />
              Jamoani boshqarishda muammo bormi?
            </p>
          </div>
        </div>
        <div className="max-xs:mt-7 max-xs:w-[90%] max-xs:m-auto w-[30%] mt-16 h-[471px] rounded-lg bg-black-70">
          <div className="ml-[110px] mt-[10px]">
            <img className="w-[150px]  h-[160px]" src={osuvchi} />
          </div>
          <div className="p-5">
            <span className="text-[20px] text-white font-semibold ">
              Biznesni <br /> kattalashtirmoqchi bo'lgan
              <br /> tadbirkorlar uchun
            </span>
            <p className="text-[16px] text-white font-normal pt-4">
              Moliya bo'limidagi raqamlar <br /> xisoblay olmayapsizmi? <br />
              Biznesni kengaytirmoqchimisiz, <br /> lekin xodimlaringiz tayyor
              emasmi?
            </p>
          </div>
        </div>
        <div className="max-xs:mt-7 max-xs:w-[90%] max-xs:m-auto w-[30%] mt-16 h-[471px] rounded-lg bg-black-70">
          <div className="ml-[140px] mt-[10px]">
            <img className="w-[120px]  h-[160px]" src={xalta} />
          </div>
          <div className="p-5">
            <span className="text-[20px] text-white font-semibold ">
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
