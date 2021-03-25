import './App.css';
import { CarouselPhotos } from './carousel';

/*import { PhotoOne } from './calm1.jpg';*/
import SiteNavbar from './navbar';

import { CardsForBlogs } from './cards';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">


        <SiteNavbar />
        <h1>Break</h1>
        <h2>When life could use a pause btn</h2>
        <CarouselPhotos />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Emily and Abby</h1>
        
        <CardsForBlogs />

      </header>
      <SiteNavbar />
    </div>
  );
}
export default App;


