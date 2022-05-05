import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Inventories from './Pages/Home/Inventory/Inverntories/Inventories';

function App() {
  return (
    <div>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/inventory' element={<Inventories></Inventories>}></Route>
     </Routes>
    </div>
  );
}

export default App;
