const { JSDOM } = require('jsdom');

const exposedProperties = ['window', 'navigator', 'document'];

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');

global.window = jsdom.window;
global.document = jsdom.window.document;
Object.keys(document.defaultView).forEach((property) => {
	if (typeof global[property] === 'undefined') {
		exposedProperties.push(property);
		global[property] = document.defaultView[property];
	}
});
global.requestAnimationFrame = () => {};
global.navigator = {
	userAgent: 'node.js'
};

// const documentRef = document;
