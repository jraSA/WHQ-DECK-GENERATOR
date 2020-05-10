import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import DungeonDeck from './index';

describe('EventsTable Snapshot test', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<DungeonDeck />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
