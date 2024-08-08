import Navbar from "./components/Navbar.jsx";
import Intro from "./components/Intro.jsx";
import SalesProgram from './components/SalesProgram.jsx';

function App() {
  
  return (
    <div className="w-screen bg-[url('/src/assets/intro-background.png')] bg-no-repeat bg-contain bg-black-90">
      <div className="max-w-5xl mx-auto p-8 space-y-28">
        <div className="space-y-8">
          <Navbar />
          <Intro />
        </div>
        <SalesProgram />
      </div>
    </div>
  );
}

export default App;
