import React, {Component} from 'react';
import './postStyle.css'

class PostComponent extends Component {
    state = { status: true }

    show = () => {
       this.setState({     status: !this.state.status    })
    }

    render() {
        let {item,postCard} = this.props

        return (
            <div>
                <p className={'one_post'}>
                    <button onClick={this.show}>
                        <b>{item.id}</b>
                    </button>
                    {
                      this.state.status &&
                      <div className={postCard} >
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