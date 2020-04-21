import React from 'react';
import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';

import eventDeck, { back } from '../../assets/eventDeck';
import shuffle from '../../helpers/shuffle/Shuffle';
import Deck from '../../molecules/Deck';

const DeckContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-self: center;
`;
const styles = {
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
};

const EventsTable = (props: { navigation: any }) => {
    return (
        <ImageBackground style={styles.imgBackground} source={require('../../../assets/table.png')}>
            <DeckContainer>
                <Deck generateDeck={() => shuffle(eventDeck)} back={back} />
            </DeckContainer>
        </ImageBackground>
    );
};

export default EventsTable;
