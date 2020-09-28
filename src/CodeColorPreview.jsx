import React, { Component } from "react";
import CodeAsset from "./CodeAsset";
// TODO: Implement this to give a preview of code token colours

export default class CodeColorPreview extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(assetName) {
		this.props.handleClick(assetName, "tokenColors");
	}

	render() {
		return (
			<div className="codeColorPreview">
				{this.props.codeWords.map((item, key) => (
					<CodeAsset
						key={key}
						assetName={item.name}
						assets={this.props.assets}
						palette={this.props.palette}
						// handleClick={this.handleClick}
						// handleEnter={this.props.handleEnter}
						// handleExit={this.props.handleExit}
						handleClick={() => {}}
						handleEnter={() => {}}
						handleExit={() => {}}
					>
						{item.text}
					</CodeAsset>
				))}
			</div>
		);
	}
}
