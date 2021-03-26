import './App.css';
import SiteNavbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Imported Site Pages */
import HomePage from './pages/HomePage';

import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WorkBreak from './pages/WorkBreakPage';
import HomeBreak from './pages/HomeBreakPage';
import PlayBreak from './pages/PlayBreakPage';
import { PauseCircle } from 'react-bootstrap-icons'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SiteNavbar />
        <div className="blog-title">
          <h1>Break<PauseCircle /></h1>
          <h2>when life could use a pause btn</h2>
        </div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/workbreak" component={WorkBreak} />
          <Route path="/homebreak" component={HomeBreak} />
          <Route path="/playbreak" component={PlayBreak} />
        </Switch>

      </header>
      <SiteNavbar />
    </div>
  );
}
export default App;


