import React, { Component } from 'react';
import './style/App.css';
import ThemePicker from './ThemePicker';
import CodePreview from './CodePreview';
import Footer from './Footer';
import WindowPreview from './WindowPreview';
import ColorPickers from './ColorPickers';
const config = require('./config.json');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            palette: config.presets[0].palette,
            assets: config.presets[0].workbenchColorCustomizations,
            selectedColorName: "c0",
            tokenColors: config.presets[0].editorTokenColorCustomizations
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

    updateAsset(assetName, parent) {
        let prev = this.state[parent]
        prev[assetName] = this.state.selectedColorName;
        this.setState({
            parent: prev
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
                palette: config.presets[themeId].palette,
                assets: config.presets[themeId].workbenchColorCustomizations
            }
        );
    }

    onColorAdd() {
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

    onColorRemove() {
        let palette = JSON.parse(JSON.stringify(this.state.palette));;
        if (Object.keys(palette).length === 1) {
            return 0;
        }
        let assets = JSON.parse(JSON.stringify(this.state.assets));;
        let keyToRemove = Object.keys(palette).pop();
        Object.keys(assets).map((i, key) => {
            if (assets[i] === keyToRemove) {
                assets[i] = Object.keys(palette).shift();
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
                <div className="header"><span>VSCode Theme Designer</span></div>
                <div className="appSideBarWrapper">
                    <div className="appSideBar">
                        <ThemePicker onChange={this.loadTheme} themes={config.presets} />
                        <div className="colorPickers">
                            <ColorPickers palette={this.state.palette} onChange={this.updatePalette} onSelect={this.handleColorChange}
                                selectedColorName={this.state.selectedColorName} onColorAdd={this.onColorAdd} onColorRemove={this.onColorRemove}
                                compactLength={config.colorPickers.compactLength} maxColorCount={config.colorPickers.maxColorCount} />
                        </div>
                        <CodePreview assets={this.state.assets} palette={this.state.palette} />
                    </div>
                </div>
                <div className="windowPreviewContainer">
                    <WindowPreview palette={this.state.palette} handleChange={this.updateAsset} assets={this.state.assets} tokenColors={this.state.tokenColors}
                        openEditors={config.windowPreview.openEditors} fileStructure={config.windowPreview.fileStructure} titleBarMenuItems={config.windowPreview.titleBar.menuItems}
                        titleBarTitle={config.windowPreview.titleBar.title} fileOutline={config.windowPreview.fileOutline} terminalProblemCount={config.windowPreview.terminal.problemCount} />
                </div>
                <Footer links={config.footerLinks} copyrightName={config.owner} />
            </div>
        );
    }
}

export default App;
