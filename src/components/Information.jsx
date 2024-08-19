import { Calculator } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
import { Presentation } from 'lucide-react';
import { Send } from 'lucide-react';
import { BookOpen } from 'lucide-react';
import { CircleUser } from 'lucide-react';


const Information =() => {
    const items = [
        {
            id: 1,
            logo: <Calculator />,
            name: "Biznes  matematika",
            title: "Biznesni raqamlarda korishni organasiz"
        },
        {
            id: 2,
            logo: <MessageCircleMore />,
            name: "Netvorking",
            title: "Barcha sales Doctor bitiruvchilari bilan tanishishingiz mumkin"
        },
        {
            id: 3,
            logo: <Presentation/>,
            name: "Uyga vazifalar",
            title: "Xafta davomida uyga vazifalarni bajarish uchun qoshimja darslar"
        },
        {
            id: 4,
            logo: <Send/>,
            name: "Maxsus guruhlar",
            title: "Oz biznes yonalishingizga mos telegram guruhlarga qoshilish imkoniyati"
        },
        {
            id: 5,
            logo: <BookOpen />,
            name: "Darslar shablonlari",
            title: "Xar bir dars boshida mavzuga mos qo'llanmalar va shablonlarga ega bo'lasiz"
        },
        {
            id: 6,
            logo: <CircleUser />,
            name: "Milliard klubi",
            title: "Trening songida sizga 'Milliard' klubiga qo'shilish imkoniyati ochiladi"
        }
    ]
return(
    <div className="w-full ">
        <div className="flex justify-center text-white text-4xl ">
             <span className='text-success'>Kursda </span>
             <span className='ml-[7px]'> nimalar boladi</span>
        </div>
        <div className='grid gap-3 grid-cols-3 mt-[50px]'>
            <div className='w-[95%] '>
                <div className='m-auto w-[100px] h-[100px] border border-success bg-black-80 rounded-xl'>
                    <Calculator className='m-auto mt-[17px]' size={60} color='#4DAA8A' />
                </div>
                <div className='mt-[25px]'>
                    <p className=' text-center font-bold text-[25px] text-white'>Biznes matematike</p>
                    <p className='mt-[20px] mb-[60px] text-center font-normal text-[20px] text-white'>Biznesingizni raqamlarda ko'rishni o'rganasiz</p>
                </div>
            </div>
            <div className='w-[95%] '>
                <div className='m-auto w-[100px] h-[100px] border border-success bg-black-80 rounded-xl'>
                    <MessageCircleMore className='m-auto mt-[17px]' size={60} color='#4DAA8A' />
                </div>
                <div className='mt-[25px]'>
                    <p className=' text-center font-bold text-[25px] text-white'>Netvorking</p>
                    <p className='mt-[20px] mb-[60px] text-center font-normal text-[20px] text-white'>Barcha sales Doctor bitiruvchilari bilan tanishishingiz mumkin</p>
                </div>
            </div>
            <div className='w-[95%] '>
                <div className='m-auto w-[100px] h-[100px] border border-success bg-black-80 rounded-xl'>
                    <Presentation className='m-auto mt-[17px]' size={60} color='#4DAA8A' />
                </div>
                <div className='mt-[25px]'>
                    <p className=' text-center font-bold text-[25px] text-white'>Uyga vazifalar</p>
                    <p className='mt-[20px] mb-[60px] text-center font-normal text-[20px] text-white'>Xafta davomida uyga vazifalarni bajarish uchun qoshimja darslar</p>
                </div>
            </div>
            <div className='w-[95%] '>
                <div className='m-auto w-[100px] h-[100px] border border-success bg-black-80 rounded-xl'>
                    <Send className='m-auto mt-[17px]' size={60} color='#4DAA8A' />
                </div>
                <div className='mt-[25px]'>
                    <p className=' text-center font-bold text-[25px] text-white'>Maxsus guruhlar</p>
                    <p className='mt-[20px] mb-[60px] text-center font-normal text-[20px] text-white'>Oz biznes yonalishingizga mos telegram guruhlarga qoshilish imkoniyati</p>
                </div>
            </div>
            <div className='w-[95%] '>
                <div className='m-auto w-[100px] h-[100px] border border-success bg-black-80 rounded-xl'>
                    <BookOpen className='m-auto mt-[17px]' size={60} color='#4DAA8A' />
                </div>
                <div className='mt-[25px]'>
                    <p className=' text-center font-bold text-[25px] text-white'>Darslar shablonlari</p>
                    <p className='mt-[20px] mb-[60px] text-center font-normal text-[20px] text-white'>Xar bir dars boshida mavzuga mos qo'llanmalar va shablonlarga ega bo'lasiz</p>
                </div>
            </div>
            <div className='w-[95%] '>
                <div className='m-auto w-[100px] h-[100px] border border-success bg-black-80 rounded-xl'>
                    <CircleUser className='m-auto mt-[17px]' size={60} color='#4DAA8A' />
                </div>
                <div className='mt-[25px]'>
                    <p className=' text-center font-bold text-[25px] text-white'>Milliard klubi</p>
                    <p className='mt-[20px] mb-[60px] text-center font-normal text-[20px] text-white'>Trening songida sizga 'Milliard' klubiga qo'shilish imkoniyati ochiladi</p>
                </div>
            </div>
        </div>
    </div>
)
}
export default Information