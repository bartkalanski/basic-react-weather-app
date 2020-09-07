import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
    // instead of constructor function -> babel converts it into a constructor
    state = { lat: null, errorMessage: '' };

    // hook that gets invoked right after a React component has been mounted aka after the first render() lifecycle.
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message }));
    }

    renderContent(){
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Spinner message="Please accept location request"/>
    }
    // React says we have to define render 
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
        
    }
}

ReactDOM.render(<App /> , document.querySelector('#root'))