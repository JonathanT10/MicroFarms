import React, { Component } from 'react';
import '../components/css/home.css'
import Dwig from '../images/comph.jpg'


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className="behind">
                <div className="main">
                    <h1>Micro Farms</h1>
                    <h2>Farming for everyone</h2>
                    <p className="opener">We should all be able to eat fresh food.</p>
                </div>
            </div>
        )
    }
}

export default Home;