import './index.css';
import SiteNavbar from './components/navbar';
import Footer from './components/footer';
import FooterNavbar from './components/footernavbar';
import ScrollToTop from "./components/scroll-to-top";
import 'bootstrap/dist/css/bootstrap.min.css';

/* Imported Site Pages */
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WorkBreak from './pages/WorkBreakPage';
import HomeBreak from './pages/HomeBreakPage';
import PlayBreak from './pages/PlayBreakPage';

import AuthorInfo from './pages/AuthorInfo' ;

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SiteNavbar />
        <div className="blog-title">
        </div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          {/* <Route path="/about" component={AboutPage} /> */}
          <Route path="/contact" component={ContactPage} />
          <Route path="/workbreak" component={WorkBreak} />
          <Route path="/homebreak" component={HomeBreak} />
          <Route path="/playbreak" component={PlayBreak} />
          <Route path="/about" render={(props) => (
            <AboutPage AuthorInfo={AuthorInfo} {...props}/>
          )} />
        </Switch>
      </header>
      <div className="footer">
        <i class="fab fa-facebook"></i>
        <Footer />
        <ScrollToTop className="scroll-to-top" />
        <FooterNavbar />
      </div>
    </div>
  );
}
export default App;


