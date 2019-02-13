import React from 'react'

export const JSIcon = () => {
    return <div className="icon icon-js" />
}

export const JSONIcon = () => {
    return <div className="icon icon-json"/>
}

export const FileIcon = () => {
    return <div className="icon icon-file"/>
}

export const GenerateFileIcon = (text) => {
    var iconClassName = "";
    if (text.endsWith(".js")){
        iconClassName = "icon-js"
    } else if (text.endsWith(".json")){
        iconClassName = "icon-json"
    } else if (text.includes(".")){
        iconClassName = "icon-file";
    }
    return <div className={`icon ${iconClassName}`}/>
}

export default GenerateFileIcon