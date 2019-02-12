import React from 'react'
import {JSIcon, JSONIcon, FileIcon} from './Icons'


function OpenEditors(props) {
    var lines = [`App.js WebApp\\my-app\\src`, "Settings", `index.css WebApp\\my-app\\style`]
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

        parent.push(<div className="openEditorText">{fileIcon}{line}</div >);
        return 0;
    });
    return parent;
}

export default OpenEditors