import axios from 'axios'
import { useEffect } from 'react'
import { useState, useTransition } from 'react'
import styles from './Yummi.module.css'
const url = "https://www.themealdb.com/api/json/v1/1/random.php "



const Yummi = ({})=>{
const [meal,setmeal]= useState({})

useEffect( ()=>{
    const fetchdata = async()=>{
         const {data} = await axios.get(url)
    setmeal(data.meals[0])
    }
    
   fetchdata()

},[])


    return(
        <div>
         <h1  className={styles.string}> Welcome to canteen</h1>
        
        {
        Object.keys(meal).length>0 &&
        <div>
        <p>MealName:{meal.strMeal}</p>
        <p>MealCountry:{meal.strArea}</p>
        <p>Ingradients: {meal.strIngredient1}</p>
        <p>Ingradients: {meal.strIngredient2}</p>
        <p>Ingradients: {meal.strIngredient3}</p>
        <p>Ingradients: {meal.strIngredient4}</p>
        <a  target='_blank' href={`${meal.strYoutube}`}>Video for cooking this meal</a>
        </div>
        }
        
        </div>
    )
}
export default Yummi;