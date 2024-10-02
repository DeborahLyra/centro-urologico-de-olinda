
import { AboutTheClinic } from "./components/aboutTheClinic/AboutTheClinic"
import ImageCarousel from "./components/carousel/Carousel"
import { Contact } from "./components/contact/Contact"
import { Footer } from "./components/footer/Footer"
import { ListOfDoctors } from "./components/listOfDoctors/ListOfDoctors"
import { Navbar } from "./components/navbar/Navbar"


function App() {
  

  return (
    <>
     <Navbar/>
    <ImageCarousel/>
    <ListOfDoctors/>
    <AboutTheClinic/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
