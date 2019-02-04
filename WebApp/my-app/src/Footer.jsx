import React from 'react'

const Footer = ({ props }) => {
    return <div className="footer">
        <ul>
            <li>
                <a href="https://github.com/Box-Of-Hats/VSCode_ThemeGenerator/">Source</a>
            </li>
            <li>
                <a href="https://box-of-hats.github.io/">My Work</a>
            </li>
            <li>
                |
            </li>
            <li>
                Box Of Hats &copy; {new Date().getFullYear()}
            </li>
        </ul>
    </div>
}

export default Footer;