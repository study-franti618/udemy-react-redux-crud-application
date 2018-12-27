import React, {Component} from 'react';

// class App extends Component {
//   render() {
//     return (
//         <React.Fragment>
//         <input type="text" onChange={()=>{console.log('hiiiii')}} />
//         </React.Fragment>
//     );
//   }
// }

const App = () => {
    return (
        <Counter/>
    )
}

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {count: 0}
    }

    handlePlusButton = () => {
        this.setState({count: this.state.count + 1})
    }
    handleMinusButton = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <React.Fragment>
            <div>count : {this.state.count}</div>
            <button onClick={this.handlePlusButton}>ADD</button>
            <button onClick={this.handleMinusButton}>TAKE</button>
        </React.Fragment>
        )
    }
}

export default App;
