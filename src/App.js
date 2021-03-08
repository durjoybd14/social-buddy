import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Showdetails from './components/Showdetails/Showdetails';


function App() {
  return (
    <div className="App">
      <Router >
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/post/:id">
            <Showdetails />
          </Route>

          <Route path="/*">
            <h3>No Match Found Error-404</h3>
          </Route>

        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
