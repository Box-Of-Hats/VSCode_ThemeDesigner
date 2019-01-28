import React, { PureComponent } from 'react'

const TitleBarText = ({ props }) => {
    return (
        <div className="titleBarText">
            <div className="icon icon-vscode"></div>
            File Edit Selection View Go Debug Terminal Help
            <div>App,js - VSCode_ThemeGenerator - Visual Studio Code</div>
            <div className="windowButtons">🗕 🗖 ✕</div>
        </div>)
}

export default TitleBarText