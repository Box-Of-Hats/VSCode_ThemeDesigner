import React, { PureComponent } from 'react'

function Asset(props) {
    var foreColor;
    //TODO: Fix null check. Somehow values are getting into code, such as "undefined": "#efefef",
    if (props.assetFore !== null) {
        foreColor = props.palette[props.assets[props.assetFore]];
    } else {
        foreColor = "#efefef";
    }
    return (
        <div className={`asset ${props.className}`}
            onClick={(e) => { e.stopPropagation(); e.preventDefault(); props.handleClick(props.assetName) }}
            onContextMenu={(e) => { e.stopPropagation(); e.preventDefault(); e.stopPropagation(); props.handleClick(props.assetFore) }}
            onMouseEnter={(e) => { e.stopPropagation(); e.preventDefault(); props.handleEnter(props.assetName) }}
            onMouseLeave={(e) => { e.stopPropagation(); e.preventDefault(); props.handleExit(props.assetName) }}
            data-assetname={props.assetName}
            style={props.style ? props.style : {
                backgroundColor: props.palette[props.assets[props.assetName]],
                color: foreColor
            }
            }>
            {props.children}
        </div >
    );
}

export default Asset;