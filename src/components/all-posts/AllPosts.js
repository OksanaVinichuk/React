import React, {Component} from 'react';
import {PostService} from "../services/PostService";
import Post from "../post/Post";
import FullPost from "../full-post/FullPost";
import {Route, Switch, withRouter} from "react-router-dom";

class AllPosts extends Component {
    state = {posts: []}
    postService = new PostService()

    async componentDidMount() {
        let posts = await this.postService.getAllPosts()
        this.setState({posts})
    }
    render() {
        let {match:{url}}=this.props
        let {posts} = this.state
        return (
            <div>
                {posts.map(value => <Post item={value} key={value.id}/>)}

                <div>
                    <Switch>
                        <Route path={url+'/:id'} render={(props) => {
                            let {match:{param:{id}}}=props
                             return <FullPost id={id} key={id}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default withRouter(AllPosts);