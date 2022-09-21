// import logo from './logo.svg';
// import './App.css';
// import Sidebar from '../src/components/Sidebar'
import Home from '../src/components/Home';
import About from '../src/components/About';
import Products from '../src/components/Products';
import Sidebar from '../src/components/Sidebar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
       <Routes>
            <Route path='/' element={<Sidebar/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Products' element={<Products/>}/>
        </Routes>
      {/* <Sidebar/> */}
    </div>
  );
}

export default App;
