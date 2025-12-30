import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';


// Layout components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Page components
import Main from './components/Main/Main';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <div className="app">
      {/* Persistent layout */}
      <Header />

      {/* Application routes */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pratos" element={<Meals />} />
        <Route path="/sobre" element={<About />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
