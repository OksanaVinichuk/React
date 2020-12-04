import React, {Component} from 'react';
import Woman from "./Woman";

class Women extends Component {
    women = [
        {id:1,name: 'anya', age: 29, status: true},
        {id:2,name: 'alina', age: 15, status: false},
        {id:3,name: 'ira', age: 31, status: true},
        {id:4,name: 'diana', age: 22, status: false},
        {id:5,name: 'yulia', age: 21, status: true}
    ]
    render() {
        return (
            <div>
                {
                    this.women.map(value => {
                        return (  <Woman woman={value} key={value.id}/> )
                    })
                }
            </div>
        );
    }
}

export default Women;