import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./TodosIndex";
import Random from "./Random";
import NewTodo from "./TodosNew";
import ShowTodo from "./TodosShow";

const Todos = () => {
    return (
        <Router>
            <div className="container-fluid">
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
                        <Route path="/:id">
                            <ShowTodo />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default Todos;
