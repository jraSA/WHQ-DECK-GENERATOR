import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Table from './index';

describe('EventsTable Snapshot test', () => {
    it('renders correctly', () => {
        const mockNavigation = jest.fn();
        const mockRenderItems = jest.fn();
        const tree = renderer.create(<Table navigation={mockNavigation} renderItems={mockRenderItems} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
