import { useEffect, useState } from "react"

const useInventory =()=>{
    const [inventories, setInvertories]= useState([])
    useEffect(()=>{
        fetch('https://warehouse-management-0zqj.onrender.com/inventory')
        .then(res=>res.json())
        .then(data=> setInvertories(data))
    },[])
    return [inventories, setInvertories]
}

export default useInventory;