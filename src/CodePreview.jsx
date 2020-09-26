import React, { Component } from "react";

class CodePreview extends Component {
	constructor(props) {
		super(props);
		this.generatePreviewText = this.generatePreviewText.bind(this);
	}

	generatePreviewText() {
		var text = '"workbench.colorCustomizations": {\n';
		const allAssets = Object.keys(this.props.assets);
		allAssets.forEach((key, index) => {
			text =
				text +
				'"' +
				key +
				'": "' +
				this.props.palette[this.props.assets[key]] +
				(index === allAssets.length - 1 ? '"\n' : '",\n');
		});
		text = text + "}";
		return text;
	}

	copyTextToClipboard() {
		let textArea = document.getElementsByClassName("codePreview")[0];
		textArea.select();
		document.execCommand("copy");
	}

	download(filename, content) {
		const downloadElement = document.createElement("a");
		downloadElement.setAttribute(
			"href",
			"data:text/plain;charset=utf-8," + encodeURIComponent(content)
		);
		downloadElement.setAttribute("download", filename);

		downloadElement.style.display = "none";
		document.body.appendChild(downloadElement);

		downloadElement.click();

		document.body.removeChild(downloadElement);
	}

	render() {
		var codePreview = this.generatePreviewText();

		return (
			<div className="codePreviewContainer">
				<textarea
					className="codePreview"
					value={codePreview}
					readOnly
				/>
				<button
					className="button button--blue"
					onClick={this.copyTextToClipboard}
				>
					<i class="material-icons">file_copy</i> Copy
				</button>
				<button
					className="button button--minus"
					onClick={() => {
						this.download("code-theme.json", `{${codePreview}}`);
					}}
				>
					<i class="material-icons">save_alt</i> save
				</button>
			</div>
		);
	}
}

export default CodePreview;
