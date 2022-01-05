import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import Carrusel from './component/carrusel/Carrusel';
import Cards from './component/cards';
import Footer from './component/footer';
import{BrowserRouter as Router,Routes,Route,link}from"react-router-dom";
import Blog from './component/blog/Blog';
import blog from './component/blog';

function App() {

  return (
    <div className="App">
      <Router>
      
        <Nav/>

        <Routes>
            <Route path="/Blog"element={<Blog/>}/>

            
        </Routes>
      
      
        <Footer/>
        
      
      </Router>
    </div>
  );
}

export default App;
