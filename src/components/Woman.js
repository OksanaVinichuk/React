import React, {Component} from 'react';

class Woman extends Component {
    render() {
        let {woman,womanLook}=this.props
        return (
            <div className={womanLook}>
                <p>{woman.name}-{woman.age}-{woman.state.toString()}</p>
            </div>
        );
    }
}

export default Woman;