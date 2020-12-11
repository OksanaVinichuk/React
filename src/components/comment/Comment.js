import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Comment extends Component {
    render() {
        let {item, match: {url}} = this.props
        return (
            <div>
                <p>{item.id} - {item.name} </p>
                <p><Link to={`${url}/${item.id}`}>
                    <button> full comment</button>
                </Link>
                </p>
            </div>
        );
    }
}

export default withRouter(Comment);