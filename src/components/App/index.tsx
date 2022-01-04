import logo from '../../assets/images/logo.svg';
import './index.scss';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
      </header>
      <main></main>
      <footer className="app__footer">
        <section className="main__footer-socials"></section>
      </footer>
    </div>
  );
}

export default App;
