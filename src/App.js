import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Header from './Components/Header/Header';
import ManageInventoryItem from './pages/ManageInventoryItem/ManageInventoryItem';
import ManageInventory from './pages/MangeInventory/ManageInventory';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/manageInventory" element={<RequireAuth><ManageInventory /></RequireAuth> } />
        <Route path="/manageInventoryItem/:id" element={<RequireAuth><ManageInventoryItem /></RequireAuth> } />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
