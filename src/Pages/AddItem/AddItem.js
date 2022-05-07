import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
   
  const { register, handleSubmit } = useForm();
  const onSubmit = data =>{ console.log(data)
        const url =`http://localhost:5000/inventory`;
        fetch(url, {
            method:'POST', 
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=> console.log(result))


}
   
  return (
    <div className='w-50 mx-auto'>
        <h3>Please Add Item</h3>
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Item Name' className='mb-2' type="text" {...register("name", { required: true, maxLength: 20 })} />
      <textarea placeholder='Item description' className='mb-2' type="text" {...register("description")} />
      <input placeholder='Quantity' className='mb-2' type="number" {...register("quantity")} />
      <input placeholder='Price' className='mb-2' type="number" {...register("price")} />
      <input placeholder='Image Url' className='mb-2' type="text" {...register("img")} />
      <input placeholder='Supplier Name' className='mb-2' type="text" {...register("supplier")} />
      <input type="submit" />
    </form>
    </div>
  );
}
    

export default AddItem;