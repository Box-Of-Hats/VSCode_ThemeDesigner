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
            <div className="colorPickers">
                {Object.keys(this.props.palette).map((i, key) => {
                    return <ColorPicker key={key} colorName={i} color={this.props.palette[i]}
                            handleChange={this.props.onChange} handleSelect={this.props.onSelect}
                            selected={i === this.props.selectedColorName} />
                })}
                <div>
                    <div className="button" onClick={this.props.onColourAdd}>&#10133;&#xFE0E; Add</div>
                </div>
            </div>
        )
    }
}
