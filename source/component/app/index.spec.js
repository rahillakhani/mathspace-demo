import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import App from './index.js';

describe('valueSrip', () => {
	it('should show the timeline', () => {
		let wrapper = mount(<App />);
		let leftArr = wrapper.find('#timeline_container #left');
		let RightArr = wrapper.find('#timeline_container #right');
		expect(leftArr.text()).to.be.equal('<');
		expect(RightArr.text()).to.be.equal('>');
		const subtopics = [{"index":1,"title":"Triangles","completed":true},{"index":2,"title":"Angle Sum","completed":true},{"index":3,"title":"Similar Triangles","completed":true},{"index":4,"title":"Congruence","completed":false},{"index":5,"title":"Enlargements","completed":false},{"index":6,"title":"Parallel Lines","completed":false},{"index":7,"title":"Pythagoras Theorem","completed":false},{"index":8,"title":"Revision","completed":false},{"index":9,"title":"Topic Test","completed":false}]
		setTimeout(()=>{
			expect(wrapper.find('#timeline_container #timeline li').length).to.be.equal(9);
			expect(wrapper.find('#timeline_container #timeline li').first().props().className).to.be.equal('selected');
		})

	});
});