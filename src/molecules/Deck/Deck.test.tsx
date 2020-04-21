import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Deck from './index';

describe('Home Snapshot test', () => {
    it('renders correctly', () => {
        const fooGenerateDeck = jest.fn();
        const back = require('../../../assets/eventCards/back.png');
        const tree = renderer.create(<Deck generateDeck={fooGenerateDeck} back={back} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
