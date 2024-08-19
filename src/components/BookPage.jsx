import kurskitob from '../assets/kurskitob.png'
import { FaCheck } from 'react-icons/fa';
import { BiSolidCheckShield } from "react-icons/bi";


const BookPage = () =>{
const items =[
    {
        id:1,
        title: "Biznesingizni karra karra ostiruvchi nuqtalarni aniqlab olasiz"
    },{
        id:2,
        title: "Xodimlaringiz togri ishlashi uchun togri KPI qoyishni organasiz"
    },{
        id: 3,
        title: "Nasiya kerakmi yoki yoqmi? (Formula shablon - raqamlarga asoslanganshablon) "
    },{
        id:4,
        title: "Biznesingizning savdoga tasir qiluvchi xar bir korsatkichini aniq hisoblay olasiz"
    },{
        id: 5,
        title: "Kelajakdagi biznesingiz modelini yaratasiz"
    },{
        id:6,
        title: "B2B va B2C biznes turlari xos sotish usullarini organasiz"
    }
]
    return(
    <div className='flex'>
        <div>
            <div className="relative  top-[40px] left-[-100px] text-white w-[600px] h-[600px] bg-gradient-radial rounded-full">
                <img src={kurskitob} className='absolute w-[400px] h-[340px] left-[110px] top-[100px]'/>    
                <button className="absolute top-[500px] left-[170px] py-7 px-10 bg-success rounded-full uppercase text-white flex gap-2 tracking-wider">
                    <span>Biznesni Davolash</span>
                </button>
            </div>
        </div>
        <div>   
            <div>
                <p className="text-4xl text-white">
                    USHBU NATIJALARGA <span className="text-success"> KURSDAN <br/> SONG ERISHASIZ</span>
                </p>
            </div>
            {
                items.map(item =>{
                    return(
                        <div className='flex mt-[20px] justify-between'>
                            <BiSolidCheckShield className='mt-[10px]' size={30} color="#4DAA8A"/>
                            <span className='w-[90%] text-white ml-[20px] text-[18px] font-normal'>
                                {item.title}
                            </span>
                        </div>      
                    )
                })
            }
            
        </div>
    </div>

  
)
}
export default BookPage