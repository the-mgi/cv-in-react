import React from 'react';
import HeaderHRComponent from "../generic-components/headers-hr/header-hr.component";

const EducationComponent = ({educationsArray}) => {
	return (
		<>
			<HeaderHRComponent title="Education"/>
			<div className="all-educations">
				{educationsArray.map(singleEducation => {
					return (
						<div className="d-flex flex-column mb-3">
							<h3>{singleEducation.educationTitle}</h3>
							<h5 className="color-default">{singleEducation.instituteName} - {singleEducation.instituteCity}</h5>
							<div className="d-flex flex-row">
								<span className="fas fa-calendar mr-2"/>
								<span>{singleEducation.startMonth} {singleEducation.startYear} - {singleEducation.isOngoing ? 'Ongoing' : (`${singleEducation.endMonth} ${singleEducation.endYear}`)}</span>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default EducationComponent;
