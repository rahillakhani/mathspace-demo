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
			dataRec: {}
		}
	}

	componentDidMount() {
		axios.get('http://localhost:9090/data', {
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

	render() {

		return (
			<div>
				<Header />
				
				{ Object.keys(this.state.dataRec).length > 0 &&
					<Timeline length={ this.state.dataRec.subtopics }/>
				}
				<section id="timeline_container">
					<span id="left">&lt;</span>
					<ul id="timeline">
						{ Object.keys(this.state.dataRec).length > 0 &&
							this.state.dataRec.subtopics.map(topic => <li key={topic.title}>{topic.title}</li>)
						}
					</ul>
					<span id="right">&gt;</span>
				</section>
				
			</div>
		)
	}
}

// const app = ({ data }) => (

// );

// export default app;