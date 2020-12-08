import React, {Component} from 'react';
import AllPosts from "./components/all-posts/AllPosts";

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
                <div>
                    <Link to={"/posts"}>    posts    </Link>
                </div>
                <hr/>
                <Switch>
                    <Route path={"/posts"}  render={()=>{return <AllPosts/>}}/>
                </Switch>




            </div>
            </Router>
        );
    }
}

export default App;