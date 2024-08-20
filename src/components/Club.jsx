import team from "../assets/team.png";

const Club = () => {
  return (
    <div className="flex max-xs:flex-col justify-between">
      <div className="max-xs:w-full w-1/2">
        <p className="text-success max-xs:text-[40px] text-[50px]">
          MILLIARD CLUBIGA
        </p>
        <p className="text-white max-xs:text-[40px] text-[50px]">
          A'ZO BO'LISH <br /> IMKONIYATI
        </p>
        <div className="mt-6">
          <span className="text-white font-normal max-xs:text-[16px] text-[20px]">
            Yirik tadbirkorlar klubi, "Milliard"ning asosiy maqsadi: uzbek
            tadbirkorlariga o'z maxsulotlarini dunyo xalqlari foydalanishiga
            imkoniyat yaratib berish
          </span>
          <br />
          <p className="text-[#FBFBFB] font- mt-7 max-xs:text-[16px] text-[20px]">
            Xozirgi kunga kelib klub a'zolari soni ortib bormoqda va bu
            ko'rsatkich 150 taga yetdi. Quyidagi ma'lumotlar orqali "Milliard"
            klubi haqida raqamlarda tanishihsingiz mumkun.
          </p>
        </div>
        <button className="max-xs:hidden mt-[30px] bg-success w-[390px] h-[95px] flex justify-center items-center text-white rounded-[50px] text-[20px] font-medium">
          RO'YXATDAN O'TISH
        </button>
      </div>
      <div className="1/2 mt-4">
        <div>
          <img src={team} />
        </div>
        <div className="flex justify-between">
          <div>
            <div>
              <p className="max-xs:text-[40px] text-[50px] text-success">
                250+
              </p>
              <span className="text-white text-[14px]">
                Club a'zolari <br /> soni
              </span>
            </div>
            <div>
              <p className="max-xs:text-[40px] text-[50px] text-success">
                $10 MLN
              </p>
              <span className="text-white text-[14px]">
                Club a'zosining o'rtacha <br /> yillik aylanmasi
              </span>
            </div>
          </div>
          <div>
            <div>
              <p className="max-xs:text-[40px] text-[50px] text-success">20</p>
              <span className="text-white text-[14px]">Biznes Soxalari</span>
            </div>
            <div className="mt-[20px]">
              <p className="max-xs:text-[40px] text-[50px] text-success">32</p>
              <span className="text-white text-[14px]">
                Eksport qilinadigan <br /> davlatlar soni
              </span>
            </div>
          </div>
        </div>
        <button className="xs:hidden m-auto w-[60%] mt-[30px] bg-success  h-[80px] flex justify-center items-center text-white rounded-[50px]  text-[17px] font-medium">
          RO'YXATDAN O'TISH
        </button>
      </div>
    </div>
  );
};
export default Club;
