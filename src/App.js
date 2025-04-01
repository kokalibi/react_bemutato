import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Latv from "./Components/LatvanyossagReact.jsx";
import Terkep from "./Components/TerkepReact.jsx";
import Gallery from "./Components/GaleriaReact.jsx";
import Event from "./Components/EventReact.jsx";
import Gasztr from "./Components/GasztronomiaReact.jsx";
import Tipp from "./Components/TippReact.jsx";
import Kapcs from "./Components/KapcsolatReact.jsx";

function Home() {
  return (
    <div className="container text-center my-5 p-4 bg-light shadow rounded">
      <h1 className="text-primary">Üdvözlünk Rondában!</h1>
      <p className="text-muted">
        Ronda egy festői város Spanyolország déli részén, Andalúziában. Híres lenyűgöző szurdokáról, az El Tajo-ról,
        amelyet a Guadalevín folyó vájt ki, és amelyet a monumentális Puente Nuevo híd köt össze. Ronda gazdag történelmi
        örökséggel rendelkezik, itt található Spanyolország egyik legrégebbi bikaviadal-arénája is. A város óvárosa arab
        és középkori hatásokkal büszkélkedik, míg a kilátók lélegzetelállító panorámát nyújtanak. Hemingway és Orson
        Welles is megihletődtek Ronda szépségétől, amely a mai napig népszerű turisztikai célpont.
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Kezdőlap</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/latv">Látványosságok</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/galeria">Galéria</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/terkep">Térkép</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/event">Programok és események</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gasztr">Gasztronómia</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tipp">Tippek és hasznos infók</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/kapcs">Kapcsolat</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        <div className="container my-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/latv" element={<Latv />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/terkep" element={<Terkep />} />
            <Route path="/event" element={<Event />} />
            <Route path="/gasztr" element={<Gasztr />} />
            <Route path="/tipp" element={<Tipp />} />
            <Route path="/kapcs" element={<Kapcs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
