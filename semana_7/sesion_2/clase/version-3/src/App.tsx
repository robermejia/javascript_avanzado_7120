import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { Outlet } from 'react-router-dom';
import Services from './pages/Services';


/*
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
<a href="https://vite.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
*/

const App = () => { 
  return (
    <>
      <HeaderComponent/>
      <main className='container pt-3'>
        <Outlet />
      </main>
      <FooterComponent />
    </>
  );
}

export default App
