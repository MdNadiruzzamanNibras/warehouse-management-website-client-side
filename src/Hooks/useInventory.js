import { useEffect, useState } from "react"

const useInventory =()=>{
    const [inventories, setInvertories]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/inventory')
        .then(res=>res.json())
        .then(data=> setInvertories(data))
    },[])
    return [inventories, setInvertories]
}

export default useInventory;