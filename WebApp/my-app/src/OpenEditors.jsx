import React, { PureComponent } from 'react'

const icon0 = "💢";
const icon1 = "💖";
const icon2 = "👁‍🗨";

function OpenEditors(props) {
    var lines = [`${icon1} App.js WebApp\\my-app\\src`, "Settings", `${icon2}index.css WebApp\\my-app\\style`]
    var parent = []
    lines.map((line) => {
        parent.push(<div className="openEditorText"> {line}</div >);
        return 0;
    });
    return parent;
}

export default OpenEditors