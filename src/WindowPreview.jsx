import React, { Component } from 'react'
import Asset from './Asset'
import ContextMenuItem from './ContextMenuItem'
import FileStructure from './FileStructure'
import OpenEditors from './OpenEditors'
import StatusBar from './StatusBar'
import TitleBarText from './TitleBarText'
import $ from 'jquery';
import CodeColorPreview from './CodeColorPreview';
import { JSIcon, JSONIcon } from './Icons'



class WindowPreview extends Component {
    constructor(props) {
        super(props);
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
                    <TitleBarText />
                </Asset>
                <div className="activityBar">
                    <Asset assetProps={["activityBar.background", "activityBar.foreground"]} className="activityBarIcon" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                        style={{ color: palette[assets["activityBar.foreground"]], backgroundColor: palette[assets["activityBar.background"]] }} >
                        <span role="img" aria-label="Files">&#128459;&#xFe0E;</span>
                    </Asset>
                    <Asset assetProps={["activityBar.background", "activityBar.inactiveForeground"]} className="activityBarIcon" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                        style={{ color: palette[assets["activityBar.inactiveForeground"]], backgroundColor: palette[assets["activityBar.background"]] }} >
                        <span role="img" aria-label="Find">&#128270;&#xFE0E;</span>
                    </Asset>
                    <Asset assetProps={["activityBar.background", "activityBar.inactiveForeground"]} className="activityBarIcon" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                        style={{ color: palette[assets["activityBar.inactiveForeground"]], backgroundColor: palette[assets["activityBar.background"]] }} >
                        <span role="img" aria-label="Git">&#9282;&#xFE0E;</span>
                    </Asset>
                    <Asset assetProps={["activityBar.background", "activityBar.inactiveForeground"]} className="activityBarIcon" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                        style={{ color: palette[assets["activityBar.inactiveForeground"]], backgroundColor: palette[assets["activityBar.background"]] }} >
                        <span role="img" aria-label="Debugger">&#128029;&#xFE0E;</span>
                    </Asset>
                    <Asset assetProps={["activityBar.background", "activityBar.inactiveForeground"]} className="activityBarIcon" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                        style={{ color: palette[assets["activityBar.inactiveForeground"]], backgroundColor: palette[assets["activityBar.background"]] }} >
                        <span role="img" aria-label="Extensions">&#8862;&#xFE0E;</span>
                    </Asset>
                    <Asset assetProps={["activityBar.background"]} className="activityBarSpace" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit} />
                    <Asset assetProps={["activityBar.background", "activityBar.inactiveForeground"]} className="activityBarIcon" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                        style={{ color: palette[assets["activityBar.inactiveForeground"]], backgroundColor: palette[assets["activityBar.background"]] }} >
                        <span role="img" aria-label="Settings">&#9881;&#xFE0E;</span>
                    </Asset>
                </div>
                <div className="tabs">
                    <Asset assetProps={["tab.activeBackground", "tab.activeForeground"]} className="tab activeTab" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <span>
                            <JSIcon />App.js
                        </span>
                        <span>
                            &#10006;&#xFE0E;
                        </span>
                    </Asset>
                    <Asset assetProps={["tab.inactiveBackground", "tab.inactiveForeground"]} className="tab inactiveTab" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <span>
                            <JSONIcon /> bg1.json
                        </span>
                        <span>
                            &#10006;&#xFE0E;
                        </span>
                    </Asset>
                    <Asset assetProps={["tab.inactiveBackground", "tab.inactiveForeground"]} className="tab inactiveTab" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <span>
                            <JSONIcon /> bg2.json
                        </span>
                        <span>
                            &#10006;&#xFE0E;
                        </span>
                    </Asset>
                    <Asset assetProps={["editorGroupHeader.tabsBackground"]} className="editorGroupHeader" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit} />
                </div>
                <div className="sideBarContainer">
                    <Asset assetProps={["sideBar.background", "sideBar.foreground"]} className="sideBar" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <span>EXPLORER</span>
                    </Asset>
                    <Asset assetProps={["sideBarSectionHeader.background", "sideBarSectionHeader.foreground"]} className="sideBarSectionHeader" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <span>◢ OPEN EDITORS</span>
                    </Asset>
                    <Asset assetProps={["sideBar.background", "sideBar.foreground"]} className="sideBar" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <OpenEditors />
                    </Asset>
                    <Asset assetProps={["sideBarSectionHeader.background", "sideBarSectionHeader.foreground"]} className="sideBarSectionHeader" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <span>◢ MYPROJECTNAME</span>
                    </Asset>
                    <Asset assetProps={["sideBar.background", "sideBar.foreground"]} className="sideBar" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <FileStructure />
                    </Asset>
                    <Asset assetProps={["sideBarSectionHeader.background", "sideBarSectionHeader.foreground"]} className="sideBarSectionHeader" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <span>◢ OUTLINE</span>
                    </Asset>
                    <Asset assetProps={["sideBar.background", "sideBar.foreground"]} className="sideBar" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <Asset assetProps={["input.background", "input.foreground"]} className="filterBox" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                            Filter
                        </Asset>
                        <FileStructure lines={["◢ ⊏ App", "\t⊞ handleColorChange", "\t⊞ render", "◢ WindowPreview", "\t⊞ handleClick", "\t⊞ handleEnter", "\t⊞ handleExit"]} />
                    </Asset>
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
                            <span role="img" aria-label="Plus">➕</span>
                            <span role="img" aria-label="Window">🗖</span>
                            <span role="img" aria-label="Bin">🗑</span>
                            <span role="img" aria-label="Up arrow">˄</span>
                            <span role="img" aria-label="Cross">✕</span>
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
                    {/* <CodeExample /> */}
                    <CodeColorPreview palette={palette} assets={this.props.tokenColors} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit} />
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
                <Asset assetProps={["statusBar.background", "statusBar.foreground"]} className="statusBar" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                    <StatusBar />
                </Asset>
            </div >
        )
    }
}

export default WindowPreview;