import React, {Component} from 'react';
import './postStyle.css'

class PostComponent extends Component {
    state = {
        status: true
    }

    show = () => {
       this.setState({
           status: !this.state.status
       })
    }

    getColor = () => {
       const {index} = this.props;
       const hash = index * 1000 + 100080;
       return `#${hash}`
    }

    render() {
        let {item,postCard} = this.props

        return (
            <div style={{background: this.getColor()}}>
                <p>
                    <p onClick={this.show}>
                        <b>{item.id}</b>
                    </p>
                    {
                      this.state.status && <div className={postCard} >
                          <p>{item.title}</p>
                          <p>{item.body} </p>
                      </div>
                    }
                </p>
            </div>
        );
    }
}

export default PostComponent;