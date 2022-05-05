import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Inventories from './Pages/Home/Inventory/Inverntories/Inventories';
import ManageInventories from './Pages/Manage Inventory/Manage Inventories/ManageInventories';

function App() {
  return (
    <div>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/inventory' element={<Inventories></Inventories>}></Route>
       <Route path='/inventory/:inventoryId'></Route>
       <Route path='/manageitem' element={<ManageInventories></ManageInventories>}></Route>
     </Routes>
    </div>
  );
}

export default App;
