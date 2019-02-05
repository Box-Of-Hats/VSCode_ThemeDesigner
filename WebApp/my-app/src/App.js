import React, { Component } from 'react';
import './style/App.css';
import ThemePicker from './ThemePicker';
import CodePreview from './CodePreview';
import Footer from './Footer';
import WindowPreview from './WindowPreview';
import ColorPickers from './ColorPickers';
const vsCodeLogo = require('./img/vsCodeLogo.png');
const defaultSettings = require('./config.json');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            palette: defaultSettings.presets[0].palette,
            assets: defaultSettings.presets[0].workbenchColorCustomizations,
            selectedColorName: "c0",
            tokenColors: defaultSettings.presets[0].editorTokenColorCustomizations
        };
        this.handleColorChange = this.handleColorChange.bind(this);
        this.updateAsset = this.updateAsset.bind(this);
        this.updatePalette = this.updatePalette.bind(this);
        this.loadTheme = this.loadTheme.bind(this);
        this.onColorAdd = this.onColorAdd.bind(this);
        this.onColorRemove = this.onColorRemove.bind(this);
    }

    handleColorChange(colorName) {
        this.setState({ selectedColorName: colorName });
    }

    updateAsset(parent, assetName) {
        let prev = JSON.parse(JSON.stringify(this.state[parent]))
        console.log("Updating:", parent, assetName );
        
        prev[assetName] = this.state.selectedColorName;
        this.setState({
            [parent]: prev
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

    loadTheme(themeId) {
        this.setState(
            {
                palette: defaultSettings.presets[themeId].palette,
                assets: defaultSettings.presets[themeId].workbenchColorCustomizations
            }
        );
    }

    onColorAdd(){
        let allowedColorChars = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += allowedColorChars[Math.floor(Math.random() * allowedColorChars.length)];
        }
        let randKey = Math.random();
        let prevPalette = JSON.parse(JSON.stringify(this.state.palette))
        prevPalette[randKey] = color;
        this.setState({
            palette: prevPalette
        });
    }

    onColorRemove(){
        let palette = JSON.parse(JSON.stringify(this.state.palette));;
        if (Object.keys(palette).length === 1){
            return 0;
        }
        let assets = JSON.parse(JSON.stringify(this.state.assets));;
        let keyToRemove = Object.keys(palette).pop();
        Object.keys(assets).map((i, key) => {
            if (assets[i] === keyToRemove){
                assets[i] =  Object.keys(palette).shift();
            }
            return 0;
        });
        delete palette[keyToRemove];
        this.setState({
            assets: assets,
            palette: palette
        });
    }

    render() {
        return (
            <div className="App">
                <div className="header"><img src={vsCodeLogo} alt="Visual Studio Code Logo"></img><span>VSCode Theme Designer</span></div>
                <div className="appSideBarWrapper">
                    <div className="appSideBar">
                        <ThemePicker onChange={this.loadTheme} themes={defaultSettings.presets} />
                        <div className="colorPickers">
                            <ColorPickers palette={this.state.palette} onChange={this.updatePalette} onSelect={this.handleColorChange}
                                selectedColorName={this.state.selectedColorName} onColorAdd={this.onColorAdd} onColorRemove={this.onColorRemove}/>
                        </div>
                        <CodePreview assets={this.state.assets} palette={this.state.palette} />
                    </div>
                </div>
                <div className="windowPreviewContainer">
                    <WindowPreview palette={this.state.palette} handleChange={this.updateAsset} assets={this.state.assets} tokenColors={this.state.tokenColors}/>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;