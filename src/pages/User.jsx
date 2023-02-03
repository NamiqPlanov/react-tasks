import Pagecontainer from "../PageContainer/PageContainer";
import styles from '../index.css'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useActionData } from "react-router-dom";
import { useReducer } from "react";



const Reducer = (state,action)=>{
    switch (useActionData.type) {
        case 'GetData':
            return action.payload;
        case 'RemoveData' :
            let NewState = state.filter((elem)=>elem.id !==elem.payload)
            return NewState;
        case 'AddElement':
                return [...state,action.payload];
        case 'EditElement':
            return state.map((elem)=>{
                if(elem.id ===action.payload.id){
                    return {...elem,name:action.payload.username}
                }
                return elem;
            })
        default:
            return state;
    }
}
    const Users = ({ })=>{
        const [data,dispatch] = useReducer(Reducer,[])
    

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(({data})=>{
            const NewData = data.result.map(({id,username,email})=>({username,id,email}))
            dispatch({ type: 'GetData', payload: NewData})
        })
    },[])

     
    return(
        <Pagecontainer
        style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            justifyContent: 'center',
            padding: '20px 0'
        }}>
            {
                data.map((id,username,email)=>{
                    return(
                        <Link
                        key={id}
                        to={`/users/${id}`}
                        style={{
                            display:'block',
                            width:160,
                            height:200,
                            boxShadow: '0 0 10px black',
                            color: 'black',
                            textDecoration: 'none',
                            textAlign: 'center',
                            borderRadius: 10
                        }}>
                            <h1>{username}</h1>
                            <p>{id}</p>
                            <p>{email}</p>
                            <button
                            onClick={()=>{
                                dispatch({type:'Removedata',payload:id})
                            }}>X</button>
                            <button
                            onClick={()=>{
                                let newname = prompt('Change name: ')
                                dispatch({type: 'EditElement',payload:{username,id,email}})
                            }}>Edit</button>
                        </Link>
                    )
                })
            }
            <button onClick={()=>{
                let name2 = prompt('Add name: ')
                let email2 = prompt('Add email: ')
                let id2 = +prompt('Add id: ')
                let newobj = {
                    name2,
                    email2,
                    id2
                }
                dispatch({type:'AddElement',payload:{newobj}})
            }}
            style={{
                width: 70,
                height:36
            }}> Add element</button>
        </Pagecontainer>
    )

}

export default Users

