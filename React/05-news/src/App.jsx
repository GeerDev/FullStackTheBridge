import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import ListNews from './components/ListNews/ListNews'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './App.css';

function App() {
  return (
    <GlobalProvider>
    <Router>
    <div className='app'>
    <Header />
    <div className="container">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/list" element={<ListNews />} />   
      </Routes>
    </div>
    <Footer />
    </div>
    </Router>
    </GlobalProvider>
  );
}

export default App;
