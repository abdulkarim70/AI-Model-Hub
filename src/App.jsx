
import NavBar from "./Components/Navbar/Navbar"
import Banner from "./Components/Banner"
import Footer from "./Components/Footer"
import Models from "./Components/Models"
const getModels= async()=>{
  const res= await fetch('/public/Models.json')
  return res.json()
}

const modelPromise=getModels()

function App() {
 

  return (
    <>
      
<NavBar/>
      <Banner/>
      <Models modelPromise={modelPromise}/>
<Footer/>
      
    </>
  )
}

export default App
