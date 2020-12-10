import React, {Component} from 'react';
import {PostService} from "../services/PostService";

class FullPost extends Component {
    state={post:null}
    postService=new PostService()
    async componentDidMount() {
        // await this.postService.post(id)
        let {id}=this.props
        console.log(id)

    }

    render() {
        let {item}=this.props
        let {post}=this.state
        return (
            <div>
                {post &&
                <div>{item.id}-{item.title} - body: {item.body}</div>
                }
            </div>
        );
    }
}

export default FullPost;