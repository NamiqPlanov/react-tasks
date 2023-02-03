import { useState } from "react"
import { createContext } from "react"

export const AlertContext = createContext()

function AlertcontextComponent({children}){
   
   const [alert,setAlert] = useState({
    show:false,
    message:'smth',
    type:'success'
   })

const ShowAlert = ({message,type})=>{
    setAlert({
        show:true,
        message,
        type
    })
    setTimeout(() => {
        setAlert((pre)=>({...pre,show:false}))
    }, 1000);
}

    return(
        <AlertContext.Provider value={ShowAlert}>
           {
              alert.show &&
            <div style={{
            position:'fixed',
            width:200,
            top:10,
            right:10,
            height:60,
            backgroundColor: alert.type === 'success' ? 'green' : 'red'
           }}>
              {alert.message}
           </div>}
           {children}
           

        </AlertContext.Provider>
    )
}
export default AlertcontextComponent