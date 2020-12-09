import React, {Component} from 'react';
import {PostService} from "../services/PostService";
import Post from "../post/Post";
import './AllPostsStyle.css'
import {Route, Switch} from "react-router-dom";

class AllPosts extends Component {
    state = {posts: []}
    postService = new PostService()

    async componentDidMount() {
        let posts = await this.postService.getAllPosts()
        this.setState({posts})
    }

    render() {
        let {posts} = this.state
        return (
            <div>
                {posts.map(value => <Post item={value} key={value.id}/>)}

                <div className={'nest'}>
                    <Switch>
                        <Route path={'/post/:id'} render={(props) => {
                            console.log(props);
                            return 'fbhsakjgdf';
                        }}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default AllPosts;