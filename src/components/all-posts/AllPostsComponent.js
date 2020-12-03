import React, {Component} from 'react';
import PostComponent from "../post/PostComponent";

import './PostsStyle.css'

class AllPostsComponent extends Component {

    state={posts:[],classState:'show'}
    flag=false

    componentDidMount()
        {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((value) => value.json())
                .then(postsFromAPI=>{this.setState(
                    {posts: postsFromAPI}
                )}
                )

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

                <p>
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