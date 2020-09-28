import React, { Component } from "react";
class ThemePicker extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onChange(key) {
		this.props.onChange(key);
	}

	render() {
		return (
			<div className="themePicker">
				<select onChange={(e) => this.onChange(e.target.value)}>
					{Object.keys(this.props.themes).map((element, key) => {
						return (
							<option value={key}>
								{this.props.themes[key].name}
							</option>
						);
					})}
				</select>
			</div>
		);
	}
}

export default ThemePicker;
