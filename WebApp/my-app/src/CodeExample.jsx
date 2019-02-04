import React from 'react'

function CodeExample(props) {
    var l1 = "function CodeExample(props) {";
    var l2 = "const indent = \"30px\";"
    var l3 = "return <div>"
    var l4 = "<span style={{ paddingLeft: indent }}>{this.props.innerText}</span>"
    var l5 = "<CodeImage src={this.props.image}/>"
    var l6 = "</div>"
    return <div style={{ userSelect: "none" }}>
        <span style={{}}>{l1}</span><br />
        <span style={{ paddingLeft: "30px" }}>{l2}</span><br />
        <span style={{ paddingLeft: "30px" }}>{l3}</span><br />
        <span style={{ paddingLeft: "60px" }}>{l4}</span><br />
        <span style={{ paddingLeft: "60px" }}>{l5}</span><br />
        <span style={{ paddingLeft: "30px" }}>{l6}</span><br />
        <span style={{}}>}</span><br />
    </div>
}

export default CodeExample;