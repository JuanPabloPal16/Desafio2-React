import { getFetch1 } from "../../helpers/getFetch"
import { useEffect } from "react"
import { useState } from "react"
import ItemDetail from "../ItemDatail/ItemDetail"

const ItemDetailContainer = () => {
    const [producto, setproducto]=useState({})
  useEffect(() => {
    getFetch1()
    .then ((resp)=> setproducto(resp))
    .catch (err => console.log(err))
  
  },[])
  
  
  
    return <ItemDetail producto ={producto}/>
    
    
}

export default ItemDetailContainer