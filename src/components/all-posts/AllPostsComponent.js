import React, {Component} from 'react';
import PostComponent from "../post/PostComponent";

import './PostsStyle.css'
import {AllPostServices} from "../../services/AllPostServices";

class AllPostsComponent extends Component {

    postService = new AllPostServices()
    state={posts:[],classState:'show'}
    flag=false;

    componentDidMount()  {
        this.postService.getAllPosts().then( value =>  this.setState({posts:value}))

        }
    hidePost = () => {
        if (this.flag) {
            this.setState({classState: 'show'})

        } else {
            this.setState({classState: 'hide'})
        }
        this.flag = !this.flag
    }

    render() {
        let {posts, classState} = this.state

        return (
            <div className={'all'}>
                <h1 className={'border'} onClick={this.hidePost}> Posts </h1>

                <p >
                    {
                    posts.map((value, index) => (
                        <PostComponent item={value}
                                       index={index}
                                       postHide={classState}
                                       postCard={classState}
                                       key={value.id}/>)
                    )
                }
                </p>
            </div>
        );
    }
}

export default AllPostsComponent;