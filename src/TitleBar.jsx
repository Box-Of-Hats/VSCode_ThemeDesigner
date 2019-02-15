import React from 'react'

const TitleBar = (props) => {
    return (
        <div className="titleBarText">
            <div className="icon icon-vscode"></div>
            <div>{props.menuItems}</div>
            <div>{props.title}</div>
            <div className="windowButtons">
                <i class="material-icons">minimize</i>
                <i class="material-icons">web_asset</i>
                <i class="material-icons">close</i>
            </div>
        </div>)
}

export default TitleBar