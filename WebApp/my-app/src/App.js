import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: "#FFFFFF",
        };
        this.handleColorChange = this.handleColorChange.bind(this);
        this.getColor = this.getColor.bind(this);
    }

    getColor() {
        return this.state.selectedColor;
    }

    handleColorChange(setColor) {
        this.setState({ selectedColor: setColor });
    }

    render() {
        return (
            <div className="App">

                <div style={{ float: "left" }}>
                    Current: <span style={{ backgroundColor: this.state.selectedColor, padding: "3px" }}>{this.state.selectedColor}</span>
                    <div className="colorPickers">
                        <ColorPicker color="#FF0000" handleSelect={this.handleColorChange} />
                        <ColorPicker handleSelect={this.handleColorChange} />
                        <ColorPicker handleSelect={this.handleColorChange} />
                        <ColorPicker handleSelect={this.handleColorChange} />
                        <ColorPicker handleSelect={this.handleColorChange} />
                        <ColorPicker handleSelect={this.handleColorChange} />
                    </div>
                </div>
                <div style={{ float: "right" }}>
                    <ColorableAsset id="editor.background1" color="#ffccbb" getColor={this.getColor} />
                    <ColorableAsset id="editor.foreground2" color="#ffccbb" getColor={this.getColor} />
                    <ColorableAsset id="editor.background3" color="#ffccbb" getColor={this.getColor} />
                    <ColorableAsset id="editor.background4" color="#ffccbb" getColor={this.getColor} />
                </div>
                <CodePreview />

            </div>
        );
    }
}

class CodePreview extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                CODE PREVIEW
            </div>
        )
    }
}

class ColorableAsset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color ? props.color : "#efefef"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("Clicked", this.props.id);
        console.log("Setting color to", this.props.getColor())
        this.setState({ color: this.props.getColor() })
    }

    render() {
        return (
            <div style={{
                width: "100px",
                height: "100px",
                backgroundColor: this.state.color
            }} onClick={this.handleClick}>

            </div >
        )
    }
}

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color ? props.color : "#FFFFFF"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleChange(event) {
        this.setState({ color: event.target.value });
    }

    handleSelect(event) {
        this.props.handleSelect(this.state.color);
    }

    render() {
        return (
            <div className="colorPicker">
                <label>Color:
                <input className="colorPicker__colorInput" onChange={this.handleChange} value={this.state.color} type="color"></input>
                </label>
                <input className="colorPicker__button" type="button" value="Select" onClick={this.handleSelect} />
            </div>
        );
    }
}


export default App;
