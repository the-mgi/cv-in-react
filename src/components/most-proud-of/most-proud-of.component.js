import React from 'react';
import HeaderHRComponent from "../generic-components/headers-hr/header-hr.component";

const MostProudOfComponent = ({array}) => {
	return (
		<>
			<HeaderHRComponent title="Most proud of"/>
			{array.map(singleProud => {
				return (
					<div className="main-con d-flex flex-row">
						<div className="col-2"><span style={{fontSize: '50px'}} className={`${singleProud.icon} color-default m-0 p-0`}/></div>
						<div className="d-flex flex-column col-10">
							<h4><strong>{singleProud.title}</strong></h4>
							<span>{singleProud.description}</span>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default MostProudOfComponent;
