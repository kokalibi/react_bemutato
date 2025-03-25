import{BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import './App.css';
import Latv from "./Components/LatvanyossagReact.jsx"
import Terkep from "./Components/TerkepReact.jsx"
import Gallery from "./Components/GaleriaReact.jsx"
import Event from "./Components/EventReact.jsx"
import Gasztr from "./Components/GasztronomiaReact.jsx"
import Tipp from "./Components/TippReact.jsx"
import Kapcs from "./Components/KapcsolatReact.jsx"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
      <div>
        <Router>
          <nav className='w-100 bg-dark p-3 text-center'>
            <Link to="/" id='linkecske'>Nyitolap</Link>
            <Link to="/latv" id='linkecske'>Látványosságok</Link>
            <Link to="/galeria" id='linkecske'>Galeria</Link>
            <Link to="/terkep" id='linkecske'>Térkép</Link>
            <Link to="/event" id='linkecske'>Programok és események</Link>
            <Link to="/gasztr" id='linkecske'>Gasztronómia</Link>
            <Link to="/tipp" id='linkecske'>Tippek és hasznos infók</Link>
            <Link to="/kapcs" id='linkecske'>Kapcsolat</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/latv" element={<Latv/>}/>
            <Route path="/galeria" element={<Gallery/>}/>
            <Route path="/terkep" element={<Terkep/>}/>
            <Route path="/event" element={<Event/>}/>
            <Route path="/gasztr" element={<Gasztr/>}/>
            <Route path="/tipp" element={<Tipp/>}/>
            <Route path="/kapcs" element={<Kapcs/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
