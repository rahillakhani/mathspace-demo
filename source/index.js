import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';

class Body extends Component {
	render() {
		return(
			<App />
		)
	}
}

ReactDOM.render(<Body />, document.getElementById('some-app'));