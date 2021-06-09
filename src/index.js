import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         //first line shows the location
//         (position) => console.log(position),
//         // second line shows if any error occurs
//         (err) => console.log(err)
//      );
//     return (
//         //we can't use the position here in the div.
//         //it's not possible in function based system.
//         //we have to use class for this
//         <div>Hi there!</div>
//     )
// }


class App extends React.Component {
    //right now i'm considering the state method as a javascript class as i've learned
    constructor (props) {
        super(props);
         
        //! this is the only time we do direct assignment to this.state
        this.state = {lat: null};
        //for now we don't know whats the number of lattitude
        //that's why we've to use null initially
        //if we use 40 replacing null . the value will show 40
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // to update state we have to call setState!!!!
                this.setState({lat: position.coords.latitude})
                //in console look at object position
                // we are setting position.coords.latitude to the lat:
                //instead of null
                //!we did not!!!!!
                //!this.state.lat = position.coords.latitude
            },
            (err) => console.log(err)
        );
    }
    render (){
        return <div>Latitude: {this.state.lat}</div>
    }
}


ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)