import React, {Component} from 'react';
import PostComponent from "../post/PostComponent";

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
            <div>
                <h1 onClick={this.hidePost}> Post </h1>
                {
                    posts.map(value => (<PostComponent item={value} postHide={classState} key={value.id}/>))
                }

            </div>
        );
    }
}

export default AllPostsComponent;