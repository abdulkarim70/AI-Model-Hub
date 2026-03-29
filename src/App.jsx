
import NavBar from "./Components/Navbar/Navbar"
import Banner from "./Components/Banner"
import Footer from "./Components/Footer"
import Models from "./Components/Models"
import Cart from "./Components/Cart"
import { useState } from "react"
const getModels= async()=>{
  const res= await fetch('/public/Models.json')
  return res.json()
}

const modelPromise=getModels()

function App() {
 const [activeTab, setActiveTab]=useState('model')
// console.log(activeTab);
const [carts, setcarts]=useState([])
// console.log(carts);
  return (
    <>
      
<NavBar/>
      <Banner/>
      {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent">
  <input onClick={()=> setActiveTab('model')} type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Models"defaultChecked />
  <input onClick={()=> setActiveTab('cart')} type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Cart"  />
  
</div>
    { activeTab==='model'&& <Models modelPromise={modelPromise}carts={carts} setcarts={setcarts}/>}  
    { activeTab==='cart'&& <Cart carts={carts}/ >}
<Footer/>
      
    </>
  )
}

export default App
