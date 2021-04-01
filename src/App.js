import './index.css';
import SiteNavbar from './components/navbar';
import Footer from './components/footer';
import FooterNavbar from './components/footernavbar';
import ScrollToTop from "./components/scroll-to-top";
import 'bootstrap/dist/css/bootstrap.min.css';

/* Imported Site Pages */
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AuthorInfo from './pages/AuthorInfo';
import ContactPage from './pages/ContactPage';
// import WorkBreak from './pages/WorkBreakPage';
// import HomeBreak from './pages/HomeBreakPage';
// import PlayBreak from './pages/PlayBreakPage';
import BlogPageInfo from './blogdata/BlogPageInfo';

/* Imported Blog Pages */
import { Switch, Route } from 'react-router-dom';
import WorkBreakBlogs from './pages/workbreak/WorkBreakBlogs';
import HomeBreakBlogs from './pages/homebreak/HomeBreakBlogs';
import PlayBreakBlogs from './pages/playbreak/PlayBreakBlogs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SiteNavbar />
        <div className="blog-title">
        </div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/contact" component={ContactPage} />
          <Route path="/homebreak/blogs" render={(props) => (
            <HomeBreakBlogs BlogPageInfo={BlogPageInfo} {...props} />
             )}/>
          <Route path="/playbreak/blogs" render={(props) => (
            <PlayBreakBlogs BlogPageInfo={BlogPageInfo} {...props} />
             )}/>
          <Route path="/workbreak/blogs" render={(props) => (
            <WorkBreakBlogs BlogPageInfo={BlogPageInfo} {...props} />
             )}/>
          <Route path="/about" render={(props) => (
            <AboutPage AuthorInfo={AuthorInfo} {...props} />
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


