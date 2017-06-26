import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Timeline extends Component {
	createTimeLineElement(){
		let elemLength = this.props.timelength;
		console.log(elemLength);
		let totalElem;
		for(i = 0; i < elemLength.length; i++){
			totalElem = <a id={ i }>{ i }</a>
		}
		return totalElem;
	}
	render() {
	return (
		<div className="timeline">
			<a onClick={ this.props.onClick } id="-1" className='seq' key="0">&lt;</a>
			{/* this.props.timelength && this.createTimeLineElement */}
			<a className='seq' key="1" id="1">{ this.props.selected + 1 }</a>
			<a onClick={ this.props.onClick } id="+1" className='seq' key="2">&gt;</a>
		</div>
	)}
};
Timeline.propTypes = {
	selected: PropTypes.number.isRequired,
	timelength: PropTypes.number.isRequired
}
Timeline.defaultProps = {
	selected: 0,
	timelength: 0
}

// const Timeline = ({ length }) => {

// 	let divs = length.map((topic, index )=> <a className='seq' key={topic.title}>{index}</a>);

// 	return(
// 		<div className="timeline">
// 			<a className='seq' key="0">0</a>
// 			<a className='seq' key="1">1</a>
// 			<a className='seq' key="2">2</a>
// 			{/*{ divs }*/}
// 		</div>
// 	)
// }

// export default Timeline;