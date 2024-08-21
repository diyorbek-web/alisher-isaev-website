import kurskitob from "../assets/kurskitob.png";
import { FaCheck } from "react-icons/fa";
import { BiSolidCheckShield } from "react-icons/bi";

const BookPage = () => {
  const items = [
    {
      id: 1,
      title: "Biznesingizni karra karra ostiruvchi nuqtalarni aniqlab olasiz",
    },
    {
      id: 2,
      title: "Xodimlaringiz togri ishlashi uchun togri KPI qoyishni organasiz",
    },
    {
      id: 3,
      title:
        "Nasiya kerakmi yoki yoqmi? (Formula shablon - raqamlarga asoslanganshablon) ",
    },
    {
      id: 4,
      title:
        "Biznesingizning savdoga tasir qiluvchi xar bir korsatkichini aniq hisoblay olasiz",
    },
    {
      id: 5,
      title: "Kelajakdagi biznesingiz modelini yaratasiz",
    },
    {
      id: 6,
      title: "B2B va B2C biznes turlari xos sotish usullarini organasiz",
    },
  ];
  return (
    <div className="max-xs:flex-col flex">
      <div>
        <div className="relative  max-xm:mb-4 max-xm:w-[300px] max-xm:h-[300px] max-xs:left-[0px] max-xs:w-[350px] max-xs:h-[350px] top-[40px] left-[-100px] text-white w-[600px] h-[600px] bg-gradient-radial rounded-full">
          <img
            src={kurskitob}
            className="max-xm:w-[200px] max-xm:left-[40px] max-xm:h-[200px] max-xs:w-[250px] max-xs:left-[70px] max-xs:top-[60px] max-xs:h-[250px] absolute w-[400px] h-[340px] left-[110px] top-[100px]"
          />
          <button className="max-xs:hidden absolute top-[500px] left-[170px] py-7 px-10 bg-success rounded-full uppercase text-white flex gap-2 tracking-wider">
            <span>Biznesni Davolash</span>
          </button>
        </div>
      </div>

      <div>
        <div>
          <p className="max-xs:text-[26px] text-4xl text-white">
            USHBU NATIJALARGA{" "}
            <span className="text-success">
              {" "}
              KURSDAN <br className="max-xs:hidden" /> SONG ERISHASIZ
            </span>
          </p>
        </div>
        {items.map((item) => {
          return (
            <div className="flex mt-[20px] justify-between">
              <BiSolidCheckShield
                className="mt-[10px]"
                size={30}
                color="#4DAA8A"
              />
              <span className="w-[90%] max-xs:text-[14px] text-white ml-[20px] text-[18px] font-normal">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
      <button className="xs:hidden m-auto w-[70%] mt-5 flex justify-center py-7 px-10 bg-success rounded-full uppercase text-white  gap-2 tracking-wider">
        <span>Biznesni Davolash</span>
      </button>
    </div>
  );
};
export default BookPage;
