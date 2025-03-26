import{BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import './App.css';
import Latv from "./components/LatvanyossagReact.jsx"
import Terkep from "./components/TerkepReact.jsx"
import Gallery from "./components/GaleriaReact.jsx"
import Event from "./components/EventReact.jsx"
import Gasztr from "./components/GasztronomiaReact.jsx"
import Tipp from "./components/TippReact.jsx"
import Kapcs from "./components/KapcsolatReact.jsx"
import "bootstrap/dist/css/bootstrap.min.css";

function Home(){
  return (
    <></>
  )
}

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

        <div>
            Ronda egy festői város Spanyolország déli részén, Andalúziában. Híres lenyűgöző szurdokáról, az El Tajo-ról, amelyet a Guadalevín folyó vájt ki, és amelyet a monumentális Puente Nuevo híd köt össze. Ronda gazdag történelmi örökséggel rendelkezik, itt található Spanyolország egyik legrégebbi bikaviadal-arénája is. A város óvárosa arab és középkori hatásokkal büszkélkedik, míg a kilátók lélegzetelállító panorámát nyújtanak. Hemingway és Orson Welles is megihletődtek Ronda szépségétől, amely a mai napig népszerű turisztikai célpont.
        </div>
        <img src="" alt="" />
    </div>
  );
}

export default App;
