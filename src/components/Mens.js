import React, {Component} from 'react';
import Man from "./Man";


class Mens extends Component {
    mens =[
        {id:1,name: 'andrey', age: 50, status: false},
        {id:2,name: 'viktor', age: 25, status: true},
        {id:3,name: 'nazar', age: 39, status: true},
        {id:4,name: 'sasha', age: 18, status: false},
        {id:5,name: 'yra', age: 41, status: false}
    ]
    render() {

        return (
            <div>
                { this.mens.map(value => {
                    return (  <Man man={value} key={value.id}/>  )
                    })
                }
            </div>
        );
    }
}

export default Mens;