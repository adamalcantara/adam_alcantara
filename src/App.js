import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import pages
import LandingPage from './Pages/LandingPage/LandingPage';

function App() {
  return (
    <Router>
        <div className="App">
          <Route exact path = "/" component={LandingPage} />
        </div>
    </Router>
  );
}

export default App;
