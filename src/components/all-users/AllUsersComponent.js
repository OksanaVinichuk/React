import React, {Component} from 'react';
import UserComponent from "../user/UserComponent";

class AllUsersComponent extends Component {
    state = {users: [], classState: 'show'}
    flag = false

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(usersFromApi => {
                this.setState({users: usersFromApi})
            })
    }

    hideUser = () => {
        if (this.flag) {
            this.setState({classState: 'show'})

        } else {
            this.setState({classState: 'hide'})
        }
        this.flag = !this.flag
    }

    render() {
        let {users, classState} = this.state

        return (
            <div>
                <h1 onClick={this.hideUser}> User </h1>
                {
                    users.map(value => (<UserComponent item={value} userHide={classState} key={value.id}/>))
                }

            </div>
        );
    }
}

export default AllUsersComponent;