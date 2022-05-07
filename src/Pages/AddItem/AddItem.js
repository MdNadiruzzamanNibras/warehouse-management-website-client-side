import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItem = () => {
   const [user]=useAuthState(auth)
   const addInventory = event =>{
      const addmyItem = {
        name:event.target.name.value,
        email: user?.email,
        price:event.target.price.value,
        description:event.target.description.value,
        img:event.target.img.value,
        quantity:event.target.quantity.value
      }
     axios.post('http://localhost:5000/inventory',addmyItem)
     .then(response=>{
      const {data} = response
      if(data.insertedId){
        toast('Your item is add')
        event.target.reset()
      }
     })
   }
  
//   const onSubmit = data =>{ console.log(data)
//     const email = user?.email
//         const url =`http://localhost:5000/inventory`;
//         fetch(url, {
//             method:'POST', 
//             headers:{
//                 'content-type': 'application/json'
//             },
//             body:JSON.stringify(data)
//         })
//         .then(res=>res.json())
//         .then(result=> console.log(result))


// }
   
  return (
    <div className='w-50 mx-auto'>
        <h3>Please Add Item</h3>
        <form className='d-flex flex-column' onSubmit={addInventory}>
          <input type="text" name='name' placeholder='name' required />
          <input type="number" name='price' placeholder='price' required />
          <input type="text" name='email' value={user?.email} placeholder='name' required readOnly/>
          <input type="text" name='description' placeholder='description' required />
          <input type="text" name='img' placeholder='img' required />
          <input type="text" name='quantity' placeholder='Quantity' required />
          <input type="submit" value="add item" />
          
    </form>
    </div>
  );
}
    

export default AddItem;