
import { AboutTheClinic } from "./components/aboutTheClinic/AboutTheClinic"
import ImageCarousel from "./components/carousel/Carousel"
import { ListOfDoctors } from "./components/listOfDoctors/ListOfDoctors"
import { Navbar } from "./components/navbar/Navbar"


function App() {
  

  return (
    <>
     <Navbar/>
    <ImageCarousel/>
    <ListOfDoctors/>
    <AboutTheClinic/>
    </>
  )
}

export default App
