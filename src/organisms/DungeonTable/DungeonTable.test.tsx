import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import DungeonTable from './index';

describe('EventsTable Snapshot test', () => {
    it('renders correctly', () => {
        const mockNavigation = jest.fn();
        const tree = renderer.create(<DungeonTable navigation={mockNavigation} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
