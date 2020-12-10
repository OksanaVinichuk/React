import React, {Component} from 'react';
import Link from "react-router-dom/modules/Link";
import {Link, withRouter} from "react-router-dom";


class Comment extends Component {
    render() {
        let {item,match:{url}}=this.props
        return (
            <div>
                {item.id} - {item.name} - <Link to={url+'/'+item.id}> full comment </Link>
            </div>
        );
    }
}

export default withRouter(Comment);