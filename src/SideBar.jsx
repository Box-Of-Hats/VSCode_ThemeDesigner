import React from "react";
import Asset from "./Asset";
import IndentedList from "./IndentedList";
import OpenEditors from "./OpenEditors";

export class SideBar extends React.Component {
	render() {
		return (
			<div className="side_bar">
				<Asset
					assetProps={["sideBar.background", "sideBar.foreground"]}
					className="side_bar__item"
					palette={this.props.palette}
					assets={this.props.assets}
					handleClick={this.props.handleClick}
					handleEnter={this.props.handleEnter}
					handleExit={this.props.handleExit}
				>
					<span>EXPLORER</span>
				</Asset>
				<Asset
					assetProps={[
						"sideBarSectionHeader.background",
						"sideBarSectionHeader.foreground",
					]}
					className="side_bar__section_header"
					palette={this.props.palette}
					assets={this.props.assets}
					handleClick={this.props.handleClick}
					handleEnter={this.props.handleEnter}
					handleExit={this.props.handleExit}
				>
					<span>◢ OPEN EDITORS</span>
				</Asset>
				<Asset
					assetProps={["sideBar.background", "sideBar.foreground"]}
					className="side_bar__item"
					palette={this.props.palette}
					assets={this.props.assets}
					handleClick={this.props.handleClick}
					handleEnter={this.props.handleEnter}
					handleExit={this.props.handleExit}
				>
					<OpenEditors lines={this.props.openEditors} />
				</Asset>
				<Asset
					assetProps={[
						"sideBarSectionHeader.background",
						"sideBarSectionHeader.foreground",
					]}
					className="side_bar__section_header"
					palette={this.props.palette}
					assets={this.props.assets}
					handleClick={this.props.handleClick}
					handleEnter={this.props.handleEnter}
					handleExit={this.props.handleExit}
				>
					<span>◢ MYPROJECTNAME</span>
				</Asset>
				<Asset
					assetProps={["sideBar.background", "sideBar.foreground"]}
					className="side_bar__item"
					palette={this.props.palette}
					assets={this.props.assets}
					handleClick={this.props.handleClick}
					handleEnter={this.props.handleEnter}
					handleExit={this.props.handleExit}
				>
					<IndentedList lines={this.props.fileStructure} />
				</Asset>
				<Asset
					assetProps={[
						"sideBarSectionHeader.background",
						"sideBarSectionHeader.foreground",
					]}
					className="side_bar__section_header"
					palette={this.props.palette}
					assets={this.props.assets}
					handleClick={this.props.handleClick}
					handleEnter={this.props.handleEnter}
					handleExit={this.props.handleExit}
				>
					<span>◢ OUTLINE</span>
				</Asset>
				<Asset
					assetProps={["sideBar.background", "sideBar.foreground"]}
					className="side_bar__item"
					palette={this.props.palette}
					assets={this.props.assets}
					handleClick={this.props.handleClick}
					handleEnter={this.props.handleEnter}
					handleExit={this.props.handleExit}
				>
					<Asset
						assetProps={["input.background", "input.foreground"]}
						className="filterBox"
						palette={this.props.palette}
						assets={this.props.assets}
						handleClick={this.props.handleClick}
						handleEnter={this.props.handleEnter}
						handleExit={this.props.handleExit}
					>
						<span>Filter</span>
					</Asset>
					<IndentedList lines={this.props.fileOutline} />
				</Asset>
			</div>
		);
	}
}
