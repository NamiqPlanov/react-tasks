import styles from '../Pagecontainer.module.css'
import { NavLink as Nav, NavLink } from "react-router-dom"
import { useContext } from 'react'
import { DataContext } from '../../context/contextdata'
import { ModeContext } from '../../context/ModeContext'
import { useEffect } from 'react'
import { AlertContext } from '../../context/AlertContext'



const Navlink = ({to, text})=>{
  return <Nav
         className = {({isActive})=> isActive ? styles.ActiveLink : null}
         to = {to}>{text}</Nav>
}


const NavBar = ({ })=>{
  
   const [dark,setdark] = useContext(ModeContext)
   const showAlert = useContext(AlertContext)
   
   
   return (
      
        <nav>
            <Navlink className={styles.nav} to="/" text='Home'/>
            <Navlink className={styles.nav} to="/about" text='About'/>
            <Navlink className={styles.nav} to="/contact" text='Contact'/>
            <Navlink className={styles.nav} to="/starwarsinfo" text='StarwarsInfo'/>
            <Navlink className={styles.nav} to='/yummi' text='Yummi'/>
            <Navlink className={styles.nav} to='/nameinput' text='Input name'/>
            <Navlink className={styles.nav} to='/showdata' text='Show data'/>
            <Navlink className={styles.nav} to='/users' text='Users info'/>
            <Navlink className={styles.nav} to='/starwarswithreducer' text='Starwars with reducer'/>
            <button className={styles.btn}
            onClick={()=>{
              setdark((pre)=>!pre)
            }}>{dark ? '☀' : '🌙'} </button>
            <button onClick={()=>{
              showAlert({
                message: 'welcome my friend',
                type:'error'
              })
            }} >see alert</button>
          </nav>
      
    )
}
export default NavBar
