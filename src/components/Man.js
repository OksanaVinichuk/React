import React, {Component} from 'react';

class Man extends Component {
    render() {
        let {man,manLook}=this.props
        return (
            <div className={manLook}>
                <p>
                    {man.name}-{man.age}-{man.status.toString()}
                </p>
            </div>
        );
    }
}

export default Man;