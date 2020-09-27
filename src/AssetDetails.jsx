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
		return <></>
	}

	return (
		<div className="asset-details">
			{[props.primary, props.secondary].map((property) => {
				return (
					property && (
						<div className="asset-details__property">
							<div className="asset-details__name">
								{property.name}
							</div>
							<div style={{ backgroundColor: property.color }} className="asset-details__colour"></div>
						</div>
					)
				);
			})}
		</div>
	);

};
