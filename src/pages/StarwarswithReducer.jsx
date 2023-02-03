import axios from "axios";
import Pagecontainer from "../PageContainer/PageContainer";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

const StarwarswithReducer = ({ })=>{
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get("https://www.swapi.tech/api/people").then(({data})=>{
            const Newdata = data.results.map(({uid, name1})=>({name1,uid}))
            setData(Newdata)
        })
    },[])

    return(
        <Pagecontainer
        style = {{
            display:'flex',
            flexWrap: 'wrap',
            gap: 10,
            justifyContent: 'center',
            padding: '20px 0'
        }}
        >
            {
            data.map(({uid,name1})=>{
                return(
                    <Link
                    key={uid}
                    to={`/starwarswithreducer/${uid}`}
                    style={{
                        display: 'block',
                        width:160,
                        height:200,
                        boxShadow:'0 0 10px black',
                        color: 'black',
                        textDecoration: 'none',
                        textAlign:'center',
                        borderRadius:10

                    }}>
                        <h1>{name1}</h1>
                        <p>{uid}</p>
                        </Link>
                )
            })
            }
        </Pagecontainer>
    )
}
export default StarwarswithReducer