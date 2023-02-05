import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header/>
        <Showcase/>
        <Footer/>
      
      </div>
    </div>
  );
}

export default App;
