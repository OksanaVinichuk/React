import React, {Component} from 'react';

class User extends Component {
    render() {
        let {item,choseTheUser} = this.props

        return (
            <div>
               {item.id} - {item.name} - {<button onClick={()=>choseTheUser(item.id)}>  chose me </button>}
            </div>
        );
    }
}

export default User;