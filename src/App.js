import './App.css';
import HeaderComponent from "./components/header/header.component";
import {
	educations,
	experienceData,
	hobbies,
	lifePhilosophy,
	mostProudOf,
	personalInformation,
	skills
} from "./constants";
import ExperiencesComponent from "./components/experience/experience.component";
import SkillsComponent from "./components/skills/skills.components";
import HobbiesComponent from "./components/hobbies/hobbies.component";
import HeaderHRComponent from "./components/generic-components/headers-hr/header-hr.component";
import React from "react";
import MostProudOfComponent from "./components/most-proud-of/most-proud-of.component";
import EducationComponent from "./components/education/education.component";

const App = () => {

	return (
		<>
			<div className="main">
				<HeaderComponent name={personalInformation.name} imageLink={personalInformation.image}
												 subtitle={personalInformation.subtitle} subSubList={personalInformation.subSubList}/>
				<div className="central-component d-flex flex-row justify-content-between">
					<div className="left">
						<ExperiencesComponent experiencesArray={experienceData}/>
						<SkillsComponent skillsArray={skills}/>
						<HobbiesComponent hobbiesArray={hobbies}/>
					</div>
					<div className="right">
						<div>
							<HeaderHRComponent title="Life Philosophy"/>
							<h2 style={{letterSpacing: '.01em'}} className="color-default"><em>"{lifePhilosophy}"</em></h2>
						</div>
						<MostProudOfComponent array={mostProudOf}/>
						<EducationComponent educationsArray={educations}/>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
