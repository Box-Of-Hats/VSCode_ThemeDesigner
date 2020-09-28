import React from "react";

function CodeAsset(props) {
	return (
		<div
			className={`codeAsset ${props.className}`}
			onClick={(e) => {
				e.stopPropagation();
				e.preventDefault();
				props.handleClick(props.assetName);
			}}
			onContextMenu={(e) => {
				e.stopPropagation();
				e.preventDefault();
				e.stopPropagation();
				props.handleClick(props.assetFore);
			}}
			onMouseEnter={(e) => {
				e.stopPropagation();
				e.preventDefault();
				props.handleEnter(props.assetName);
			}}
			onMouseLeave={(e) => {
				e.stopPropagation();
				e.preventDefault();
				props.handleExit(props.assetName);
			}}
			data-primaryasset={props.assetName}
			data-secondaryasset={props.assetFore}
			style={
				props.style
					? props.style
					: {
							color: props.palette[props.assets[props.assetName]],
					  }
			}
		>
			{props.children}
		</div>
	);
}

export default CodeAsset;
