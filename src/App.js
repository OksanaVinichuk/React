import React, {Component} from 'react';
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import MarriedCouples from "./components/MarriedCouples";
import './components/MarrigeStyle.css'

class App extends Component {
    render() {
        let {columns,mensColumn,womensColumn,marrigeColumn}=this.props
        return (
            <div className={columns}>
                <div > <Mens className={mensColumn}/>              </div>
                <div > <Womens className={womensColumn}/>         </div>
                <div > <MarriedCouples className={marrigeColumn}/> </div>
            </div>
        );
    }
}

export default App;