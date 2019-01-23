import React, { Component } from 'react';
import './style/App.css';
const vsCodeLogo = require('./img/vsCodeLogo.png');
const defaultSettings = require('./default.json');
const icon0 = "💢";
const icon1 = "💖";
const icon2 = "👁‍🗨";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            palette: defaultSettings.palette,
            assets: defaultSettings.assets,
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
                <div className="header"><img src={vsCodeLogo} alt="Visual Studio Code Logo"></img><span>VSCode Theme Designer</span></div>
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
            <textarea className="codePreview" value={codePreview} readOnly>
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
    var foreColor;
    //TODO: Fix null check. Somehow values are getting into code, such as "undefined": "#efefef",
    if (props.assetFore !== null) {
        foreColor = props.palette[props.assets[props.assetFore]];
    } else {
        foreColor = "#efefef";
    }
    return (
        <div className={`asset ${props.className}`} onClick={() => props.handleClick(props.assetName)}
            onContextMenu={(e) => { e.preventDefault(); console.log(props.assetName); props.handleClick(props.assetFore) }}
            style={props.style ? props.style : {
                backgroundColor: props.palette[props.assets[props.assetName]],
                color: foreColor
            }
            }>
            {props.inner}
        </div >
    );
}

function CodeExample(props) {
    var l1 = "function CodeExample(props) {";
    var l2 = "const indent = \"30px\";"
    var l3 = "return <div>"
    var l4 = "<span style={{ paddingLeft: indent }}>{this.props.innerText}</span>"
    var l5 = "<CodeImage src={this.props.image}/>"
    var l6 = "</div>"
    return <div style={{ userSelect: "none" }}>
        <span style={{}}>{l1}</span><br />
        <span style={{ paddingLeft: "30px" }}>{l2}</span><br />
        <span style={{ paddingLeft: "30px" }}>{l3}</span><br />
        <span style={{ paddingLeft: "60px" }}>{l4}</span><br />
        <span style={{ paddingLeft: "60px" }}>{l5}</span><br />
        <span style={{ paddingLeft: "30px" }}>{l6}</span><br />
        <span style={{}}>}</span><br />
    </div>
}

function FileStructure(props) {
    var lines = ["◢ WebApp", "\t▶ .VSCode", "\t◢ src", `\t\t${icon1} App.js`, "\t◢ style", `\t\t${icon2}index.css`, `\t\t${icon2}app.css`]
    var parent = []
    lines.map((line) => {
        if (line.includes("\t\t")) {
            parent.push(<div style={{ paddingLeft: "20%" }}>{line}</div>);
        } else if (line.includes("\t")) {
            parent.push(<div style={{ paddingLeft: "10%" }}>{line}</div>);
        } else {
            parent.push(<div>{line}</div>);
        }
    });
    return parent;
}

function OpenEditors(props) {
    var lines = [`${icon1} App.js WebApp\\my-app\\src`, "Settings", `${icon2}index.css WebApp\\my-app\\style`]
    var parent = []
    lines.map((line) => {
        parent.push(<div className="openEditorText"> {line}</div >);
    });
    return parent;
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
                <Asset className="titleBar" assetName="titleBar.activeBackground" assetFore="titleBar.activeForeground" palette={palette} assets={assets} handleClick={this.handleClick} inner="File Edit Selection View Go Debug Terminal Help" />
                <Asset className="activityBar" assetName="activityBar.background" assetFore="activityBar.foreground" palette={palette} assets={assets} handleClick={this.handleClick} />
                <div className="tabs">
                    <Asset className="tab activeTab" assetName="tab.activeBackground" assetFore="tab.activeForeground" palette={palette} assets={assets} handleClick={this.handleClick} inner={`${icon1} ActiveTab.js`} />
                    <Asset className="tab inactiveTab" assetName="tab.inactiveBackground" assetFore="tab.inactiveForeground" palette={palette} assets={assets} handleClick={this.handleClick} inner={`${icon0} bg1.json`} />
                    <Asset className="tab inactiveTab" assetName="tab.inactiveBackground" assetFore="tab.inactiveForeground" palette={palette} assets={assets} handleClick={this.handleClick} inner={`${icon0} bg2.json`} />
                    <Asset className="editorGroupHeader" assetName="editorGroupHeader.tabsBackground" palette={palette} assets={assets} handleClick={this.handleClick} />
                </div>
                <div className="sideBarContainer">
                    <Asset className="sideBar" assetName="sideBar.background" assetFore="sideBar.foreground" palette={palette} assets={assets} handleClick={this.handleClick} inner="EXPLORER" />
                    <Asset className="sideBarSectionHeader" assetName="sideBarSectionHeader.background" assetFore="sideBarSectionHeader.foreground" palette={palette} assets={assets} handleClick={this.handleClick} inner="◢ OPEN EDITORS" />
                    <Asset className="sideBar" assetName="sideBar.background" assetFore="sideBar.foreground" palette={palette} assets={assets} handleClick={this.handleClick} inner={<OpenEditors />} />
                    <Asset className="sideBarSectionHeader" assetName="sideBarSectionHeader.background" assetFore="sideBarSectionHeader.foreground" palette={palette} assets={assets} handleClick={this.handleClick} inner="◢ MYPROJECTNAME" />
                    <Asset className="sideBar" assetName="sideBar.background" assetFore="sideBar.foreground" palette={palette} assets={assets} handleClick={this.handleClick} inner={<FileStructure />} />
                    <Asset className="sideBarSectionHeader" assetName="sideBarSectionHeader.background" assetFore="sideBarSectionHeader.foreground" palette={palette} assets={assets} handleClick={this.handleClick} inner="▶ OUTLINE" />
                </div>
                <div className="rightContainer">
                    <Asset className="miniMapSection" assetName="editor.background" palette={palette} assets={assets} handleClick={this.handleClick} />
                    <Asset className="scrollBar" assetName="scrollbarSlider.background" palette={palette} assets={assets} handleClick={this.handleClick} />
                </div>
                <Asset className="panel" assetName="panel.background" assetFore="terminal.foreground" palette={palette} assets={assets} handleClick={this.handleClick} inner="This is the terminal" />
                <Asset className="editor" assetName="editor.background" palette={palette} assets={assets} handleClick={this.handleClick} inner={<CodeExample />} />
                <Asset className="statusBar" assetName="statusBar.background" assetFore="statusBar.foreground" palette={palette} assets={assets} handleClick={this.handleClick} inner="master 🗘 ⓧ ⚠ 🛈 javascript | 🙿 App.js" />

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
