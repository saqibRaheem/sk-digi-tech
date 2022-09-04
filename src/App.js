import { Route, Routes} from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Header from './components/common/heading/Header';
import Home from './components/home/hero/Home';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About />} />
    </Routes>
    </>
  );
}

export default App;
