import './App.css';
import { CarouselPhotos } from './carousel';
import SiteNavbar from './navbar';
import { CardsForBlogs } from './cards';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Imported Site Pages */
// import About from './aboutpage';
import HomePage from './homepage';
import AboutPage from './aboutpage';
import ContactPage from './contactpage';

import WorkBreak from './workbreakpage';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SiteNavbar />
        <div className="blog-title">
          <h1>Break</h1>
          <h2>when life could use a pause btn</h2>
        </div>
        <CarouselPhotos />
        <CardsForBlogs />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/workbreak" component={WorkBreak} />
        </Switch>

      </header>
      <SiteNavbar />
    </div>
  );
}
export default App;


