import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import TreasuresTable from './index';

describe('EventsTable Snapshot test', () => {
    it('renders correctly', () => {
        const mockNavigation = jest.fn();
        const tree = renderer.create(<TreasuresTable navigation={mockNavigation} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
