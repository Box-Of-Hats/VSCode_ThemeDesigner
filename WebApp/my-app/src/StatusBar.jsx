import React from 'react';

const StatusBar = (props) => {
    return (<div >
        <span style={{ float: "left" }}>
            master 
            <span role="img" aria-label="Rotating Arrows">🗘 </span>
            <span role="img" aria-label="X in circle">ⓧ </span>
            <span role="img" aria-label="Warning triangle">⚠ </span>
            <span role="img" aria-label="Informational triangle">🛈 </span>
            javascript | 
            <span role="img" aria-label="Squares">🙿 </span>
            App.js
        </span>
        <span style={{ float: "right" }}>
            Ln 209, Col 128 Spaces: 4 UTF-8 CRLF Javascript Prettier 
            <span role="img" aria-label="Smile">😊 </span>
            <span role="img" aria-label="Bell">🔔 </span>
        </span>
    </div>);
}

export default StatusBar