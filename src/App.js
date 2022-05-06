import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Inventories from './Pages/Home/Inventory/Inverntories/Inventories';
import SingleInventory from './Pages/Home/Inventory/SingleInventory/SingleInventory';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import ManageInventories from './Pages/Manage Inventory/Manage Inventories/ManageInventories';
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
     </Routes>
    </div>
  );
}

export default App;
