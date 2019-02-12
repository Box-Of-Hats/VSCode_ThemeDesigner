import React from 'react'
import { JSIcon, JSONIcon, FileIcon } from './Icons'


function OpenEditors(props) {
    return props.lines.map((line) => {
        var fileIcon = ""
        if (line.includes(".json")) {
            fileIcon = <JSONIcon />
        } else if (line.includes(".js")) {
            fileIcon = <JSIcon />
        } else if (line.includes(".css")) {
            fileIcon = <FileIcon />
        }
        return <div className="openEditorText">{fileIcon}{line}</div >;
    });
}

export default OpenEditors