import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header';
import Footer from './components/Footer';
import Contenedor from './components/Contenedor';

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
      <Header/>
      <Contenedor/>
      <Footer/>
    </>
  );
}

export default App
