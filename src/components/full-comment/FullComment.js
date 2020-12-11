import React, {Component} from 'react';
import CommentService from "../services/CommentService";
import {withRouter} from "react-router";

class FullComment extends Component {
    state = {comment: null}
    commentService = new CommentService()

    async componentDidMount() {
        const {id} = this.props
        const comment = await this.commentService.comment(id)
        this.setState({comment})
    }

    render() {
        let {comment} = this.state
        return (
            <div>
                {comment && <div>
                    <p> {comment.id} - {comment.name}</p>
                    <p> e-mail: {comment.email}</p>
                    <p> {comment.body}</p>
                           </div>
                }
            </div>
        );
    }
}

export default withRouter(FullComment);