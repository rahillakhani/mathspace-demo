import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Timeline from './index.js'
describe('Timeline numeric', () => {
	it('should show timeline', () => {
		var lengthArr = [
			{ index: 1, title: "Triangles", completed: true },
			{ index: 2, title: "Angle Sum", completed: true },
			{ index: 3, title: "Similar Triangles", completed: true }
		];
		const wrapper = shallow(<Timeline length={ lengthArr }/>);
		expect(wrapper.find('.seq').length).to.equal(3);
	});
});