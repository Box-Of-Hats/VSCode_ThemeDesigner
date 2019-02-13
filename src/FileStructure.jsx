import React from 'react'
import GenerateFileIcon  from './Icons'

function FileStructure(props) {
    return props.lines.map((line, key) => {
        var indentation = ""
        if (line.includes("\t\t")) {
            indentation = "20%"
        } else if (line.includes("\t")) {
            indentation = "10%"
        } else {
            indentation = "0px"
        }

        return <div key={key} className="fileEntryText" style={{ paddingLeft: indentation }}>{GenerateFileIcon(line)} {line}</div>;
    });
}

export default FileStructure;