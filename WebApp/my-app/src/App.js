import React, { Component } from 'react';
import './style/App.css';
// import vsCodeLogo from './img/vsCodeLogo.png'; // with import
const vsCodeLogo = require('./img/vsCodeLogo.png');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            palette: {
                "c0": "#141A18",
                "c1": "#1D2725",
                "c2": "#30423F",
                "c3": "#FFD3F1",
                "c4": "#EFEFEF",
                "c5": "#cdeeca",
            },
            assets: {
                "activityBar.background": "c2",
                "activityBar.foreground": "c4",
                "editor.background": "c0",
                "sideBar.background": "c1",
                "statusBar.background": "c2",
                "titleBar.background": "c3",
            },
            selectedColorName: "c0"
        };
        this.handleColorChange = this.handleColorChange.bind(this);
        this.updateAsset = this.updateAsset.bind(this);
        this.updatePalette = this.updatePalette.bind(this);
    }

    handleColorChange(colorName) {
        this.setState({ selectedColorName: colorName });
    }


    updateAsset(assetName) {
        let prev = JSON.parse(JSON.stringify(this.state.assets))

        prev[assetName] = this.state.selectedColorName;
        this.setState({
            assets: prev
        })
    }

    updatePalette(colorName, colorValue) {
        //Update a value in the palette
        let prev = JSON.parse(JSON.stringify(this.state.palette))
        prev[colorName] = colorValue;
        this.setState({
            palette: prev
        })
    }

    render() {
        return (
            <div className="App">
                <div className="header"><img src={vsCodeLogo}></img><span>VSCode Theme Designer</span></div>
                <div className="appSideBarWrapper">
                    <div className="appSideBar">
                        <div className="colorPickers">
                            {Object.keys(this.state.palette).map((i, key) => {
                                return <ColorPicker key={key} colorName={i} color={this.state.palette[i]}
                                    handleChange={this.updatePalette} handleSelect={this.handleColorChange}
                                    selected={i === this.state.selectedColorName} />
                            })}
                        </div>
                        <CodePreview assets={this.state.assets} palette={this.state.palette} />
                    </div>
                </div>
                <div className="windowPreviewContainer">
                    <WindowPreview palette={this.state.palette} handleChange={this.updateAsset} assets={this.state.assets} />
                </div>
                <Footer />
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
        var text = "\"workbench.colorCustomizations\": {\n";
        Object.keys(this.props.assets).forEach(key => {
            text = text + "\"" + key + "\": \"" + this.props.palette[this.props.assets[key]] + "\",\n";
        });
        text = text + "},";
        return text
    }

    render() {
        var codePreview = this.generatePreviewText();

        return (
            <textarea className="codePreview" value={codePreview} readOnly >
            </textarea >
        )
    }
}

const Footer = ({ props }) => {
    return <div className="footer">
        <ul>
            <li>
                <a href="https://github.com/Box-Of-Hats/VSCode_ThemeGenerator/">Source</a>
            </li>
            <li>
                <a href="https://box-of-hats.github.io/">My Work</a>
            </li>
            <li>
                |
            </li>
            <li>
                Box Of Hats &copy; {new Date().getFullYear()}
            </li>
        </ul>
    </div>
}

function Asset(props) {
    return (
        <div className={`asset ${props.className}`} onClick={() => props.handleClick(props.assetName)}
            style={props.style ? props.style : { backgroundColor: props.palette[props.assets[props.assetName]] }}>
            {props.inner}
        </div >
    );
}

class WindowPreview extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(assetName) {
        this.props.handleChange(assetName);
    }

    render() {
        const { assets, palette } = this.props;
        return (
            <div className="windowPreview">
                <Asset className="titleBar" assetName="titleBar.background" palette={palette} assets={assets} handleClick={this.handleClick} inner="File Edit Selection View Go Debug Terminal Help" />
                <Asset className="activityBar" assetName="activityBar.background" palette={palette} assets={assets} handleClick={this.handleClick} />
                <Asset className="sideBar" assetName="sideBar.background" palette={palette} assets={assets} handleClick={this.handleClick} />
                <Asset className="editor" assetName="editor.background" palette={palette} assets={assets} handleClick={this.handleClick} />
                <Asset className="statusBar" assetName="statusBar.background" palette={palette} assets={assets} handleClick={this.handleClick} />
            </div >
        )
    }
}

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
        console.log("ColorPicker.handleColorChange: ", event.target.value);
        this.setState({ value: event.value });
        this.props.handleChange(this.props.colorName, event.target.value);
        this.props.handleSelect(this.props.colorName);
    }

    handleSelectButtonClick(event) {
        event.preventDefault();
        console.log("ColorPicker.handleSelectButtonClick:", this.props.colorName);
        this.props.handleSelect(this.props.colorName);
    }

    render() {
        var highlightClass = this.props.selected ? "highlight" : "";
        return (
            <div className="colorPicker">
                <label className="colorPicker__label" style={{ backgroundColor: this.props.color }}>
                    {/* {this.props.colorName} */}
                    <input style={{ display: "none", overflow: "hidden", width: 0 }} onChange={this.handleColorChange} value={this.state.value} type="color"></input>
                </label>
                <input style={{ boxShadow: this.props.selected ? `inset 10px 0 5px ${this.props.color}` : "none" }} className={`colorPicker__button ${highlightClass}`} type="button" value="Select" onClick={this.handleSelectButtonClick} />
            </div >
        );
    }
}


export default App;
