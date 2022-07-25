import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Header from './Components/Header/Header';
import ManageInventoryItem from './pages/ManageInventoryItem/ManageInventoryItem';
import ManageInventory from './pages/MangeInventory/ManageInventory';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/manageInventory" element={<ManageInventory />} />
        <Route path="/manageInventoryItem/:id" element={<ManageInventoryItem />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
