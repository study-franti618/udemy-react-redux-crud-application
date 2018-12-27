import React from 'react';
import PropTypes from 'prop-types'

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
    const profiles = [
        {name: "Taro", age: 10},
        {name: "Jiro", age: 50},
        {name: "Saro", age: 60},
        {name: "1", age: 40},
    ]
    return (
        <div>
        {
            profiles.map((profile,index) => {
                return <User name={profile.name} age={profile.age} key={index}/>
            })
        }
        </div>

    )
}

const User = (props) => {
    return <div>Hi I am {props.name}! and {props.age} yeas old</div>
}

User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}

export default App;
