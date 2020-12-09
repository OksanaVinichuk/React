import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Post extends Component {

    render() {
        let {match:{url},item}=this.props
        console.log(url)
        return (
            <div>
                <p>{item.id} - {item.title} </p>
                <p>body: {item.body}</p>
                <p><Link to={`${url}/ ${item.id}`}>
                    <button> info </button></Link>
                </p>
            </div>
        );
    }
}

export default withRouter(Post);