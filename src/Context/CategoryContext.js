import axios from "axios";
import { createContext, useEffect, useState } from "react";
 

export let CategoryContext =createContext(null)

export function CategoryContextProvi(props){

  let baseUrl ="https://ecommerce.routemisr.com"
  let [categoryList,setCategoryList]= useState([])
useEffect(()=>{
  getAllCategories()
},[])
 async function getAllCategories(){
let {data}=await axios.get(`${baseUrl}/api/v1/categories`)
console.log(data.data);
setCategoryList(data.data)
  }
    return <CategoryContext.Provider value={{categoryList}}>
        {props.children}

    </CategoryContext.Provider>
}