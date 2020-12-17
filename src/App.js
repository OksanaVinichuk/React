import React, {Component} from 'react';

class App extends Component {
    state = {inputValue: '', post: null}

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(value => this.setState({post:value.id}))
}
    render() {
        return (
            <div>
                <form action={'/posts'} >
                    <input type='number' onInput={this.commitState}  value={this.state.inputValue}/>
                    <button> show </button>
                </form>
                <form onSubmit={this.showPost}>
                    <input/>
                </form>
            </div>
        );
    }

    commitState =(e)=>{
                e.preventDefault();
        this.setState({inputValue: e.target.value})
        
    }
    showPost = (e)=> {
                e.preventDefault();
                if (e.target.value===post.value)
                <Post/>
    }

}

export default App;