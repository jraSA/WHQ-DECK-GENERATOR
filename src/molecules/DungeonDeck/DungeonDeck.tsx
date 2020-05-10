import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import dungeonDeck, { back, objectiveInstances } from '../../assets/dungeonDeck';
import Card from '../../atoms/Card';
import shuffle from '../../helpers/shuffle/Shuffle';
import Deck from '../Deck';

const DeckContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-self: center;
`;

const DungeonDeck = () => {
    const getRandomInstance = () => Math.floor(Math.random() * objectiveInstances.length);

    const [objectiveInstanceIndex, setObjectiveInstanceIndex] = useState(getRandomInstance());

    const getObjectiveInstanceIndexInsideDeck = (draft: any[]) => draft.length - 6 + Math.floor(Math.random() * 6);

    const generateDungeonDeck = () => {
        const draft = shuffle(dungeonDeck).slice(0, 11);
        const index = getObjectiveInstanceIndexInsideDeck(draft);

        draft.splice(index, 0, objectiveInstances[objectiveInstanceIndex]);
        return draft;
    };
    const [initialDeck, setInitialDeck] = useState(generateDungeonDeck());

    const resetDungeonDeck = () => {
        setObjectiveInstanceIndex(getRandomInstance());
        setInitialDeck(generateDungeonDeck());
    };

    return (
        <DeckContainer>
            <View>
                <Card source={objectiveInstances[objectiveInstanceIndex]} onRevert={resetDungeonDeck} />
            </View>
            <Deck generateDeck={generateDungeonDeck} back={back} initialDeck={initialDeck} />
        </DeckContainer>
    );
};

export default DungeonDeck;
