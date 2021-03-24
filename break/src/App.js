import './App.css';
import { CarouselPhotos } from './carousel';
import { CardsForBlogs } from './cards';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Emily and Abby</h1>
        <CarouselPhotos />
        <CardsForBlogs />
      </header>
    </div>
  );
}
export default App;


