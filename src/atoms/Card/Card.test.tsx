import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Card from './index';

describe('Card Snapshot test', () => {
    it('renders correctly', () => {
        const back = require('../../../assets/eventCards/back.png');
        const tree = renderer.create(<Card source={back} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
