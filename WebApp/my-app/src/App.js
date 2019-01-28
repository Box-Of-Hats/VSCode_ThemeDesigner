import React, { Component } from 'react';
import './style/App.css';
import ThemePicker from './ThemePicker'
import ColorPicker from './ColorPicker'
import CodePreview from './CodePreview'
import Footer from './Footer'
import WindowPreview from './WindowPreview'
const vsCodeLogo = require('./img/vsCodeLogo.png');
const defaultSettings = require('./config.json');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            palette: defaultSettings.presets[0].palette,
            assets: defaultSettings.presets[0].assets,
            selectedColorName: "c0"
        };
        this.handleColorChange = this.handleColorChange.bind(this);
        this.updateAsset = this.updateAsset.bind(this);
        this.updatePalette = this.updatePalette.bind(this);
        this.loadTheme = this.loadTheme.bind(this);
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

    loadTheme(themeId) {
        this.setState(
            {
                palette: defaultSettings.presets[themeId].palette,
                assets: defaultSettings.presets[themeId].assets
            }
        );
    }

    render() {
        return (
            <div className="App">
                <div className="header"><img src={vsCodeLogo} alt="Visual Studio Code Logo"></img><span>VSCode Theme Designer</span></div>
                <div className="appSideBarWrapper">
                    <div className="appSideBar">
                        <ThemePicker onChange={this.loadTheme} themes={defaultSettings.presets} />
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

export default App;