import React from 'react';
import styled from 'styled-components/native';

import eventDeck, { back } from '../../assets/eventDeck';
import shuffle from '../../helpers/shuffle/Shuffle';
import Deck from '../../molecules/Deck';
import Table from '../../molecules/Table';

const DeckContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-self: center;
`;

const DungeonTable = (props: { navigation: any }) => {
    const renderItems = () => {
        return <DeckContainer />;
    };

    return <Table renderItems={renderItems} navigation={props.navigation} />;
};

export default DungeonTable;
