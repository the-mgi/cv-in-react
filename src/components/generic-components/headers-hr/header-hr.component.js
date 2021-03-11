import React from 'react';
import './header-hr.styles.css';

const HeaderHRComponent = ({title}) => {
	return (
		<div className="mt-5">
			<h1 className="color-default m-0 p-0">{title.toUpperCase()}</h1>
			<hr className="hr-settings"/>
		</div>
	);
};

export default HeaderHRComponent;
