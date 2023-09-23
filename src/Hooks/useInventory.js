import { useEffect, useState } from "react"

const useInventory =()=>{
    const [inventories, setInvertories] = useState([])
    const [Loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        fetch('https://warehouse-management-0zqj.onrender.com/inventory')
        .then(res=>res.json())
            .then(data => {
                setInvertories(data)
                setLoading(false)
            })
    },[])
    return [inventories, setInvertories, Loading]
}

export default useInventory;