import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let BrandsContext =  createContext(null)

export function BrandsContextProvi(props){
    let baseUrl ="https://ecommerce.routemisr.com"
    let [brandsList,setBrandsList]= useState([])
  useEffect(()=>{
    getAllBrands()
  },[])
   async function getAllBrands(){
  let {data}=await axios.get(`${baseUrl}/api/v1/brands`)
  console.log(data.data);
  setBrandsList(data.data)
    }
    return <BrandsContext.Provider value={{brandsList}}>
    {props.children}
    </BrandsContext.Provider>
}
