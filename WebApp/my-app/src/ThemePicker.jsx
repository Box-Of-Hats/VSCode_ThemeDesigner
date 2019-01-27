import React, { Component } from 'react';
class ThemePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
    return (
        <div>
            <select onChange>
                {props.themes.map((i,key) => { 
                    <option></option>
                })}
                <option>
                    A
                </option>
                <option>
                    B
                </option>
            </select>
        </div>
    )};
}

export default ThemePicker