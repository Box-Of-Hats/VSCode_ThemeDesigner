import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.color ? props.color : "#FFFFFF"
        }
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleSelectButtonClick = this.handleSelectButtonClick.bind(this);
    }

    handleColorChange(event) {
        event.preventDefault();
        this.setState({ value: event.value });
        this.props.handleChange(this.props.colorName, event.target.value);
        this.props.handleSelect(this.props.colorName);
    }

    handleSelectButtonClick(event) {
        event.preventDefault();
        this.props.handleSelect(this.props.colorName);
    }

    render() {
        var highlightClass = this.props.selected ? "highlight" : "";
        return (
            <div className="colorPickerComponent">
                <label className="colorPickerComponent__label" style={{ backgroundColor: this.props.color }}>
                    <input style={{ display: "none", overflow: "hidden", width: 0 }} onChange={this.handleColorChange} value={this.state.value} type="color"></input>
                </label>
                <input style={{ boxShadow: this.props.selected ? `inset 10px 1px 0px ${this.props.color}` : "none", border: `2px solid ${this.props.color}`}} className={`colorPickerComponent__button ${highlightClass}`} type="button" value="Select" onClick={this.handleSelectButtonClick} />
            </div>
        );
    }
}

export default ColorPicker;