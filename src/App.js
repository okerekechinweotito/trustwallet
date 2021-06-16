import "./App.css";
import Home from "./components/home/home.jsx";
import Restore from "./components/restore/restore.jsx";
import ScrollToTop from "./scrollToTop";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/wallet-restore" component={Restore} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
