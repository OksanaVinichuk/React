import React, {Component} from 'react';
import CommentService from "../services/CommentService";
import {Route, Switch} from "react-router-dom";

class AllComments extends Component {
    state = {comments: []}
    commentService = new CommentService()

    async componentDidMount() {
        let comments = await this.commentService.comments()
        this.setState({comments})
    }

    render() {
        let {comments} = this.state
        return (

            <div>
                {
                    comments.map(value => <Component item={value} key={value.id}/>)
                }
                <Switch>
                    <Route path={url+'/:id'} render={()=>{
                    return 'COMMENT' }}/>
                </Switch>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(AllComments);