import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Albumdetails from "./components/Albumdetails/Albumdetails";
import Search from "./components/Search/Search";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/home">
          <Homepage />
        </Route>
        <Route path="/albums/:id">
          <Albumdetails />
        </Route>
        <Route path="/search/:name">
          <Search />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
