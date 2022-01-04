import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import EventDetails from "../components/EventDetails";
import HomePage from "../components/Home";
import logo from '../assets/images/logo.svg';
import './index.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/events/:eventSlug" element={<EventDetails />} />
        </Routes>
        <footer className="app__footer">
          <section className="main__footer-socials"></section>
        </footer>
      </div>
    </Router>
  );
}

export default App;
