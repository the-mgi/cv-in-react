import React from 'react';
import './header.styles.css';
import TextWithIconComponent from "../generic-components/text-with-icon/text-with-icon.component";

const HeaderComponent = ({name, subtitle, subSubList, imageLink}) => {
	return (
		<>
			<div className="data-image d-flex flex-row justify-content-between">
				<div>
					<h2>{name.toUpperCase()}</h2>
					<h4 className="color-default">{subtitle}</h4>
					<div className="d-flex flex-row">
						{subSubList.map(singleObject => {
							return <TextWithIconComponent text={singleObject.text} icon={singleObject.icon}/>
						})}
					</div>
				</div>
				<div>
					<img src={imageLink} alt="UserImage"/>
				</div>
			</div>
		</>
	);
};

export default HeaderComponent;
