import React, { Component } from 'react';
import axios from 'axios';
import dataSet from '../../service/datacall.js';
import Header from '../header';
import Timeline from '../timeline';

export default class app extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTime: 0,
			dataRec: {},
			val: 0
		}

	}

	componentDidMount() {
		axios.get('/data', {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then((resp) => {
				this.setState({
					dataRec: resp.data
				})
			})
			.catch(err => {
				console.log(err);
				this.setState({
					dataRec: {}
				})
			});
	}
	getSelected(e) {
		let newVal = this.state.val + parseInt(e.target.id);
		if (newVal >= 0 && newVal < this.state.dataRec.subtopics.length) {
			this.setState({
				val: newVal
			});
		}
	}
	setContent(){
		// let dataArr = Object.keys(this.state.dataRec).length > 0 &&
		// 					this.state.dataRec.subtopics.map(topic => 
		// 						<li key={ topic.title }>
		// 							{ topic.title }
		// 						</li>
		// 					)
		// console.log(dataArr);
		let dataArr = Object.keys(this.state.dataRec).length > 0 && 
						this.state.dataRec.subtopics.map((topic,index )=>{ 
							return topic.title
						})
						// this.state.dataRec.subtopics
						// .map( x => x.title)
		// console.log(this.state.val);
		console.log(dataArr[this.state.val]);
		return <li>{ dataArr[this.state.val] }</li>;
	}

	render() {

		return (
			<div>
				<Header />

				{ Object.keys(this.state.dataRec).length > 0 &&
					<Timeline
						selected={ this.state.val }
						timelength={ Object.keys(this.state.dataRec).length }
						onClick={ this.getSelected.bind(this) }
					/>
				}
				<section className="main-container" id="timeline_container">
					<ul id="timeline">
						{ this.setContent() }
					</ul>
				</section>

			</div>
		)
	}
}

// const app = ({ data }) => (

// );

// export default app;