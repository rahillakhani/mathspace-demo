import React from 'react';

const Timeline = ({ length }) => {

	let divs = length.map((topic, index )=> <a className='seq' key={topic.title}>{index}</a>);

	return(
		<div>
			{ divs }
		</div>
	)
}

export default Timeline;