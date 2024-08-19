import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className="flex justify-between mt-5">
      <div>
        <img src={logo} />
      </div>
      <div>
        <button className="text-white w-[240px] h-[44px] rounded-xl bg-success flex justify-center items-center">
          Ariza qoldirish
        </button>
      </div>
      <div>
        <p className="text-[16px] font-normal text-white">Ma'lumot uchun:</p>
        <span className="text-[20px] font-bold text-white">
          +998 (55) 500-22-20
        </span>
      </div>
      <div>
        <p className="text-[16px] font-normal text-white">Manzil:</p>
        <span className="text-[20px] font-bold text-white">
          Mirobod tumani, <br />
          Seoul Plaza Biznes markazi
        </span>
      </div>
    </div>
  );
};
export default Footer;
