import logo from '../assets/logo.png'

const Navbar = () =>{
    return (
        <div className='flex justify-between items-center'>
            <div className='flex justify-between items-center text-[20px] font-medium text-white'>
                <img src={logo} alt='main-logo' className='w-[68px]'/> 
                <ul className='ml-6'>
                    <li> Alisher Isayevning </li>
                    <li>oflayn kursi</li>
                </ul>
            </div>
            <ul className='items-center text-lg text-white'>
                <li>Kursga Start</li>
                <li>24-avgust</li> 
            </ul>
            <div className='items-center text-lg text-white rounded-full py-2.5 px-9 bg-success'>
                +998 (55) 500 22 20
            </div>
        </div>
    )
} 

export default Navbar