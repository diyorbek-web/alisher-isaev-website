import YouTube from 'react-youtube';

import youtuberasm from "../assets/rasmyou1.png"
import youtuberasmtwo from "../assets/rasmyou2.png"
import youtuberasmthree from "../assets/rasmyou3.png"
const Conference = () =>{
   
        const videoOptions = {
          height: '500px',
          width: '900px',
          playerVars: {
            autoplay: 0, // Videolar avtomatik ravishda boshlanishi
          }}
return(
    <div>
        <div>
            <p className="text-center text-4xl text-white">
                <span className="text-success">+1000 TA</span>
                TADBIRKORLAR  <span className="text-success">SALES <br/> DOCTOR</span> KURSINI BITIRISHGAN
            </p>
        </div>
        <div className="flex mt-[30px] justify-center  space-y-10 ">
        <YouTube
            videoId="cBNxy_LuHfw"
            opts={videoOptions}
          />
        </div>
        <div className="ml-[30px] mt-3 w-[94%]  flex justify-between">
            <img className="w-[32.5%]" src={youtuberasm}/>
            <img className="w-[32.5%]" src={youtuberasmtwo}/>
            <img className="w-[32.5%]" src={youtuberasmthree}/>
        </div>
        <div className="flex justify-center mt-10">
            <button className="py-7 px-10 bg-success rounded-full uppercase text-white flex gap-2 tracking-wider">
                <span>Ro'yhatdan o'tish</span>
            </button>
        </div>
    </div>
        
)
}
export default Conference