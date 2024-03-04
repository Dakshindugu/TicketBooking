import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home'
import Booking from './components/Booking';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
        <Route element={<Home/>} path='/Home'/>
        <Route element={<Booking/>} path='/book'/>
        <Route element={<Form/>} path='/Form'/>
       </Routes>
    </div>
  );
}

export default App;
