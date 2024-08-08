import './App.css'
//Componentes importados
import NavbarApp from './components/Navbar';
import Footer from './components/Footer';

// Vistas importadas
import Home from './views/Home';

function App() {


  return (
    <div className='appGrid'>
      <NavbarApp></NavbarApp>
      <Home></Home>
      <Footer></Footer>
    </div>
  )
}

export default App
