import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import DataContextComponent, { DataContext } from "../context/contextdata";
import Pagecontainer from "../PageContainer/PageContainer";
import styles from "../PageContainer/Pagecontainer.module.css"


const Showdata = ()=>{
   const data1 = useContext(DataContext)
   
    return(
        <Pagecontainer>
        <div  className={styles.main} >
         <h1 style={{
            display:'flex',
            flexDirection:'column',
            gap:15,
            backgroundColor:'green',
            
        }}>name:{data1.name},
         age:{data1.age},
         e-mail:{data1.email}
         </h1>
         
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
export default Showdata