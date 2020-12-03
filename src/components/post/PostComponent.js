import React, {Component} from 'react';
import './postStyle.css'

class PostComponent extends Component {
    render() {
        let {item,postHide} = this.props

        return (
            <div className = {postHide}>
                {item.id} - {item.title} - {item.body}
            </div>
        );
    }
}

export default PostComponent;