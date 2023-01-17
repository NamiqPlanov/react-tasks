import { useState } from "react";
import Button from "./button";

function ShowName(){
    const[name,setname] = useState('')
    
    return(
        <div>
            <h1>{name}</h1>
            <Button  bgcolor='green' text='Name' click={()=>{
                setname(prompt('Enter your name: '))
            }} />
        </div>
    )
}
export default ShowName;