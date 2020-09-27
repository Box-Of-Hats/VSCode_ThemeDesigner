import React from "react";
import Asset from "./Asset";
export class Terminal extends React.Component {
	render() {
		return (
			<Asset
				assetProps={["terminal.background", "terminal.foreground"]}
				className="panel"
				palette={this.props.palette}
				assets={this.props.assets}
				handleClick={this.props.handleClick}
				handleEnter={this.props.handleEnter}
				handleExit={this.props.handleExit}
			>
				<div className="terminalText">
					<div className="problems">
						PROBLEMS
						<Asset
							assetProps={[
								"badge.background",
								"badge.foreground",
							]}
							className="badge"
							palette={this.props.palette}
							assets={this.props.assets}
							handleClick={this.props.handleClick}
							handleEnter={this.props.handleEnter}
							handleExit={this.props.handleExit}
						>
							{this.props.problemCount}
						</Asset>
					</div>
					<div className="output">OUTPUT</div>
					<div className="debugConsole">DEBUG CONSOLE</div>
					<div className="terminal">TERMINAL</div>
					<Asset
						assetProps={[
							"dropdown.background",
							"dropdown.foreground",
						]}
						className="panelDropdown"
						palette={this.props.palette}
						assets={this.props.assets}
						handleClick={this.props.handleClick}
						handleEnter={this.props.handleEnter}
						handleExit={this.props.handleExit}
					>
						1: node ▾
					</Asset>
					<div className="panelButtons">
						<span role="img" aria-label="Plus">
							<i class="material-icons">add</i>
						</span>
						<span role="img" aria-label="Window">
							<i class="material-icons">vertical_split</i>
						</span>
						<span role="img" aria-label="Bin">
							<i class="material-icons">delete</i>
						</span>
						<span role="img" aria-label="Up arrow">
							<i class="material-icons">expand_less</i>
						</span>
						<span role="img" aria-label="Cross">
							<i class="material-icons">close</i>
						</span>
					</div>
					<div className="console">
						You can now view my-app in the browser. <br />
						<br />
						Local: http://localhost:3000/ <br />
						On Your Network: http://192.168.1.182:3000/ <br />
						<br />
					</div>
				</div>
			</Asset>
		);
	}
}
