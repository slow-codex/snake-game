import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
    render() { 
        const cssstyle={
            backgroundColor:"white",
            fontFamily: "Arial"
        };
        return ( 
            <div>
                <p style={cssstyle}>@2021 Made by slow-codex :)</p>
            </div>
        );
    }
}
 
export default Footer;