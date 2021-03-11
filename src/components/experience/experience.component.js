import React from 'react';
import HeaderHRComponent from "../generic-components/headers-hr/header-hr.component";

const ExperiencesComponent = ({experiencesArray}) => {
	return (
		<>
			<HeaderHRComponent title="Experience"/>
			<div className="data">
				{experiencesArray.map(singleExperience => {
					return (
						<>
							<h3>{singleExperience.title}</h3>
							<h5 className="color-default"><strong>{singleExperience.company}</strong></h5>
							<div className="d-flex flex-row w-75 justify-content-between">
								<div>
									<span className="fas fa-calendar mr-2"/>
									<span>{singleExperience.startMonth} {singleExperience.startYear} - {singleExperience.isOngoing ? 'Ongoing' : (`${singleExperience.endMonth} ${singleExperience.endYear}`)}</span>
								</div>
								<div>
									<span className="fas fa-map mr-2"/>
									<span>{singleExperience.location}</span>
								</div>
							</div>
							<div>
								<ul>
									{singleExperience.keyPoints.map(singleKeyPoint => {
										return (
											<li>{singleKeyPoint}</li>
										);
									})}
								</ul>
							</div>
							<hr style={{borderTop: '2px dashed', opacity: '50%'}}/>
						</>
					);
				})}
			</div>
		</>
	);
};

export default ExperiencesComponent;
