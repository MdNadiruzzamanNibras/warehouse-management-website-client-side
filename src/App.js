import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Inventories from './Pages/Home/Inventory/Inverntories/Inventories';
import Login from './Pages/Login/Login/Login';
import ManageInventories from './Pages/Manage Inventory/Manage Inventories/ManageInventories';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/inventory' element={<Inventories></Inventories>}></Route>
       <Route path='/inventory/:inventoryId'></Route>
       <Route path='/login' element={<Login></Login>} ></Route>
       <Route path='/manageitem' element={<ManageInventories></ManageInventories>}></Route>
     </Routes>
    </div>
  );
}

export default App;
