/* eslint-disable jsx-a11y/alt-text */
import isaev from "../assets/isaev.png";
import nbu from "../assets/nbu.png";
import pg from "../assets/pg.png";
import tps from "../assets/tps.png";
import dena from "../assets/dena.png";
import balton from "../assets/balton.png";
import sap from "../assets/sap.png";
const Tittles = () => {
  const items = [
    {
      id: 4,
      img: dena,
      name: "<<Marwin Brands>>",
      describtion:
        'Korxonasida tijorat direktori lavozimida "DENA" soklarini ikkinchi orindan birinchi oringa olib chiqqan.',
    },
    {
      id: 2,
      img: pg,
      name: "<<Procter& Gamble>>",
      describtion:
        'Savdo menejeri lavozimida "IV kvartal 2002 yili orta osiyo va kavkazda" eng baland savdo kursatgichi uchun sertifikat soxibi',
    },
    {
      id: 3,
      img: tps,
      name: "<<Internet provayder TPS>>",
      describtion:
        "Tijorat direktori lavozimida savdoni 400% ga oshirib dumaloq internet-kartalar joriy etgan",
    },
    {
      id: 1,
      img: nbu,
      name: "<<Uzbekiston milliy bank>>",
      describtion: "Korxonalarni moliyaviy taxlil qilish metodikasini avtori",
    },
    {
      id: 5,
      img: balton,
      name: '<<DP "Balton Trading (Asia)>>"',
      describtion:
        "(Nestle, Colgate-palmolive, Heinz, Shedroe-leto, Makfa, Impra, Oleina kabi brendlarning distribyutori) korxonasi raxbari lavozimida ishlagan",
    },
    {
      id: 6,
      img: sap,
      name: "<<Sap Uzbekistan>>",
      describtion:
        "2017-yili avgust oyidan bugungacha SAP Uzbekistan korxonasida savdo menejeri lavozimida ishlaydi.",
    },
  ];
  return (
    <div className="max-xs:space-y-5 space-y-12">
      <div className="max-xs:flex-col flex">
        <div className="max-xs:text-4xl text-6xl text-white">
          ALISHER ISAEV <p className="text-success">KIM</p>
        </div>
        <div className="max-xs:ml-0 max-xs:w-full max-xs:mt-[30px] w-1/2 ml-[60px] flex">
          <img
            className="max-xs:ml-0 max-xs:w-[100px] max-xs:h-[100px] ml-[80px] w-[126px] h-[126px]"
            src={isaev}
          />
          <div className="ml-[20px] ">
            <p className="text-[25px] text-white font-bold">Tadbirkor</p>
            <p className="text-[20px] max-xs:hidden font-thin text-white">
              SalesDoctor, Milliard Club <br className="max-xs:hidden" /> va
              RoboKidz brendlarining asoschisi
            </p>
            <span className="block mb-2 text-white">
              SalesDoctor, Milliard Club
            </span>
            <span className="block mb-2 text-white">
              va RoboKidz brendlarining
            </span>
            <span className="block text-white">asoschisi</span>
          </div>
        </div>
      </div>
      <div className="grid max-xs:gap-1 max-xs:grid-cols-1 gap-2 grid-cols-2 ">
        {items.map((item) => {
          return (
            <div className="w-[94%] max-xs:m-auto  border bg-[#E4FFF9] mt-5 rounded-xl">
              <div className="flex ml-[20px] mt-[10px]  ">
                <img
                  className="max-xs:w-[80px] max-xs:h-[80px] w-[110px] h-[110px]"
                  src={item.img}
                />
                <span className="font-bold max-xs:text-[20px] text-[25px] mt-[20px] ml-[35px]">
                  {item.name}
                </span>
              </div>
              <div className="ml-[30px] font-normal text-[20px] w-[90%] h-[148px]">
                {item.describtion}
              </div>
              <div className="max-xs:mt-[30px] mt-[70px] mb-[50px] bg-success max-xs:w-[170px] w-[238px] max-xs:h-[17px] h-[23px] rounded-xl ml-[30px]"></div>
            </div>
          );
        })}
      </div>
      <button className="ml-auto mr-auto py-7 px-10 bg-success rounded-full uppercase text-white flex gap-2 tracking-wider">
        <span>Ariza Qoldirish</span>
      </button>
    </div>
  );
};
export default Tittles;
