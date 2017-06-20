import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from './index.js';

describe('valueSrip', () => {
	it('should show the header', () => {
		let wrapper = shallow(<Header />);
		let header = wrapper.find('header');
		
		expect(header.length).to.equal(1);
		expect(header.find('#burgerMenu').length).to.equal(1);
		expect(header.find('#pageTitle').length).to.equal(1);
		expect(header.find('#user').length).to.equal(1);
	});
});