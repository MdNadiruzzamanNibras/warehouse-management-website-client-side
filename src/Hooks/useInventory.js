import { useEffect, useState } from "react"

const useInventory =()=>{
    const [inventories, setInvertories]= useState([])
    useEffect(()=>{
        fetch('https://sleepy-citadel-14654.herokuapp.com/inventory')
        .then(res=>res.json())
        .then(data=> setInvertories(data))
    },[])
    return [inventories, setInvertories]
}

export default useInventory;