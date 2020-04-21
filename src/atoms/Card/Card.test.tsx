import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Card from './index';

describe('Card Snapshot test', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Card />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
