import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodosIndex from "./TodosIndex";
import Random from "./Random";
import NewTodo from "./TodosNew";
import ShowTodo from "./TodosShow";
import TodosEdit from "./TodosEdit";
import Error from "./Error";

const Todos = () => {
    // todo RESTful routing
    return (
        <Router>
            <div className="">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route path="/" exact>
                            <TodosIndex />
                        </Route>
                        <Route path="/new">
                            <NewTodo />
                        </Route>
                        <Route path="/random">
                            <Random />
                        </Route>
                        <Route path="/:id" exact>
                            <ShowTodo />
                        </Route>
                        <Route path="/:id/edit" exact>
                            <TodosEdit />
                        </Route>
                        <Route>
                            <Error path="*" error={"Page Not Found"} />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default Todos;
