import { createContext } from "react"

export const DataContext = createContext()

const data = {
    name: 'Namiq',
    age: 19,
    email: 'hello123@gmail.com'
}

function DataContextComponent( {children}){
    return(
        <DataContext.Provider value={data} >
           {children}
        </DataContext.Provider>
    )
}

export default DataContextComponent