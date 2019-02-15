import React from 'react';

const StatusBar = (props) => {
    return (<div class="statusBar">
        <span className="statusBar__section statusBar__section--left">
            master 
            <span role="img" aria-label="Rotating Arrows"><i class="material-icons">autorenew</i></span>
            <span role="img" aria-label="X in circle"><i class="material-icons">cancel</i></span>
            <span role="img" aria-label="Warning triangle"><i class="material-icons">warning</i></span>
            <span role="img" aria-label="Informational triangle"><i class="material-icons">error_outline</i></span>
            javascript | App.js
        </span>
        <span className="statusBar__section statusBar__section--right">
            Ln 209, Col 128 Spaces: 4 UTF-8 CRLF Javascript Prettier 
            <span role="img" aria-label="Smile"><i class="material-icons">tag_faces</i></span>
            <span role="img" aria-label="Bell"><i class="material-icons">notifications</i></span>
        </span>
    </div>);
}

export default StatusBar