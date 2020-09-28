import React from "react";

// interface AssetDetailsProps {
// 	primary: {
// 		name: string;
// 		color: string;
// 	};
// 	secondary?: {
// 		name: string;
// 		color: string;
// 	};
// }

export const AssetDetails = (props) => {
	if (!props.primary) {
		return <></>;
	}

	return (
		<div className="asset-details">
			{[
				{ ...props.primary, icon: "switch_right" },
				{ ...props.secondary, icon: "switch_left" },
			].map((property) => {
				return (
					property &&
					property.name && (
						<div className="asset-details__property">
							<div className="material-icons asset-details__icon">
								{property.icon}
							</div>

							<div className="asset-details__name">
								{property.name}
							</div>
							<div
								style={{ backgroundColor: property.color }}
								className="asset-details__colour"
							/>
						</div>
					)
				);
			})}
		</div>
	);
};
