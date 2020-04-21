import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import EventsTable from './index';

describe('EventsTable Snapshot test', () => {
    it('renders correctly', () => {
        const mockNavigation = jest.fn();
        const tree = renderer.create(<EventsTable navigation={mockNavigation} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
