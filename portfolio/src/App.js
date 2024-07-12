
import './App.css';
import Navbar from './componentes/section/Navbar';
import Presentantion from './componentes/section/Presetantion';
import Projects from './componentes/section/Projects';
import Me from './componentes/section/Me';
import Footer from './componentes/section/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentantion/>
      <Projects/>
      <Me/>
      <Footer/>
    </div>
  );
}

export default App;
