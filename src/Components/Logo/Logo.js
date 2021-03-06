import React from "react";
import Tilt from 'react-tilt'
import "./Logo.css";

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 250, width: 250 }} >
            <div className="Tilt-inner pa3"> 
                <img style={{paddingTop: "5px"}}src="https://img.icons8.com/ios/200/000000/virus-free.png" alt="Logo"/>
            </div>
            </Tilt>
        </div>
    )
}

export default Logo;