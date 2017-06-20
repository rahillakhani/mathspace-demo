import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';

require('./style.scss');

class Body extends Component {
	render() {
		return(
			<div className="app">
				<App />
			</div>
		)
	}
}

ReactDOM.render(<Body/>, document.getElementById('some-app'));