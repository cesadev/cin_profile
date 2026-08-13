import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Sobre from "./pages/Sobre"

function App() {
  return (
    <BrowserRouter>
      <nav>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
          </ul>
      </nav>
      <hr />
      <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/portfolio' element={<Portfolio />} />
          </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App