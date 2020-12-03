import React, {Component} from 'react';
import './CarStyle.css'
class CarComponent extends Component {
    render() {
        let {car,carStyle,carName,carLook,carTechNum} = this.props
        return (
            <div className={carStyle}>
                <h2 className={carName}> {car.producer} - {car.model} - {car.year} </h2>
                <h3 className={carLook}> {car.color} - {car.type}</h3>
                <p className={carTechNum}> {car.engine} - {car.volume} - {car.power}</p>

            </div>
        );
    }
}

export default CarComponent;