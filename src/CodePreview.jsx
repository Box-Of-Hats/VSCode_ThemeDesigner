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
                <div className="button button-blue" onClick={this.copyTextToClipboard}><span role="img" aria-label="clipboard">📋</span> Copy</div>
                <div className="button button-minus" >Download</div>
            </div>
        )
    }
}

export default CodePreview;
