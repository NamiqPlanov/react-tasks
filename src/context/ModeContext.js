import { useState ,useEffect} from "react"
import { createContext } from "react"

 export const ModeContext = createContext()
function ModeContextComponent({children,}){
    const [dark,setdark] = useState(false)

    useEffect(()=>{
        localStorage.getItem('mode')==='true' ? setdark(true) : setdark(false)
       },[])
    
       useEffect(()=>{
        localStorage.setItem('mode',dark)
       },[dark])

    return <ModeContext.Provider value={[dark,setdark]}>
       <div className={dark ? 'darkmode' : null}>
        {children}
       </div>
       
    </ModeContext.Provider>
}
export default ModeContextComponent