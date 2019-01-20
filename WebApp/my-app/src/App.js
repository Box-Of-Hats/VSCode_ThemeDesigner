import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: "#FFFFFF",
            codeValues: {
                "activityBarBadge.background": "#FFD3F1",
                "activityBarBadge.foreground": "#30423F",
                "list.activeSelectionForeground": "#FFD3F1",
                "list.inactiveSelectionForeground": "#FFD3F1",
                "list.highlightForeground": "#FFD3F1"
            }
        };
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleAssetChange = this.handleAssetChange.bind(this);
        this.getColor = this.getColor.bind(this);
    }

    handleAssetChange(key, value) {
        // this.setState((prevState) => { prevState ]]} )
        let prevCodeValues = JSON.parse(JSON.stringify(this.state.codeValues))
        //make changes to ingredients
        prevCodeValues[key] = value;//whatever new ingredients are
        this.setState({
            codeValues: prevCodeValues
        })

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
                <div>
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
                <div>
                    {Object.keys(this.state.codeValues).map((i, key) => { return <ColorableAsset key={key} id={i} color={this.state.codeValues[i]} getColor={this.getColor} handleChange={this.handleAssetChange} /> })}
                </div>
                <CodePreview keyValues={this.state.codeValues} />

            </div>
        );
    }
}

class CodePreview extends Component {
    constructor(props) {
        super(props)
        this.generatePreviewText = this.generatePreviewText.bind(this);
    }

    generatePreviewText() {
        var text = "";
        Object.keys(this.props.keyValues).forEach(key => {
            text = text + key + ": " + this.props.keyValues[key] + ",\n";
        });
        return text
    }

    render() {
        var codePreview = this.generatePreviewText();
        return (
            <div className="codePreview">
                {codePreview.split("\n").map((i, key) => { return <div className="codeLine" key={key}>{i}</div> })}
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
        //this.handleAssetChange = this.handleAssetChange.bind(this);
    }

    handleClick() {
        console.log("Clicked", this.props.id);
        console.log("Setting color to", this.props.getColor());
        this.setState({ color: this.props.getColor() });
        this.props.handleChange(this.props.id, this.props.getColor());
    }

    render() {
        return (
            <div style={{
                backgroundColor: this.state.color
            }} className="colorableAsset" onClick={this.handleClick}>

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
        this.props.handleSelect(event.target.value);
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
