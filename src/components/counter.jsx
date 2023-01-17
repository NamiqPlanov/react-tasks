import { useState } from "react"
import Button from "./button"

function Counter(){
    const [count,setcount] = useState(0)
    
    let number = null
    return(
        <div>
             <h1 style={{
        fontFamily: "cursive"
      }}
      >{count}</h1>
        <Button click={()=>{
            setcount(count-1)
          }} bgcolor="red" text="-"/>
            
          <Button bgcolor="green" text="+" click={()=>{
            setcount(count+1)
          }}/>
          <Button bgcolor="yellow" text="*" click={()=>{
            number = +prompt('Enter number for multiplying: ')
            setcount (count * number)
          }}/>
          <Button bgcolor='#0047ab' text='/' click={()=>{
            number = +prompt('Enter number for dividing: ')
            setcount(count/number)
          }} />
          <Button bgcolor='#006400' text='%' click={()=>{
            number = +prompt('Enter number for finding the reaminder: ')
            setcount(count%number)
          }} />
          <Button bgcolor="brown" text="show" click={()=>{
            alert(count)
          }}/>
          <Button bgcolor="grey" text="reset"
          click={()=>{
            setcount(0)
          }}/>
          <Button bgcolor="violet" text="special number" click={()=>{
            let specialNumber = +prompt('Enter your number: ')
            setcount(specialNumber)
          }}/>
          </div>
    )
}

export default Counter