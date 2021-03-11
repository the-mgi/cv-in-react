import React from 'react';

const TextWithIconComponent = ({text, icon}) => {
	return (
		<span className="d-flex flex-row align-items-center mr-3"><span className={`${icon} color-secondary`}/><span className="mx-1">{text}</span></span>
	);
};

export default TextWithIconComponent;
