import React from "react";
import GenerateFileIcon from "./Icons";

function OpenEditors(props) {
	return props.lines.map((line) => {
		var fileIcon = GenerateFileIcon(line);
		return (
			<div className="openEditorText">
				{fileIcon}
				{line}
			</div>
		);
	});
}

export default OpenEditors;
