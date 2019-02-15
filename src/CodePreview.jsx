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

    copyTextToClipboard(){
        let textArea = document.getElementsByClassName("codePreview")[0];
        textArea.select();
        document.execCommand("copy");
    }

    render() {
        var codePreview = this.generatePreviewText();

        return (
            <div className="codePreviewContainer">
                <textarea className="codePreview" value={codePreview} readOnly>
                </textarea >
                <div className="button button--blue" onClick={this.copyTextToClipboard}><i class="material-icons">file_copy</i> Copy</div>
                <div className="button button--minus"><i class="material-icons">save_alt</i> save</div>
            </div>
        )
    }
}

export default CodePreview;
