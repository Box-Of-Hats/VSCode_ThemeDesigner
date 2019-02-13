import React from 'react'

const TitleBar = (props) => {
    return (
        <div className="titleBarText">
            <div className="icon icon-vscode"></div>{props.menuItems}
            <div>{props.title}</div>
            <div className="windowButtons">🗕 🗖 ✕</div>
        </div>)
}

export default TitleBar