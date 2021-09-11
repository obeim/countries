import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import NavBar from "./components/NavBar";
import CountryScreen from "./screens/CountryScreen";
function App() {
  return (
    <Router>
      <div className='text-primary'>
        <NavBar title='Where in the world?' />
        <div className='md:px-20 sm:px-10 px-4'>
          <Switch>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/:code' component={CountryScreen} />
          </Switch>
        </div>
        <div className='h-60'></div>
      </div>
    </Router>
  );
}

export default App;
