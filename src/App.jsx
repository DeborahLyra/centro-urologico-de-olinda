
import { AboutTheClinic } from "./components/aboutTheClinic/AboutTheClinic"
import ImageCarousel from "./components/carousel/Carousel"
import { Contact } from "./components/contact/Contact"
import { Footer } from "./components/footer/Footer"
import { ListOfDoctors } from "./components/listOfDoctors/ListOfDoctors"
import { Navbar } from "./components/navbar/Navbar"
import { VideoComponent } from "./components/videoClinic/VideoComponent"


function App() {
  

  return (
    <>
     <Navbar/>
    <ImageCarousel/>
    <ListOfDoctors/>
    <VideoComponent/>
    <AboutTheClinic/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
