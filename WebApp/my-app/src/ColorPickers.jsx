import React, { Component } from 'react'
import ColorPicker from './ColorPicker'


export default class ColorPickers extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }

    render() {
        return (
            <div className="colorPickersComponent">
                <div className="colorPickers">
                    {Object.keys(this.props.palette).map((i, key) => {
                        return <ColorPicker key={key} colorName={i} color={this.props.palette[i]}
                            handleChange={this.props.onChange} handleSelect={this.props.onSelect}
                            selected={i === this.props.selectedColorName} />
                    })}
                </div>
                <div className="button button-plus" onClick={this.props.onColorAdd}>
                    <span role="img" aria-label="Plus">&#10133;&#xFE0E;</span> Add
                </div>
                <div className="button button-minus" onClick={this.props.onColorRemove}>
                    <span role="img" aria-label="Minus">&#10134;&#xFE0E;</span> Remove
                </div>
            </div>
        )
    }
}
