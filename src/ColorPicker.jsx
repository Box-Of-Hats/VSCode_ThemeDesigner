//@ts-check
import React, { useState } from "react";

/**
 * @typedef {Object} ColorPickerProps
 * @property {string} color
 * @property {string} colorName
 * @property {string} selected The class to add when the colorpicker is selected
 * @property {(colorName: string, value: string) => any} handleChange
 * @property {(colorName: string) => any} handleSelect
 */

/**
 * @param {ColorPickerProps} props
 */
export const ColorPicker = (props) => {
	const [color, setColor] = useState(props.color || "#FFFFFF");
	var highlightClass = props.selected ? "highlight" : "";

	const handleColorChange = (e) => {
		e.preventDefault();
		setColor(e.value);
		props.handleChange(props.colorName, e.target.value);
		props.handleSelect(props.colorName);
	};

	const handleSelectButtonClick = (e) => {
		e.preventDefault();
		props.handleSelect(props.colorName);
	};

	const randomColor = () => {
		return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	};

	return (
		<div className="colorPickerComponent">
			<label
				className="colorPickerComponent__label"
				style={{ backgroundColor: props.color }}
			>
				<input
					style={{
						display: "none",
						overflow: "hidden",
						width: 0,
					}}
					onChange={(e) => handleColorChange(e)}
					value={color}
					type="color"
				/>
			</label>
			<button
				className="colorPickerComponent__button"
				onClick={() => {
					props.handleChange(props.colorName, randomColor());
				}}
			>
				<i className="material-icons">autorenew</i>
			</button>
			<button
				style={{
					boxShadow: props.selected
						? `inset 10px 1px 0px ${props.color}`
						: "none",
					border: `2px solid ${props.color}`,
				}}
				className={`colorPickerComponent__button ${highlightClass}`}
				onClick={handleSelectButtonClick}
			>
				select
			</button>
		</div>
	);
};

export default ColorPicker;
