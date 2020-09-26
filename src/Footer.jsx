import React from "react";

const Footer = (props) => {
	return (
		<div className="footer">
			<ul>
				{props.links
					? props.links.map((item, key) => (
							<li key={key}>
								<a
									href={item.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									{item.label}
								</a>
							</li>
					  ))
					: null}
				{props.copyrightName ? (
					<li>
						{props.copyrightName}{" "}
						<i class="material-icons">copyright</i>{" "}
						{new Date().getFullYear()}
					</li>
				) : null}
			</ul>
		</div>
	);
};

export default Footer;
