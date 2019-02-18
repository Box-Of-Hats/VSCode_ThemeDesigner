import React, { Component } from 'react'
import ActivityBar from './ActivityBar'
import Asset from './Asset'
import ContextMenuItem from './ContextMenuItem'
import StatusBar from './StatusBar'
import TitleBar from './TitleBar'
import $ from 'jquery';
import CodeColorPreview from './CodeColorPreview';
import { JSIcon, JSONIcon } from './Icons'
import { SideBar } from './SideBar';


class WindowPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codePreviewText: [
                {
                    name: "code1",
                    text: "def"
                },
                {
                    name: "code2",
                    text: "function"
                }
            ]
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleExit = this.handleExit.bind(this);
    }


    handleClick(assetName, parent = "assets") {
        this.props.handleChange(assetName, parent);
    }

    handleEnter(assetName) {
        //Remove all with the class to fix pass through
        $(".highlighted").removeClass("highlighted");
        $(`[data-primaryAsset='${assetName}']`).addClass("highlighted");
    }

    handleExit(assetName) {
        $(`[data-primaryAsset='${assetName}']`).removeClass("highlighted");
    }

    render() {
        const { assets, palette } = this.props;
        return (
            <div className="windowPreview">
                <Asset assetProps={["titleBar.activeBackground", "titleBar.activeForeground"]} className="titleBar" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                    <TitleBar menuItems={this.props.titleBarMenuItems} title={this.props.titleBarTitle} />
                </Asset>
                <ActivityBar palette={this.props.palette} assets={this.props.assets} iconNames={["file_copy", "search", "code", "bug_report", "dashboard", "settings"]} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit} />
                <div className="tabs">
                    <Asset assetProps={["tab.activeBackground", "tab.activeForeground"]} className="tab activeTab" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <span>
                            <JSIcon />App.js
                        </span>
                        <span>
                            <i class="material-icons">close</i>
                        </span>
                    </Asset>
                    <Asset assetProps={["tab.inactiveBackground", "tab.inactiveForeground"]} className="tab inactiveTab" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <span>
                            <JSONIcon /> bg1.json
                        </span>
                        <span>
                            <i class="material-icons">close</i>
                        </span>
                    </Asset>
                    <Asset assetProps={["tab.inactiveBackground", "tab.inactiveForeground"]} className="tab inactiveTab" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <span>
                            <JSONIcon /> bg2.json
                        </span>
                        <span>
                            <i class="material-icons">close</i>
                        </span>
                    </Asset>
                    <Asset assetProps={["editorGroupHeader.tabsBackground"]} className="editorGroupHeader" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit} />
                </div>
                <div className="side_bar_container">
                    <SideBar handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit} openEditors={this.props.openEditors} fileStructure={this.props.fileStructure}
                        fileOutline={this.props.fileOutline} assets={assets} palette={palette} />
                    
                </div>
                <div className="rightContainer">
                    <Asset assetProps={["editor.background"]} className="miniMapSection" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit} />
                    <Asset assetProps={["editor.background"]} className="" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit} />
                    <Asset assetProps={["scrollbarSlider.background"]} className="scrollBar" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit} />
                    <Asset assetProps={["editor.background"]} className="" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit} />
                </div>
                <Asset assetProps={["panel.background", "terminal.foreground"]} className="panel" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                    <div className="terminalText">
                        <div className="problems">
                            PROBLEMS
                            <Asset assetProps={["badge.background", "badge.foreground"]} className="badge" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit} >
                                23
                            </Asset>
                        </div>
                        <div className="output">OUTPUT</div>
                        <div className="debugConsole">DEBUG CONSOLE</div>
                        <div className="terminal">TERMINAL</div>
                        <Asset assetProps={["dropdown.background", "dropdown.foreground"]} className="panelDropdown" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>1: node ▾</Asset>
                        <div className="panelButtons">
                            <span role="img" aria-label="Plus"><i class="material-icons">add</i></span>
                            <span role="img" aria-label="Window"><i class="material-icons">vertical_split</i></span>
                            <span role="img" aria-label="Bin"><i class="material-icons">delete</i></span>
                            <span role="img" aria-label="Up arrow"><i class="material-icons">expand_less</i></span>
                            <span role="img" aria-label="Cross"><i class="material-icons">close</i></span>
                        </div>
                        <div className="console">
                            You can now view my-app in the browser. <br />
                            <br />
                            Local:  http://localhost:3000/ <br />
                            On Your Network:  http://192.168.1.182:3000/ <br /><br />
                            >
                        </div>
                    </div>
                </Asset>
                <Asset assetProps={["editor.background"]} className="editor" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                    <CodeColorPreview codeWords={this.state.codePreviewText} palette={palette} assets={this.props.tokenColors} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit} />
                    <Asset assetProps={["menu.background", "menu.foreground"]} className="contextMenu" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <ContextMenuItem text="Go to definition" shortcut="F12" />
                        <ContextMenuItem text="Peek definition" shortcut="Alt+F12" />
                        <Asset assetProps={["menu.separatorBackground", "menu.separatorBackground"]} className="contextMenuItemSeparator" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                            style={{ color: palette[assets["menu.separatorBackground"]] }}>
                            <hr />
                        </Asset>

                        <ContextMenuItem text="Rename Symbol" shortcut="F2" />
                        <Asset assetProps={["menu.selectionBackground", "menu.selectionForeground"]} className="contextMenuItemHighlighted" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                            <ContextMenuItem text="Style Settings" shortcut="Ctrl+Win" />
                        </Asset>
                        <ContextMenuItem text="Refactor..." shortcut="Ctrl+Shift+R" />

                        <Asset assetProps={["menu.separatorBackground", "menu.separatorBackground"]} className="contextMenuItemSeparator" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                            style={{ color: palette[assets["menu.separatorBackground"]] }}>
                            <hr />
                        </Asset>

                        <ContextMenuItem text="Cut" shortcut="Ctrl+X" />
                        <ContextMenuItem text="Copy" shortcut="Ctrl+C" />
                        <ContextMenuItem text="Paste" shortcut="Ctrl+V" />

                        <Asset assetProps={["menu.separatorBackground", "menu.separatorBackground"]} className="contextMenuItemSeparator" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                            style={{ color: palette[assets["menu.separatorBackground"]] }}>
                            <hr />
                        </Asset>
                        <ContextMenuItem text="Command Pallette" shortcut="Ctrl+Shift+P" />

                    </Asset>
                </Asset>
                <Asset assetProps={["statusBar.background", "statusBar.foreground"]} className="statusBarContainer" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                    <StatusBar />
                </Asset>
            </div >
        )
    }
}

export default WindowPreview;