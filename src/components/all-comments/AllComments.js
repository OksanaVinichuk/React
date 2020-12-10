import React, {Component} from 'react';
import CommentService from "../services/CommentService";
import {Route, Switch, withRouter} from "react-router-dom";
import FullComment from "../full-comment/FullComment";

class AllComments extends Component {
    state = {comments: []}
    commentService = new CommentService()

    async componentDidMount() {
        let comments = await this.commentService.comments()
        this.setState({comments})
    }

    render() {
        let {comments, match: {url}} = this.state
        return (
            <div>
                { comments.map(value => <Component item={value} key={value.id}/>)    }
                <Switch>
                    <Route path={url + '/:id'} render={(props) => {
                        let {match:{params:{id}}}=props
                        return <FullComment {...props} key={id}/>
                    }}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(AllComments);