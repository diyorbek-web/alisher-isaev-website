import team from "../assets/team.png";

const Club = () => {
  return (
    <div className="flex justify-between">
      <div className="w-1/2">
        <p className="text-success text-[50px]">MILLIARD CLUBIGA</p>
        <p className="text-white text-[50px]">
          A'ZO BO'LISH <br /> IMKONIYATI
        </p>
        <div className="mt-6">
          <span className="text-white font-normal text-[20px]">
            Yirik tadbirkorlar klubi, "Milliard"ning asosiy maqsadi: uzbek
            tadbirkorlariga o'z maxsulotlarini dunyo xalqlari foydalanishiga
            imkoniyat yaratib berish
          </span>
          <br />
          <p className="text-[#FBFBFB] font- mt-7 text-[20px]">
            Xozirgi kunga kelib klub a'zolari soni ortib bormoqda va bu
            ko'rsatkich 150 taga yetdi. Quyidagi ma'lumotlar orqali "Milliard"
            klubi haqida raqamlarda tanishihsingiz mumkun.
          </p>
        </div>
        <button className="mt-[30px] bg-success w-[390px] h-[95px] flex justify-center items-center text-white rounded-[50px] text-[20px] font-medium">
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
              <p className="text-[50px] text-success">250+</p>
              <span className="text-white text-[14px]">
                Club a'zolari <br /> soni
              </span>
            </div>
            <div>
              <p className="text-[50px] text-success">$10 MLN</p>
              <span className="text-white text-[14px]">
                Club a'zosining o'rtacha <br /> yillik aylanmasi
              </span>
            </div>
          </div>
          <div>
            <div>
              <p className="text-[50px] text-success">20</p>
              <span className="text-white text-[14px]">Biznes Soxalari</span>
            </div>
            <div className="mt-[20px]">
              <p className="text-[50px] text-success">32</p>
              <span className="text-white text-[14px]">
                Eksport qilinadigan <br /> davlatlar soni
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Club;
