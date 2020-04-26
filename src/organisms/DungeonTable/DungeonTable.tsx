import React from 'react';
import styled from 'styled-components/native';

import dungeonDeck, { back, objectiveInstances } from '../../assets/dungeonDeck';
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
        return (
            <DeckContainer>
                <Deck generateDeck={() => shuffle(objectiveInstances)} back={back} />
                <Deck generateDeck={() => shuffle(dungeonDeck)} back={back} />
            </DeckContainer>
        );
    };

    return <Table renderItems={renderItems} navigation={props.navigation} />;
};

export default DungeonTable;
