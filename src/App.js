import Navbar from "./components/Navbar";
import AboutSection from "./components/about";
import CarouselSection from "./components/Carasoul";
import AchievementsSection from "./components/Achievements";
import SelectionSection from "./components/Selection";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
   <Navbar/>
   <CarouselSection/>
   <AboutSection/>
   <AchievementsSection/>
   <SelectionSection/>
   <Footer/>
   
    </div>
  );
}

export default App;
