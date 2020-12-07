import React, {Component} from 'react';
import Post from "../post/Post";

class AllPosts extends Component {
    state = {posts:[],chosenPost:null}

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => this.setState({posts:value}))
    }
choseThePost=(id)=>{
        this.setState({chosenPost: this.state.posts.find (value => value.id===id )})
    }

    render() {
        let {posts,chosenPost}=this.state
        return (
            <div>
                <h1>Posts</h1>
                {
                   posts.map(value=> ( <Post item={value} key={value.id} choseThePost={this.choseThePost}/>))
                }
                {
                    chosenPost &&  <h2> {chosenPost.id}</h2>  &&  <h3> {chosenPost.title}</h3> &&
                    <h3> {chosenPost.body}</h3>

                }

            </div>
        );
    }
}

export default AllPosts;