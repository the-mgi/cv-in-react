import React from 'react';
import HeaderHRComponent from "../generic-components/headers-hr/header-hr.component";
import './skills.styles.css';

const SkillsComponent = ({skillsArray}) => {
	return (
		<div>
			<HeaderHRComponent title="Skills"/>
			{skillsArray.map(singleSkill => {
				return (
					<div className="d-flex flex-row justify-content-between w-75 mt-3">
						<h4>{singleSkill.name}</h4>
						<div style={{width: '200px'}} className="d-flex flex-row">
							<div className="innerDiv d-flex align-items-center w-100 p-0 m-0">
								<div className="outer-colored m-0 p-0" style={{width: `${singleSkill.percentage}%`}}/>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default SkillsComponent;
