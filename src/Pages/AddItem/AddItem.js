import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItem = () => {
   const [user]=useAuthState(auth)
   const addInventory = evant =>{
      const addmyItem = {
        email: user?.email
      }
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
        <form className='d-flex flex-column' >
          <input type="text" name='name' placeholder='name' required />
          <input type="text" name='email' value={user?.email} placeholder='name' required readOnly/>
          <input type="text" name='description' placeholder='description' required />
          <input type="text" name='img' placeholder='description' required />
          <input type="text" name='description' placeholder='description' required />
          
    </form>
    </div>
  );
}
    

export default AddItem;