import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Random from "./Random";
import NewTodo from "./NewTodo";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/new">
                            <NewTodo />
                        </Route>
                        <Route path="/random">
                            <Random />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
