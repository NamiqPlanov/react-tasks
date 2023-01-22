import Button from "./components/button";
import Counter from "./components/counter";
import {Square,namiq}  from "./components/square";
import ShowName from "./components/NameEntering";
import Webpage from "./components/webpageContent";
import Login from "./components/Login/Login";
import { useState } from "react";
import Yummi from "./components/yummi/Yummi";


function App(){
  const[show,setshow] = useState(false)
  return(
    <div>
      <Yummi/>
    </div>
      
  );
}
export default App;



