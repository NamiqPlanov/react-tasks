import { NavLink } from "react-router-dom";
import Pagecontainer from "../PageContainer/PageContainer";


const Contact = ({})=>{
    return (
      <Pagecontainer>
        <div>
          Contact
          
        <NavLink style={{
            padding: '0 10px',
            margin: '0 10px',
            border: '2px solid red',
            backgroundColor: 'red',
            color:'white',
            textDecoration: 'none'
        }} to='/'>go home</NavLink>  
        </div>
        </Pagecontainer>
      
      
    )
}
export default Contact