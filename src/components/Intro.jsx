const Intro = () => {
    return (
        <div className="w-full">
            <div className="flex">
                <div className="space-y-10 pt-10">
                    <p className="uppercase text-6xl font-bold text-white">
                        1 oylik <span className="text-success">biznesni <br /> davolash</span> kursi
                    </p>
                    <p className="text-xl text-white tracking-wider">
                        Biznesni <span className="font-extrabold">raqamlarda ko'rmoqchi bo'lgan va karra-<br/>karra o'smoqchi bo'lgan</span> tadbirkorlar uchun
                    </p>
                    <button className="py-7 px-10 bg-success rounded-full uppercase text-white flex gap-2 tracking-wider">
                        <span>Ro'yhatdan o'tish</span>
                    </button>
                </div>
                <img src="/images/alisher.png" alt="founder-image" className="w-[45%]"/>
            </div>
            <div className="w-full flex gap-8 py-6 px-8 border border-success bg-black-80 rounded-lg">
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
                        Бизнес тажрибани 1 ой ичида қўлга киритасиз ва ўз бизнесингизга жорий этасиз.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Intro;