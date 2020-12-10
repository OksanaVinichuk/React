import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import './UserStyle.css'

class User extends Component {

    render() {
        let {match:{url},item}=this.props
        return (
            <div className={'fon'} >
                <div className={'userStyle'}>
                    <p> {item.id} </p>
                    <p>  {item.name} </p>
                <p><Link to={`${url}/${item.id}`}> <button className={'btn'}> info  </button> </Link></p>
                </div>
            </div>
        );
    }
}

export default withRouter(User);