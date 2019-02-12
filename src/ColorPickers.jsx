import React, { Component } from 'react'
import ColorPicker from './ColorPicker'


export default class ColorPickers extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }

    render() {
        let containerClass = Object.keys(this.props.palette).length >= this.props.compactLength ? "compact" : "full";
        let isAddButtonEnabled = Object.keys(this.props.palette).length < this.props.maxColorCount;
        return (
            <div className="colorPickersComponent">
                <div className="colorPickers">
                    {Object.keys(this.props.palette).map((i, key) => {
                        return <div className={`colorPickerContainer colorPickerContainer--${containerClass}`}><ColorPicker key={key} colorName={i} color={this.props.palette[i]}
                            handleChange={this.props.onChange} handleSelect={this.props.onSelect}
                            selected={i === this.props.selectedColorName} /></div>
                    })}
                </div>
                <div className="button button-plus" onClick={isAddButtonEnabled ? this.props.onColorAdd : null }>
                    <span role="img" aria-label="Plus">&#10133;&#xFE0E;</span> Add
                </div>
                <div className="button button-minus" onClick={this.props.onColorRemove}>
                    <span role="img" aria-label="Minus">&#10134;&#xFE0E;</span> Remove
                </div>
            </div>
        )
    }
}
