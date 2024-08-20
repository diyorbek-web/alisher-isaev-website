import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className="flex max-xs:flex-col justify-between mt-5">
      <div className="max-xs:w-full ">
        <img src={logo} className="max-xs:m-auto" />
      </div>
      <div className="max-xs:w-full ">
        <button className="text-white max-xs:m-auto max-xs:mt-[70px] w-[240px] h-[44px] rounded-xl bg-success flex justify-center items-center">
          Ariza qoldirish
        </button>
      </div>
      <div className="max-xs:w-full max-xs:mt-[30px]">
        <p className="text-[16px] max-xs:text-center font-normal text-white">
          Ma'lumot uchun:
        </p>
        <p className="max-xs:text-center text-[20px] font-bold text-white">
          +998 (55) 500-22-20
        </p>
      </div>
      <div className="max-xs:w-full max-xs:mt-[30px]">
        <p className="text-[16px] max-xs:text-center font-normal text-white">
          Manzil:
        </p>
        <p className="max-xs:text-center text-[20px] font-bold text-white">
          Mirobod tumani, <br />
          Seoul Plaza Biznes markazi
        </p>
      </div>
    </div>
  );
};
export default Footer;
