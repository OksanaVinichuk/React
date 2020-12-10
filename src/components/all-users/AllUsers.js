import React, {Component} from 'react';
import {UserService} from "../services/UserService";
import User from "../user/User";
import FullUser from "../full-user/FullUser";
import {Route, Switch, withRouter} from "react-router-dom";

class AllUsers extends Component {
    state = {users: []}
    userService = new UserService()

    async componentDidMount() {
        let users = await this.userService.getAllUsers()
        this.setState({users})
    }

    render() {
        let {users, match:{url}} = this.state
        return (
            <div>
                {users.map(value => <User item={value} key={value.id}/>)}
                <Switch>
                    <Route path={url + '/:id'} render={() => {
                        let {match:{param:{id}}}=this.props
                        return <FullUser id={id}/>
                    }

                    }/>

                    }
                </Switch>
            </div>
        )
    }
}

export default withRouter(AllUsers);