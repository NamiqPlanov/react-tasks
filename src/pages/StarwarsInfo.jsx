import Pagecontainer from "../PageContainer/PageContainer";
import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";




const StarwarsInfo = ({})=>{
    const [properties,setproperties] = useState({})
    const {peopleId} = useParams()

    useEffect(()=>{
        async function getData(){
            const {data} = await axios.get(`https://www.swapi.tech/api/people${peopleId}`)
           
            let {birth_year,mass,name1,eye_color} = data.result.properties
            setproperties({birth_year,mass,name1,eye_color})
        }
        getData()
    },[])

    return(
        <Pagecontainer>
            <h1>Name:{properties.name1}</h1>
            <h1>Mass:{properties.mass}</h1>
            <h1>Eye color:{properties.eye_color}<span style={{
                display: 'inline-block',
                width:20,
                height:20,
                backgroundColor: properties.eye_color,
                borderRadius: '50%',
                marginBottom: -5
            }}></span></h1>
            <Link to='/'>Come Back</Link>
            
        </Pagecontainer>
    )
}
export default StarwarsInfo