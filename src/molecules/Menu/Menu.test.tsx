import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Menu from './index';

describe('Home Snapshot test', () => {
    it('renders correctly', () => {
        const navigation = {};
        const menu = renderer.create(<Menu navigation={navigation} />).toJSON();

        expect(menu).toMatchSnapshot();
    });
});
