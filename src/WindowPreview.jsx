import React, { Component } from "react";
import ActivityBar from "./ActivityBar";
import Asset from "./Asset";
import ContextMenuItem from "./ContextMenuItem";
import StatusBar from "./StatusBar";
import TitleBar from "./TitleBar";
import CodeColorPreview from "./CodeColorPreview";
import { JSIcon, JSONIcon } from "./Icons";
import { SideBar } from "./SideBar";
import { Terminal } from "./Terminal";
import { AssetDetails } from "./AssetDetails";

class WindowPreview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			codePreviewText: [
				{
					name: "code1",
					text: "def",
				},
				{
					name: "code2",
					text: "function",
				},
			],
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleEnter = this.handleEnter.bind(this);
		this.handleExit = this.handleExit.bind(this);


		this.currentPrimary = undefined;
		this.currentSecondary = undefined;
	}

	handleClick(assetName, parent = "assets") {
		this.props.handleChange(assetName, parent);
	}

	handleEnter(assetProps) {
		//Remove all with the class to fix pass through
		document.querySelectorAll(".highlighted").forEach((e) => {
			e.classList.remove("highlighted");
		});
		document
			.querySelectorAll(`[data-primaryasset='${assetProps.primary.name}']`)
			.forEach((e) => {
				e.classList.add("highlighted");
			});

		this.currentPrimary = assetProps.primary
		this.currentSecondary = assetProps.secondary
		this.forceUpdate()
	}

	handleExit(assetProps) {
		document
			.querySelectorAll(`[data-primaryasset='${assetProps.primary.name}']`)
			.forEach((e) => {
				e.classList.remove("highlighted");
			});

		this.currentPrimary = undefined;
		this.currentSecondary = undefined;
		this.forceUpdate()
	}

	render() {
		const { assets, palette } = this.props;
		return (
			<div className="windowPreview">
				<Asset
					assetProps={[
						"titleBar.activeBackground",
						"titleBar.activeForeground",
					]}
					className="titleBar"
					palette={palette}
					assets={assets}
					handleClick={this.handleClick}
					handleEnter={this.handleEnter}
					handleExit={this.handleExit}
				>
					<TitleBar
						menuItems={this.props.titleBarMenuItems}
						title={this.props.titleBarTitle}
					/>
				</Asset>
				<ActivityBar
					palette={this.props.palette}
					assets={this.props.assets}
					iconNames={[
						"file_copy",
						"search",
						"code",
						"bug_report",
						"dashboard",
						"settings",
					]}
					handleClick={this.handleClick}
					handleEnter={this.handleEnter}
					handleExit={this.handleExit}
				/>
				<div className="tabs">
					<Asset
						assetProps={[
							"tab.activeBackground",
							"tab.activeForeground",
						]}
						className="tab activeTab"
						palette={palette}
						assets={assets}
						handleClick={this.handleClick}
						handleEnter={this.handleEnter}
						handleExit={this.handleExit}
					>
						<span>
							<JSIcon />
							App.js
						</span>
						<span>
							<i class="material-icons">close</i>
						</span>
					</Asset>
					<Asset
						assetProps={[
							"tab.inactiveBackground",
							"tab.inactiveForeground",
						]}
						className="tab inactiveTab"
						palette={palette}
						assets={assets}
						handleClick={this.handleClick}
						handleEnter={this.handleEnter}
						handleExit={this.handleExit}
					>
						<span>
							<JSONIcon /> bg1.json
						</span>
						<span>
							<i class="material-icons">close</i>
						</span>
					</Asset>
					<Asset
						assetProps={[
							"tab.inactiveBackground",
							"tab.inactiveForeground",
						]}
						className="tab inactiveTab"
						palette={palette}
						assets={assets}
						handleClick={this.handleClick}
						handleEnter={this.handleEnter}
						handleExit={this.handleExit}
					>
						<span>
							<JSONIcon /> bg2.json
						</span>
						<span>
							<i class="material-icons">close</i>
						</span>
					</Asset>
					<Asset
						assetProps={["editorGroupHeader.tabsBackground"]}
						className="editorGroupHeader"
						palette={palette}
						assets={assets}
						handleClick={this.handleClick}
						handleEnter={this.handleEnter}
						handleExit={this.handleExit}
					/>
				</div>
				<div className="side_bar_container">
					<SideBar
						handleClick={this.handleClick}
						handleEnter={this.handleEnter}
						handleExit={this.handleExit}
						openEditors={this.props.openEditors}
						fileStructure={this.props.fileStructure}
						fileOutline={this.props.fileOutline}
						assets={assets}
						palette={palette}
					/>
				</div>
				<div className="rightContainer">
					<Asset
						assetProps={["minimap.background"]}
						className="miniMapSection"
						palette={palette}
						assets={assets}
						handleClick={this.handleClick}
						handleEnter={this.handleEnter}
						handleExit={this.handleExit}
					>
						<div className="miniMapSection__code">
							{[
								2,
								0.5,
								1,
								3,
								1,
								0.5,
								1.5,
								0.5,
								1,
								2,
								1,
								1,
								1.5,
								2,
								0.5,
								2.5,
							].map((i) => {
								return <span style={{ width: `${i}rem` }} />;
							})}
						</div>
						<Asset
							className="miniMapSection__slider"
							assetProps={[
								"minimapSlider.background",
								"minimapSlider.hoverBackground",
							]}
							palette={palette}
							assets={assets}
							handleClick={this.handleClick}
							handleEnter={this.handleEnter}
							handleExit={this.handleExit}
						/>
					</Asset>
					<Asset
						assetProps={["editor.background"]}
						className=""
						palette={palette}
						assets={assets}
						handleClick={this.handleClick}
						handleEnter={this.handleEnter}
						handleExit={this.handleExit}
					/>
					<Asset
						assetProps={[
							"scrollbarSlider.background",
							"scrollbarSlider.hoverBackground",
						]}
						className="scrollBar"
						palette={palette}
						assets={assets}
						handleClick={this.handleClick}
						handleEnter={this.handleEnter}
						handleExit={this.handleExit}
					/>
					<Asset
						assetProps={["editor.background"]}
						className=""
						palette={palette}
						assets={assets}
						handleClick={this.handleClick}
						handleEnter={this.handleEnter}
						handleExit={this.handleExit}
					/>
				</div>
				<Terminal
					handleClick={this.handleClick}
					handleEnter={this.handleEnter}
					handleExit={this.handleExit}
					assets={assets}
					palette={palette}
					problemCount={this.props.terminalProblemCount}
				/>
				<Asset
					assetProps={["editor.background"]}
					className="editor"
					palette={palette}
					assets={assets}
					handleClick={this.handleClick}
					handleEnter={this.handleEnter}
					handleExit={this.handleExit}
				>
					<CodeColorPreview
						codeWords={this.state.codePreviewText}
						palette={palette}
						assets={this.props.tokenColors}
						handleClick={this.handleClick}
						handleEnter={this.handleEnter}
						handleExit={this.handleExit}
					/>
					<Asset
						assetProps={["menu.background", "menu.foreground"]}
						className="contextMenu"
						palette={palette}
						assets={assets}
						handleClick={this.handleClick}
						handleEnter={this.handleEnter}
						handleExit={this.handleExit}
					>
						<ContextMenuItem
							text="Go to definition"
							shortcut="F12"
						/>
						<ContextMenuItem
							text="Peek definition"
							shortcut="Alt+F12"
						/>
						<Asset
							assetProps={[
								"menu.separatorBackground",
								"menu.separatorBackground",
							]}
							className="contextMenuItemSeparator"
							palette={palette}
							assets={assets}
							handleClick={this.handleClick}
							handleEnter={this.handleEnter}
							handleExit={this.handleExit}
							style={{
								color:
									palette[assets["menu.separatorBackground"]],
							}}
						>
							<hr />
						</Asset>

						<ContextMenuItem text="Rename Symbol" shortcut="F2" />
						<Asset
							assetProps={[
								"menu.selectionBackground",
								"menu.selectionForeground",
							]}
							className="contextMenuItemHighlighted"
							palette={palette}
							assets={assets}
							handleClick={this.handleClick}
							handleEnter={this.handleEnter}
							handleExit={this.handleExit}
						>
							<ContextMenuItem
								text="Style Settings"
								shortcut="Ctrl+Win"
							/>
						</Asset>
						<ContextMenuItem
							text="Refactor..."
							shortcut="Ctrl+Shift+R"
						/>

						<Asset
							assetProps={[
								"menu.separatorBackground",
								"menu.separatorBackground",
							]}
							className="contextMenuItemSeparator"
							palette={palette}
							assets={assets}
							handleClick={this.handleClick}
							handleEnter={this.handleEnter}
							handleExit={this.handleExit}
							style={{
								color:
									palette[assets["menu.separatorBackground"]],
							}}
						>
							<hr />
						</Asset>

						<ContextMenuItem text="Cut" shortcut="Ctrl+X" />
						<ContextMenuItem text="Copy" shortcut="Ctrl+C" />
						<ContextMenuItem text="Paste" shortcut="Ctrl+V" />

						<Asset
							assetProps={[
								"menu.separatorBackground",
								"menu.separatorBackground",
							]}
							className="contextMenuItemSeparator"
							palette={palette}
							assets={assets}
							handleClick={this.handleClick}
							handleEnter={this.handleEnter}
							handleExit={this.handleExit}
							style={{
								color:
									palette[assets["menu.separatorBackground"]],
							}}
						>
							<hr />
						</Asset>
						<ContextMenuItem
							text="Command Pallette"
							shortcut="Ctrl+Shift+P"
						/>
					</Asset>
				</Asset>
				<Asset
					assetProps={[
						"statusBar.background",
						"statusBar.foreground",
					]}
					className="statusBarContainer"
					palette={palette}
					assets={assets}
					handleClick={this.handleClick}
					handleEnter={this.handleEnter}
					handleExit={this.handleExit}
				>
					<StatusBar />
				</Asset>
				<AssetDetails primary={this.currentPrimary} secondary={this.currentSecondary} />
			</div>
		);
	}
}

export default WindowPreview;
