import React from 'react';

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
        <div>
            <Cat/>
            <Cat/>
            <Cat/>
            <Cat/>
        </div>

    )
}

const Cat = () => {
    return <div>meow</div>
}

export default App;
