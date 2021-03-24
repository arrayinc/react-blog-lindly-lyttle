import './App.css';
import { CarouselPhotos } from './carousel';
/*import { PhotoOne } from './calm1.jpg';*/
import SiteNavbar from './navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <SiteNavbar />
        <h1>Break</h1>
        <h2>When life could use a pause btn</h2>
        <CarouselPhotos />
      </header>
      <SiteNavbar />
    </div>
  );
}

export default App;
