import React, {Component} from 'react';
import AllUsers from "./components/all-users/AllUsers";
import AllPosts from "./components/all-posts/AllPosts";
import './App.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllComments from "./components/all-comments/AllComments";

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <div>
                        <ul>
                            <li><Link to={"/users"}> users </Link></li>
                            <li> <Link to={"/posts"}> posts </Link></li>
                            <li> <Link to={"/comments"}> comments </Link></li>
                        </ul>
                    </div>
                    <hr/>
                    <div>
                        <Switch>
                            <Route path={"/users"} render={() => { return <AllUsers/> }}/>
                            <Route path={"/posts"} render={()=> {return <AllPosts/>}}/>
                            <Route path={"/comments"} render={()=> {return <AllComments/>}}/>
                        </Switch>
                    </div>
                    <hr/>
                </div>
            </Router>
        );
    }
}

export default App;