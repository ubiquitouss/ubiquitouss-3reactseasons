import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonsDisplay'
import Spinner from './Spinner';

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

//!after the updated state method the constructor has only one purpose
//! to initiate the initial data
class App extends React.Component {
    //right now i'm considering the state method as a javascript class as i've learned
    // constructor (props) {
    //     super(props);
         
    //     //! this is the only time we do direct assignment to this.state
    //     this.state = {lat: null,errorMessage: ''};
    //     //for now we don't know whats the number of lattitude
    //     //that's why we've to use null initially
    //     //if we use 40 replacing null . the value will show 40
    //      //?this is normal method
    //     // window.navigator.geolocation.getCurrentPosition(
    //     //     (position) => {
    //     //         // to update state we have to call setState!!!!
    //     //         this.setState({lat: position.coords.latitude})
    //     //         //in console look at object position
    //     //         // we are setting position.coords.latitude to the lat:
    //     //         //instead of null
    //     //         //!we did not!!!!!
    //     //         //!this.state.lat = position.coords.latitude
    //     //     },
    //     //     (err) => {
    //     //         console.log(err)//check this on the console to know err.message
    //     //         this.setState({errorMessage: err.message});
    //     //     }
    //     // );

    // }
    //!this line works just like the constructor without the constructor
    //! just like a class just think it like a class system
    //! a variable outside class is accessable by everything
    state = {lat: null, errorMessage:''}

    componentDidMount() {
       //?updated method
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
    }


    render (){
           if (this.state.errorMessage && !this.state.lat) {
               return <div> Error: {this.state.errorMessage}</div>
            }
           if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
            }
            return <Spinner />
    }
}




ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)