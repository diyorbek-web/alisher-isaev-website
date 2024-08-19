import Navbar from "./components/Navbar.jsx";
import Intro from "./components/Intro.jsx";
import SalesProgram from "./components/SalesProgram.jsx";
import Body from "./components/Body.jsx";
import Tittles from "./components/Tittles.jsx";
import Information from "./components/Information.jsx";
import Conference from "./components/Conference.jsx";
import BookPage from "./components/BookPage.jsx";
import Table from "./components/Table.jsx";
import YoutubeComponent from "./components/YoutubeComponent.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";
import Club from "./components/Club.jsx";
import LessonAbout from "./components/LessonAbout.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <div className="w-90 bg-[url('/src/assets/intro-background.png')] bg-no-repeat bg-contain bg-black-90">
        <div className="max-w-5xl mx-auto p-8 space-y-28">
          <div className="space-y-8">
            <Navbar />
            <Intro />
          </div>
          <Body />
          <Tittles />
          <Information />
          <Conference />
          <SalesProgram />
          <BookPage />
          <YoutubeComponent />
        </div>
      </div>
      <div className="w-90 bg-contain bg-black">
        <div className="max-w-5xl mx-auto p-8">
          <Table />
        </div>
      </div>
      <div className="w-90 bg-contain bg-black-90">
        <div className="max-w-5xl mx-auto p-8">
          <RegistrationForm />
        </div>
      </div>
      <div className="w-90 bg-contain bg-black-90 h-[50px] "></div>
      <div className="w-90 bg-success h-[40px]">
        <p className="font-bold text-white text-center text-[27px]">
          FAQAT SALES DOCTOR BITIRUVCHILARI UCHUN
        </p>
      </div>
      <div className="w-90 bg-contain bg-black-90">
        <div className="max-w-5xl mx-auto p-8">
          <Club />
          <LessonAbout />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
