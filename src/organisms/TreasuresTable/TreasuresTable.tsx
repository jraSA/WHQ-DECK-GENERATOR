import React from 'react';
import styled from 'styled-components/native';

import treasuresDeck, { back } from '../../assets/treasuresDeck';
import shuffle from '../../helpers/shuffle/Shuffle';
import Deck from '../../molecules/Deck';
import Table from '../../molecules/Table';

const DeckContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-self: center;
`;

const TreasuresTable = (props: { navigation: any }) => {
    const renderItems = () => {
        return (
            <DeckContainer>
                <Deck generateDeck={() => shuffle(treasuresDeck)} back={back} />
            </DeckContainer>
        );
    };

    return <Table renderItems={renderItems} navigation={props.navigation} />;
};

export default TreasuresTable;
