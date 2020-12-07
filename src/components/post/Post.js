import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {item,choseThePost}=this.props
        return (
            <div>
                {item.id} - {item.title}  {<button onClick={()=>choseThePost(item.id)}> chose me </button>}
            </div>
        );
    }
}

export default Post;