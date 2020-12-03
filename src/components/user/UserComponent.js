import React, {Component} from 'react';
import './UserStyle.css'

class UserComponent extends Component {
    render() {

        let {item,userHide} = this.props

        return (
            <div className = {userHide}>
                {item.id} - {item.name} - {item.username}
            </div>
        );
    }
}

export default UserComponent;