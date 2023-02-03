import { Children } from "react"
import NavBar from "./Navbar"
import styles from './Pagecontainer.module.css'

const Pagecontainer = ({children,className,style})=>{
    return (
      <div >
        <header className={styles.header}>
          <NavBar/>
        </header>
        <main className={className} style={{...style, minHeight:'100vh', minWidth: '100vw'}}>{children} </main>
        <footer className={styles.footer2} style={{
          backgroundColor:'green'
        }}>abcvw</footer>
      </div>
    )
}
export default Pagecontainer