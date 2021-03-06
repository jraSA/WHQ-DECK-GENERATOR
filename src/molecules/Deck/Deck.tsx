import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import Card from '../../atoms/Card';
import themeSchema, { cardSize, cardMargin } from '../../theme/themeSchema';

interface deckPropsI {
    generateDeck: () => any[];
    initialDeck?: any[];
    back: any;
}
const DeckContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: ${themeSchema.space[4]}px;
`;

const CardHolder = styled.View`
    width: ${cardSize.width}px;
    height: ${cardSize.height}px;
    margin: ${cardMargin}px;
`;

const Deck = (props: deckPropsI) => {
    const { generateDeck, back, initialDeck } = props;
    const [deck, setDeck] = useState(initialDeck ? initialDeck : generateDeck());
    const [hand, setHand] = useState([] as any[]);
    const [currentCard, setCurrentCard] = useState();

    const drawCard = (): any => {
        const newDeck = deck;
        if (deck.length) {
            const card = newDeck.shift();
            const newHand = hand;
            newHand.unshift(card);
            setHand(newHand);
            setDeck(newDeck);
            setCurrentCard(card);
        }
    };

    const shuffleDeck = () => {
        const newDeck = generateDeck();
        const newHand = [] as any[];
        const card = undefined;
        setHand(newHand);
        setDeck(newDeck);
        setCurrentCard(card);
    };

    const insertCardIntoDeck = (card: any) => {
        const newDeck = deck;
        const rndPoistion = Math.floor(Math.random() * deck.length - 1);
        newDeck.splice(rndPoistion, 0, card);
        setDeck(newDeck);
    };

    const returnCardToDeck = () => {
        const newHand = hand;
        const card = newHand.shift();
        setHand(newHand);
        setCurrentCard(newHand.length ? newHand[0] : undefined);
        insertCardIntoDeck(card);
    };

    const renderCurrentCard = () => {
        return currentCard ? <Card source={currentCard} onRevert={returnCardToDeck} /> : <CardHolder />;
    };

    useEffect(() => {
        initialDeck && shuffleDeck();
    }, [initialDeck]);

    return (
        <DeckContainer>
            <Card source={back} onPress={drawCard} onRevert={shuffleDeck} />
            {renderCurrentCard()}
        </DeckContainer>
    );
};

export default Deck;
