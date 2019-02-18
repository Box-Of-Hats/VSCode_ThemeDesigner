
import React, { PureComponent } from 'react'
import Asset from './Asset'

export default class ActivityBar extends PureComponent {
    render() {
        return (
            <div className="activityBar">
                <Asset assetProps={["activityBar.background", "activityBar.foreground"]} className="activityBarIcon" palette={this.props.palette} assets={this.props.assets} handleClick={this.props.handleClick} handleEnter={this.props.handleEnter} handleExit={this.props.handleExit}
                    style={{ color: this.props.palette[this.props.assets["activityBar.foreground"]], backgroundColor: this.props.palette[this.props.assets["activityBar.background"]] }} >
                    <span role="img" aria-label="Files"><i class="material-icons">{this.props.iconNames[0]}</i></span>
                </Asset>
                {/* TODO: fix slice */}
                {this.props.iconNames.slice(1).map((name, key) => {
                return <Asset key={key} assetProps={["activityBar.background", "activityBar.inactiveForeground"]} className="activityBarIcon" palette={this.props.palette} assets={this.props.assets} handleClick={this.props.handleClick} handleEnter={this.props.handleEnter} handleExit={this.props.handleExit}
                    style={{ color: this.props.palette[this.props.assets["activityBar.inactiveForeground"]], backgroundColor: this.props.palette[this.props.assets["activityBar.background"]] }} >
                    <span role="img" aria-label="Files"><i class="material-icons">{name}</i></span>
                </Asset>    
                })}
                <Asset assetProps={["activityBar.background"]} className="activityBarSpace" palette={this.props.palette} assets={this.props.assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit} />
                <Asset assetProps={["activityBar.background", "activityBar.foreground"]} className="activityBarIcon" palette={this.props.palette} assets={this.props.assets} handleClick={this.props.handleClick} handleEnter={this.props.handleEnter} handleExit={this.props.handleExit}
                    style={{ color: this.props.palette[this.props.assets["activityBar.foreground"]], backgroundColor: this.props.palette[this.props.assets["activityBar.background"]] }} >
                    <span role="img" aria-label="Files"><i class="material-icons">{this.props.iconNames[-1]}</i></span>
                </Asset>
                {/* <Asset assetProps={["activityBar.background", "activityBar.foreground"]} className="activityBarIcon" palette={this.props.palette} assets={this.props.assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                    style={{ color: this.props.palette[this.props.assets["activityBar.foreground"]], backgroundColor: this.props.palette[this.props.assets["activityBar.background"]] }} >
                    <span role="img" aria-label="Files"><i class="material-icons">file_copy</i></span>
                </Asset>
                <Asset assetProps={["activityBar.background", "activityBar.inactiveForeground"]} className="activityBarIcon" palette={this.props.palette} assets={this.props.assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                    style={{ color: this.props.palette[this.props.assets["activityBar.inactiveForeground"]], backgroundColor: this.props.palette[this.props.assets["activityBar.background"]] }} >
                    <span role="img" aria-label="Find"><i class="material-icons">search</i></span>
                </Asset>
                <Asset assetProps={["activityBar.background", "activityBar.inactiveForeground"]} className="activityBarIcon" palette={this.props.palette} assets={this.props.assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                    style={{ color: this.props.palette[this.props.assets["activityBar.inactiveForeground"]], backgroundColor: this.props.palette[this.props.assets["activityBar.background"]] }} >
                    <span role="img" aria-label="Git"><i class="material-icons">code</i></span>
                </Asset>
                <Asset assetProps={["activityBar.background", "activityBar.inactiveForeground"]} className="activityBarIcon" palette={this.props.palette} assets={this.props.assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                    style={{ color: this.props.palette[this.props.assets["activityBar.inactiveForeground"]], backgroundColor: this.props.palette[this.props.assets["activityBar.background"]] }} >
                    <span role="img" aria-label="Debugger"><i class="material-icons">bug_report</i></span>
                </Asset>
                <Asset assetProps={["activityBar.background", "activityBar.inactiveForeground"]} className="activityBarIcon" palette={this.props.palette} assets={this.props.assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                    style={{ color: this.props.palette[this.props.assets["activityBar.inactiveForeground"]], backgroundColor: this.props.palette[this.props.assets["activityBar.background"]] }} >
                    <span role="img" aria-label="Extensions"><i class="material-icons">dashboard</i></span>
                </Asset>
                <Asset assetProps={["activityBar.background"]} className="activityBarSpace" palette={this.props.palette} assets={this.props.assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit} />
                <Asset assetProps={["activityBar.background", "activityBar.inactiveForeground"]} className="activityBarIcon" palette={this.props.palette} assets={this.props.assets} handleClick={this.handleClick} handleEnter={this.handleEnter} handleExit={this.handleExit}
                    style={{ color: this.props.palette[this.props.assets["activityBar.inactiveForeground"]], backgroundColor: this.props.palette[this.props.assets["activityBar.background"]] }} >
                    <span role="img" aria-label="Settings"><i class="material-icons">settings</i></span>
                </Asset> */}
            </div>
        )
    }
}
