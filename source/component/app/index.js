import React, { Component } from 'react';
import axios from 'axios';
import dataSet from '../../service/datacall.js';
import Header from '../header'
require('./style.scss');

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
				<header>
					<div id="burgerMenu">=</div>
					<div id="pageTitle">Title</div>
					<div id="user">User</div>
				</header>
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