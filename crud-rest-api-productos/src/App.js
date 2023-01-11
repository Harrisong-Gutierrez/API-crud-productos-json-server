import './App.css';
import CrudApi from './Components/CrudApi';
import Footer from './Views/Footer';
import Header from './Views/Header';

function App() {
  return (
    <div className="App">
    <Header/>
    <CrudApi/>
    <Footer/>
    </div>
  );
}

export default App;
