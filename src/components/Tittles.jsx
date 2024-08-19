import isaev from '../assets/isaev.png'
import nbu from '../assets/nbu.png'
import pg from '../assets/pg.png'
import tps from '../assets/tps.png'
import dena from '../assets/dena.png'
import balton from '../assets/balton.png'
import sap from '../assets/sap.png'
const Tittles =()=>{
    const items = [
        {
            id: 4,
            img: dena,
            name: "<<Marwin Brands>>",
            describtion: 'Korxonasida tijorat direktori lavozimida "DENA" soklarini ikkinchi orindan birinchi oringa olib chiqqan.'
        },
        {
            id: 2,
            img: pg,
            name: "<<Procter&Gamble>>",
            describtion: 'Savdo menejeri lavozimida "IV kvartal 2002 yili orta osiyo va kavkazda" eng baland savdo kursatgichi uchun sertifikat soxibi' 
        },{
            id: 3,
            img: tps,
            name: "<<Internet provayder TPS>>",
            describtion: "Tijorat direktori lavozimida savdoni 400% ga oshirib dumaloq internet-kartalar joriy etgan"
        },{
            id: 1,
            img: nbu,
            name: "<<Uzbekiston milliy bank>>",
            describtion:  "Korxonalarni moliyaviy taxlil qilish metodikasini avtori"
        },{
            id:5,
            img: balton,
            name: '<<DP "Balton Trading (Asia)>>"',
            describtion: "(Nestle, Colgate-palmolive, Heinz, Shedroe-leto, Makfa, Impra, Oleina kabi brendlarning distribyutori) korxonasi raxbari lavozimida ishlagan"
        },{
            id: 6,
            img: sap,
            name: "<<Sap Uzbekistan>>",
            describtion: "2017-yili avgust oyidan bugungacha SAP Uzbekistan korxonasida savdo menejeri lavozimida ishlaydi."
        }
    ]
return(
    <div className='space-y-12'>
        <div className="flex">
            <div className="text-6xl text-white">ALISHER ISAEV <p className="text-success">KIM</p></div>
            <div className="w-1/2 ml-[60px] flex">
                <img className='ml-[80px] w-[126px] h-[126px]' src={isaev}/>
                <div className='ml-[20px]'>
                    <p className="text-[25px] text-white font-bold">Tadbirkor</p>
                    <span className="text-[20px] font-thin text-white">Sales Doctor, Milliard Club <br/> va RoboKidz brendlarining asoschisi</span>
                </div>
            </div>
        </div>
        <div className='grid gap-2 grid-cols-2 '>
            {items.map(item => {
                        return(
                            <div className='w-[94%] h-[400px] border bg-[#E4FFF9] mt-5 rounded-xl'>
                                <div className='flex ml-[20px] mt-[10px]  '>
                                    <img className='w-[110px] h-[110px]' src={item.img}/> 
                                    <span className='font-bold text-[25px] mt-[20px] ml-[35px]'>{item.name}</span>
                                </div>
                                <div className='ml-[30px] font-normal text-[20px] w-[90%] h-[148px]'>
                                    {item.describtion}
                                </div>
                                <div className='mt-[70px] bg-success w-[238px] h-[23px] rounded-xl ml-[30px]'></div>
                            </div>
                        )
                    })}
        </div>
        <button className="ml-auto mr-auto py-7 px-10 bg-success rounded-full uppercase text-white flex gap-2 tracking-wider">
            <span>Ariza Qoldirish</span>
        </button>
    </div>
)
}
export default Tittles