import React, { Component } from 'react';

class CodePreview extends Component {
    constructor(props) {
        super(props)
        this.generatePreviewText = this.generatePreviewText.bind(this);
    }

    generatePreviewText() {
        var text = "\"workbench.colorCustomizations\": {\n";
        Object.keys(this.props.assets).forEach(key => {
            text = text + "\"" + key + "\": \"" + this.props.palette[this.props.assets[key]] + "\",\n";
        });
        text = text + "},";
        return text
    }

    render() {
        var codePreview = this.generatePreviewText();

        return (
            <textarea className="codePreview" value={codePreview} readOnly>
            </textarea >
        )
    }
}

export default CodePreview;
