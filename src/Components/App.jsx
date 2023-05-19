import '../styles/App.css';

import"bootstrap/dist/css/bootstrap.min.css";

import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Carousel from './Carousel';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <Header/>
      <Nav />
      <Body></Body>
      <Footer/>
    </div>
  );
}

export default App;
