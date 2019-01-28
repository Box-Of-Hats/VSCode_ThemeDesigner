import React, { PureComponent } from 'react'
const icon0 = "💢";
const icon1 = "💖";
const icon2 = "👁‍🗨";

function FileStructure(props) {
    if (props.lines === undefined) {
        var lines = ["◢ WebApp", "\t▶ .VSCode", "\t◢ src", `\t\t${icon1} App.js`, "\t◢ style", `\t\t${icon2}index.css`, `\t\t${icon2}app.css`]
    } else {
        var lines = props.lines
    }
    var parent = []
    lines.map((line) => {
        if (line.includes("\t\t")) {
            parent.push(<div className="fileEntryText" style={{ paddingLeft: "20%" }}>{line}</div>);
        } else if (line.includes("\t")) {
            parent.push(<div className="fileEntryText" style={{ paddingLeft: "10%" }}>{line}</div>);
        } else {
            parent.push(<div className="fileEntryText">{line}</div>);
        }
        return 0;
    });
    return parent;
}

export default FileStructure;