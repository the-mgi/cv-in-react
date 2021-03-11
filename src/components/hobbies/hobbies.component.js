import React from 'react';
import HeaderHRComponent from "../generic-components/headers-hr/header-hr.component";
import './hobbies.styles.css';

const HobbiesComponent = ({hobbiesArray}) => {
	return (
		<>
			<HeaderHRComponent title="Hobbies"/>
			<div>
				{hobbiesArray.map(singleHobby => {
					return (
						<span style={{fontSize: '18px'}} className="badge rounded-pill mr-4 mb-4 p-3" key={singleHobby.id}>{singleHobby.name}</span>
					);
				})}
			</div>
		</>
	);
};

export default HobbiesComponent;
