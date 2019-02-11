import React from 'react'
import {JSIcon, JSONIcon, FileIcon} from './Icons'

function FileStructure(props) {
    var lines;
    if (props.lines === undefined) {
        lines = ["◢ WebApp", "\t▶ .VSCode", "\t◢ src", `\t\t App.js`, "\t◢ style", `\t\tindex.css`, `\t\tapp.css`]
    } else {
        lines = props.lines
    }
    var parent = []
    lines.map((line) => {
        var fileIcon = ""
        if (line.includes(".json")){
            fileIcon = <JSONIcon/>
        } else if (line.includes(".js")){
            fileIcon = <JSIcon/>
        } else if (line.includes(".css")){
            fileIcon = <FileIcon/>
        }

        var indentation = ""
        if (line.includes("\t\t")) {
            indentation ="20%"
        } else if (line.includes("\t")) {
            indentation ="10%"
        } else {
            indentation ="0px"
        }

        parent.push(<div className="fileEntryText" style={{ paddingLeft: indentation }}>{fileIcon} {line}</div>);

        return 0;
    });
    return parent;
}

export default FileStructure;