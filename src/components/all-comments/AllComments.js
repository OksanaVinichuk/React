import React, {Component} from 'react';
import CommentService from "../services/CommentService";
import {Route, Switch, withRouter} from "react-router";
import FullComment from "../full-comment/FullComment";
import Comment from "../comment/Comment";

class AllComments extends Component {
    state = {comments: []}
    commentService = new CommentService()

    async componentDidMount() {
        const comments = await this.commentService.getAllComments()
        this.setState({comments})
    }

    render() {
        let {match:{url}}=this.props
        let {comments} = this.state
        return (
            <div>
                {comments.map(value => <Comment item={value} key={value.id}/>)    }
                <Switch>
                    <Route path={url + '/:id'} render={(props) => {
                        let {match:{params:{id}}}=props
                        return <FullComment id={id} key={id}/>
                    }}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(AllComments);