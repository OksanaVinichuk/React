import React, {Component} from 'react';
import {UserService} from "../services/UserService";

class FullUser extends Component {
    state = {user:null}
    userService = new UserService()
    async componentDidMount() {
        // await this.userService.user(id)
        let {id}=this.props
        console.log (id)
            }

    render() {
        let {item}=this.props
        return (
            <div>
                {item.id}-{item.name}-{item.username}-{item.email}

            </div>
        );
    }
}

export default FullUser;