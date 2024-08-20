const Intro = () => {
  return (
    <div className="w-full">
      <div className="max-xs:flex-col flex">
        <div className="max-xs:space-y-4 space-y-10 pt-10">
          <p className="max-xs:text-center max-xs:mt-[-30px] max-xs:text-[30px] uppercase text-6xl font-bold text-white">
            1 oylik
            <span className="text-success">
              biznesni <br /> davolash
            </span>
            kursi
          </p>
          <p className="max-xs:leading-tight max-xs:text-center max-xs:text-[16px] text-xl text-white tracking-wider">
            Biznesni
            <span className="font-extrabold">
              raqamlarda ko'rmoqchi <br className="xs:hidden" /> bo'lgan va
              karra-
              <br className="max-xs:hidden" />
              karra o'smoqchi <br className="xs:hidden" /> bo'lgan
            </span>
            tadbirkorlar uchun
          </p>
          <button className="max-xs:hidden py-7 px-10 bg-success rounded-full uppercase text-white flex gap-2 tracking-wider">
            <span>Ro'yhatdan o'tish</span>
          </button>
        </div>
        <img
          src="/images/alisher.png"
          alt="founder-image"
          className="w-[45%] max-xs:w-[80%] flex max-xs:m-auto"
        />
        <button className="xs:hidden text-[20px] font-bold max-xs:w-[75%] max-xs:mt-[-5px] max-xs:m-auto  py-[28px] m-auto  bg-success rounded-full uppercase text-white  gap-2 tracking-wider">
          <span>Ro'yhatdan o'tish</span>
        </button>
      </div>
      <div className="max-xs:mt-[50px] max-xs:w-[90%] max-xs:m-auto w-full flex max-sm:flex-col gap-8 py-6 px-8 border border-success bg-black-80 rounded-lg">
        <div className="space-y-6">
          <span className="text-5xl font-extrabold text-success">
            +1000 <spam className="text-xl capitalize -ml-1.5">ta</spam>
          </span>
          <p className="text-lg text-white">
            Тадбиркорлар Sales Doctor Academy'да ўз бизнесини даволаган.
          </p>
        </div>
        <div className="space-y-6">
          <span className="text-5xl font-extrabold text-success">
            70 <spam className="text-xl uppercase -ml-1.5">nps</spam>
          </span>
          <p className="text-lg text-white">
            Sales Doctor 12-мавсумининг NPS - кўрсаткичи 80.
          </p>
        </div>
        <div className="space-y-6">
          <span className="text-5xl font-extrabold text-success">
            26 <spam className="text-xl uppercase -ml-1.5">yil</spam>
          </span>
          <p className="text-lg text-white text-balance">
            Бизнес тажрибани 1 ой ичида қўлга киритасиз ва ўз бизнесингизга
            жорий этасиз.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
