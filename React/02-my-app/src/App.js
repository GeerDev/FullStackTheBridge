import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='container'>
      <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
