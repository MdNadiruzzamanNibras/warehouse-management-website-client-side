import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Pages/AddItem/AddItem';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Inventories from './Pages/Home/Inventory/Inverntories/Inventories';
import SingleInventory from './Pages/Home/Inventory/SingleInventory/SingleInventory';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import ManageInventories from './Pages/Manage Inventory/Manage Inventories/ManageInventories';
import MyItem from './Pages/MyItem/MyItem';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/inventory' element={<Inventories></Inventories>}></Route>
       <Route path='/inventory/:inventoryId'element={<SingleInventory></SingleInventory>}></Route>
       <Route path='/login' element={<Login></Login>} ></Route>
       <Route path='/registration' element={<Registration></Registration>}></Route>
       <Route path='/manageitem' element={<ManageInventories></ManageInventories>}></Route>
       <Route path='/addItem' element={<AddItem></AddItem>}></Route>
       <Route path='/myItem' element={<MyItem></MyItem>}></Route>
       <Route path='/blog' element={<Blogs></Blogs>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
