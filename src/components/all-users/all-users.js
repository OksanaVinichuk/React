import React, {Component} from 'react';
import User from "../user/user";

class AllUsers extends Component {

    state = {users:[],chosenUser: null}

    choseTheUser =(id)=>{
        this.setState({chosenUser: this.state.users.find(value => value.id===id)})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                this.setState({users: value})
            })

    }

    render() {
        let {users,chosenUser}=this.state
        return (
            <div>
                <h1>Users</h1>
                {
                    users.map(value =>(<User item={value} choseTheUser={this.choseTheUser} key={value.id}/> ))
                }
                {
                    chosenUser && (  <h1> {chosenUser.id}-{chosenUser.name}-{chosenUser.email}</h1>   )
                }

            </div>
        );
    }
}

export default AllUsers;