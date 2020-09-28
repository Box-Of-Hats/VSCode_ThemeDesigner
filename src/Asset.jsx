import React from "react";

const Asset = (props) => {
	const foregroundColor =
		props.palette[props.assets[props.assetProps[1]]] !== null
			? props.palette[props.assets[props.assetProps[1]]]
			: "#ff0000";
	const backgroundColor = props.palette[props.assets[props.assetProps[0]]];

	return (
		<div
			className={`asset ${props.className}`}
			onClick={(e) => {
				e.stopPropagation();
				e.preventDefault();
				props.handleClick(props.assetProps[0]);
				props.handleEnter({
					primary: {
						name: props.assetProps[0],
						color: props.palette[props.assets[props.assetProps[0]]]
					},
					secondary: {
						name: props.assetProps[1],
						color: props.palette[props.assets[props.assetProps[1]]]
					}
				});
			}}
			onContextMenu={(e) => {
				e.stopPropagation();
				e.preventDefault();
				e.stopPropagation();
				props.handleClick(props.assetProps[1]);
				props.handleEnter({
					primary: {
						name: props.assetProps[0],
						color: props.palette[props.assets[props.assetProps[0]]]
					},
					secondary: {
						name: props.assetProps[1],
						color: props.palette[props.assets[props.assetProps[1]]]
					}
				});
			}}
			onMouseOver={(e) => {
				e.stopPropagation();
				e.preventDefault();
				props.handleEnter({
					primary: {
						name: props.assetProps[0],
						color: backgroundColor
					},
					secondary: {
						name: props.assetProps[1],
						color: foregroundColor
					}
				});
			}}
			onMouseLeave={(e) => {
				e.stopPropagation();
				e.preventDefault();
				props.handleExit(
					{
						primary: {
							name: props.assetProps[0],
							color: backgroundColor
						},
						secondary: {
							name: props.assetProps[1],
							color: foregroundColor
						}
					});
			}}
			data-primaryasset={props.assetProps[0]}
			data-secondaryasset={props.assetProps[1]}
			data-bg={backgroundColor}
			data-fg={foregroundColor}
			style={
				props.style
					? props.style
					: {
						backgroundColor: backgroundColor,
						color: foregroundColor,
					}
			}
		>
			{ props.children}
		</div >
	);
};

export default Asset;
