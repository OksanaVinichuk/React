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

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <div className={'colons'}>
                        <div className={'left'}>
                            <Link to={"/users"}> users </Link>
                        </div>
                        <div className={'right'}>
                            <Link to={"/posts"}> posts </Link>
                        </div>
                    </div>
                    <hr/>
                    <div className={'colons'}>
                        <Switch>
                            <Route path={"/users"} render={() => {
                                return <AllUsers/>
                            }}/>
                            <Route path={"/posts"} render={()=> {return <AllPosts/>}}/>
                        </Switch>
                    </div>

                </div>
            </Router>
        );
    }
}

export default App;