import axios from "axios";
import { createContext, useEffect, useState } from "react";



export let CartContext =createContext(null)


export default function CartContextProvider(props){


let [cartList,setCartList]=useState()
 function addToCart(id){
let headers ={
  token: localStorage.getItem("token")
}
return axios.post('https://ecommerce.routemisr.com/api/v1/cart',{productId:id},{headers}).then((response)=>response).catch((err)=>err)



}

async function getLoggedCart(id){
   let headers ={
      token :localStorage.getItem("token")
    
   }
   let {data}= await axios.get('https://ecommerce.routemisr.com/api/v1/cart',{headers})
   console.log(data)

   setCartList(data)
 }




 async function updateCart(productId,count){
   let body ={
      count:count
   }
   let headers ={
      token :localStorage.getItem("token")
   }
   let {data}=await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,body,{headers})
   console.log(data)
   setCartList(data)


}


 async function deleteCartItem(id){

   let headers ={
      token :localStorage.getItem("token")
   }
   let {data}=await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{headers})
   setCartList(data)
  
 }


 async function clearAllCartItems(id){

   let headers ={
      token :localStorage.getItem("token")
   }
   let response=await axios.delete('https://ecommerce.routemisr.com/api/v1/cart',{headers})
   if(response.status == 200){
      setCartList()

 
 
}
  
 }   





useEffect(()=>{
   getLoggedCart()

},[])
    return <CartContext.Provider value={{cartList,addToCart,getLoggedCart,updateCart,deleteCartItem,clearAllCartItems}}> 
{props.children}

    </CartContext.Provider>
}