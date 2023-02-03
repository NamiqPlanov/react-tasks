import  ShowName  from "../components/NameEntering";
import  Groupping  from "../components/groupping/groupping";
import { Route, Routes } from "react-router";
import About from "../pages/about";
import Home from "../pages/homepage";
import NavBar from "../PageContainer/Navbar";
import Contact from "../pages/contact";
import Starwars from "../pages/StarwarsInfo";
import { useContext } from "react";
import { DataContext } from "../context/contextdata";
import Yummi from "../components/yummi/Yummi";
import Showdata from "../pages/Showdata";
import NotFound from "../pages/NotFound";
import StarwarswithReducer from "../pages/StarwarswithReducer";
import StarwarsInfo from "../pages/StarwarsInfo";
import Users from "../pages/User";









const WebsiteRouting = ()=>{


    return(
        <Routes>
        <Route path="/nameinput"  element={<ShowName />} />
        <Route path="/groupping"  element={<Groupping />} />
        <Route path="/"  element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/contact"  element={<Contact />} />
        <Route path="/starwarsinfo/:peopleId"  element={<StarwarsInfo />} />
        <Route path="/showdata"  element={<Showdata />} />
        <Route path="*"  element={<NotFound />} />
        <Route path="/starwarswithreducer"  element={<StarwarswithReducer />} />
        <Route path="/yummi"  element={<Yummi />} />
        <Route path="/users"  element={<Users />} />
        
       
      </Routes>
    )
}

export default WebsiteRouting;
