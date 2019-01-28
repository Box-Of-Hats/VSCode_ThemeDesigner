import React, { PureComponent } from 'react'

const ContextMenuItem = (props) => {
    return (
        <div className="contextMenuItem">
            <span style={{ float: "left" }}>{props.text}</span><span style={{ float: "right" }}>{props.shortcut}</span>
        </div>
    );
}

export default ContextMenuItem