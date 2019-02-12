import React from 'react'

const Footer = (props) => {
    return <div className="footer">
        <ul>
            {props.links ? props.links.map((item, key) => <li key={key}><a href={item.url}>{item.label}</a></li>) : null}
            {props.copyrightName ? <li>{props.copyrightName} &copy; {new Date().getFullYear()}</li> : null} 
        </ul>
    </div>
}

export default Footer;