import React, { Component } from 'react'
import Asset from './Asset'
import CodeExample from './CodeExample'
import ContextMenuItem from './ContextMenuItem'
import FileStructure from './FileStructure'
import OpenEditors from './OpenEditors'
import StatusBar from './StatusBar'
import TitleBarText from './TitleBarText'
import $ from 'jquery';
const icon0 = "💢";
const icon1 = "💖";
const icon2 = "👁‍🗨";


class WindowPreview extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleExit = this.handleExit.bind(this);
    }

    handleClick(assetName) {
        this.props.handleChange(assetName);
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
                <Asset className="titleBar" assetName="titleBar.activeBackground" assetFore="titleBar.activeForeground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                    <TitleBarText />
                </Asset>
                <div className="activityBar">
                    <Asset className="activityBarIcon" assetName="activityBar.background" assetFore="activityBar.foreground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                        style={{ color: palette[assets["activityBar.foreground"]], backgroundColor: palette[assets["activityBar.background"]]}} >
                        &#128459;&#xFe0E;
                    </Asset>
                    <Asset className="activityBarIcon" assetName="activityBar.background" assetFore="activityBar.inactiveForeground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                        style={{ color: palette[assets["activityBar.inactiveForeground"]], backgroundColor: palette[assets["activityBar.background"]]}} >
                        &#128270;&#xFE0E;
                    </Asset>
                    <Asset className="activityBarIcon" assetName="activityBar.background" assetFore="activityBar.inactiveForeground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                        style={{ color: palette[assets["activityBar.inactiveForeground"]], backgroundColor: palette[assets["activityBar.background"]]}} >
                        &#9282;&#xFE0E;
                    </Asset>
                    <Asset className="activityBarIcon" assetName="activityBar.background" assetFore="activityBar.inactiveForeground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                        style={{ color: palette[assets["activityBar.inactiveForeground"]], backgroundColor: palette[assets["activityBar.background"]]}} >
                        	&#128029;&#xFE0E;
                    </Asset>
                    <Asset className="activityBarIcon" assetName="activityBar.background" assetFore="activityBar.inactiveForeground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                        style={{ color: palette[assets["activityBar.inactiveForeground"]], backgroundColor: palette[assets["activityBar.background"]]}} >
                        &#8862;&#xFE0E;
                    </Asset>
                    <Asset className="activityBarSpace" assetName="activityBar.background" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}/>
                    <Asset className="activityBarIcon" assetName="activityBar.background" assetFore="activityBar.inactiveForeground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                        style={{ color: palette[assets["activityBar.inactiveForeground"]], backgroundColor: palette[assets["activityBar.background"]]}} >
                        ⚙
                    </Asset>
                </div>
                <div className="tabs">
                    <Asset className="tab activeTab" assetName="tab.activeBackground" assetFore="tab.activeForeground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <span>{icon1} ActiveTab.js</span>
                    </Asset>
                    <Asset className="tab inactiveTab" assetName="tab.inactiveBackground" assetFore="tab.inactiveForeground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <span>{icon0} bg1.json</span>
                    </Asset>
                    <Asset className="tab inactiveTab" assetName="tab.inactiveBackground" assetFore="tab.inactiveForeground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <span>{icon0} bg2.json</span>
                    </Asset>
                    <Asset className="editorGroupHeader" assetName="editorGroupHeader.tabsBackground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit} />
                </div>
                <div className="sideBarContainer">
                    <Asset className="sideBar" assetName="sideBar.background" assetFore="sideBar.foreground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <span>EXPLORER</span>
                    </Asset>
                    <Asset className="sideBarSectionHeader" assetName="sideBarSectionHeader.background" assetFore="sideBarSectionHeader.foreground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <span>◢ OPEN EDITORS</span>
                    </Asset>
                    <Asset className="sideBar" assetName="sideBar.background" assetFore="sideBar.foreground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <OpenEditors />
                    </Asset>
                    <Asset className="sideBarSectionHeader" assetName="sideBarSectionHeader.background" assetFore="sideBarSectionHeader.foreground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <span>◢ MYPROJECTNAME</span>
                    </Asset>
                    <Asset className="sideBar" assetName="sideBar.background" assetFore="sideBar.foreground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <FileStructure />
                    </Asset>
                    <Asset className="sideBarSectionHeader" assetName="sideBarSectionHeader.background" assetFore="sideBarSectionHeader.foreground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <span>◢ OUTLINE</span>
                    </Asset>
                    <Asset className="sideBar" assetName="sideBar.background" assetFore="sideBar.foreground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <Asset className="filterBox" assetName="input.background" assetFore="input.foreground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                            Filter
                        </Asset>
                        <FileStructure lines={["◢ ⊏ App", "\t⊞ handleColorChange", "\t⊞ render", "◢ WindowPreview", "\t⊞ handleClick", "\t⊞ handleEnter", "\t⊞ handleExit"]} />
                    </Asset>
                </div>
                <div className="rightContainer">
                    <Asset className="miniMapSection" assetName="editor.background" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit} />
                    <Asset className="" assetName="editor.background" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit} />
                    <Asset className="scrollBar" assetName="scrollbarSlider.background" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit} />
                    <Asset className="" assetName="editor.background" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit} />
                </div>
                <Asset className="panel" assetName="panel.background" assetFore="terminal.foreground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                    <div className="terminalText">
                        <div className="problems">
                            PROBLEMS
                            <Asset className="badge" assetName="badge.background" assetFore="badge.foreground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit} >
                                23
                            </Asset>
                        </div>
                        <div className="output">OUTPUT</div>
                        <div className="debugConsole">DEBUG CONSOLE</div>
                        <div className="terminal">TERMINAL</div>
                        <Asset className="panelDropdown" assetName="dropdown.background" assetFore="dropdown.foreground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>1: node ▾</Asset>
                        <div className="panelButtons">➕ 🗖 🗑 ˄ ✕</div>
                        <div className="console">
                            You can now view my-app in the browser. <br />
                            <br />
                            Local:  http://localhost:3000/ <br />
                            On Your Network:  http://192.168.1.182:3000/ <br /><br />
                            >
                        </div>
                    </div>
                </Asset>
                <Asset className="editor" assetName="editor.background" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                    <CodeExample />
                    <Asset className="contextMenu" assetName="menu.background" assetFore="menu.foreground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                        <ContextMenuItem text="Go to definition" shortcut="F12" />
                        <ContextMenuItem text="Peek definition" shortcut="Alt+F12" />
                        <Asset className="contextMenuItemSeparator" assetName="menu.separatorBackground" assetFore="menu.separatorBackground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                            style={{ color: palette[assets["menu.separatorBackground"]] }}>
                            <hr />
                        </Asset>

                        <ContextMenuItem text="Rename Symbol" shortcut="F2" />
                        <Asset className="contextMenuItemHighlighted" assetName="menu.selectionBackground" assetFore="menu.selectionForeground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                            <ContextMenuItem text="Style Settings" shortcut="Ctrl+Win" />
                        </Asset>
                        <ContextMenuItem text="Refactor..." shortcut="Ctrl+Shift+R" />

                        <Asset className="contextMenuItemSeparator" assetName="menu.separatorBackground" assetFore="menu.separatorBackground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                            style={{ color: palette[assets["menu.separatorBackground"]] }}>
                            <hr />
                        </Asset>

                        <ContextMenuItem text="Cut" shortcut="Ctrl+X" />
                        <ContextMenuItem text="Copy" shortcut="Ctrl+C" />
                        <ContextMenuItem text="Paste" shortcut="Ctrl+V" />

                        <Asset className="contextMenuItemSeparator" assetName="menu.separatorBackground" assetFore="menu.separatorBackground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                            style={{ color: palette[assets["menu.separatorBackground"]] }}>
                            <hr />
                        </Asset>
                        <ContextMenuItem text="Command Pallette" shortcut="Ctrl+Shift+P" />

                    </Asset>
                </Asset>
                <Asset className="statusBar" assetName="statusBar.background" assetFore="statusBar.foreground" palette={palette} assets={assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}>
                    <StatusBar />
                </Asset>


            </div >
        )
    }
}

export default WindowPreview;