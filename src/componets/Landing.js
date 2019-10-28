import React, { Component } from 'react'

class Landing extends Component {

     render() {
        return (
            <div>
            <div className="nav-bar">
                <div>
                    <button onClick>About</button>
                </div>
                <div>
                    <button>Projects</button>   
                </div>
                <div>
                    <button>Resume</button>
                </div>
                <div>
                    <button>Contact</button>    
                </div>
            </div>
            <div className="Content">
                {/* I want this section to render based on which button is clicked */}
            </div>
            </div>
        )
    }
}

export default Landing
