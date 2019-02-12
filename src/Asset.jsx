import React from 'react'

const Asset = (props) => {
    var foreColor = props.palette[props.assets[props.assetProps[1]]] !== null ? props.palette[props.assets[props.assetProps[1]]] : "#ff0000";

    return (
        <div className={`asset ${props.className}`}
            onClick={(e) => { e.stopPropagation(); e.preventDefault(); props.handleClick(props.assetProps[0]) }}
            onContextMenu={(e) => { e.stopPropagation(); e.preventDefault(); e.stopPropagation(); props.handleClick(props.assetProps[1]) }}
            onMouseOver={(e) => { e.stopPropagation(); e.preventDefault(); props.handleEnter(props.assetProps[0]) }}
            onMouseLeave={(e) => { e.stopPropagation(); e.preventDefault(); props.handleExit(props.assetProps[0]) }}
            data-primaryAsset={props.assetProps[0]} data-secondaryAsset={props.assetProps[1]}
            style={props.style ? props.style : {
                backgroundColor: props.palette[props.assets[props.assetProps[0]]],
                color: foreColor
            }
            }>
            {props.children}
        </div >
    );
}

export default Asset;