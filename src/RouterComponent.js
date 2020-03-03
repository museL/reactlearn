import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import App from './App';
import TodoListDEmo from  './text5'
function RouterComponent() {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <App/>
                </Route>
                <Route  path="/TodoListDEmo/:id">
                    <TodoListDEmo/>
                </Route>
            </Switch>
        </Router>
    )
}

export default RouterComponent;