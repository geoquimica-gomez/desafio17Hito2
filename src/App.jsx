import './App.css'
import { Routes, Route } from 'react-router-dom';
//Componentes importados
import NavbarApp from './components/Navbar';
import Footer from './components/Footer';

// Vistas importadas
import Home from './views/Home';
import RegisterPage from './views/RegisterPage';
import LoginPage from './views/LoginPage';

function App() {
  console.log('App render');
  return (
    <div className='appGrid'>
      <header>
        <NavbarApp />
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/register"
            element={<RegisterPage />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
