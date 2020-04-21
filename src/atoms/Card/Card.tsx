import React from 'react';
import { Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import styled from 'styled-components/native';

import themeSchema from '../../theme/themeSchema';

const windowHeight = Dimensions.get('screen').height;
const BOTTON_MARGIN = 100;

const getCardSize = () =>
    windowHeight - BOTTON_MARGIN < themeSchema.sizes.card.medium.height
        ? themeSchema.sizes.card.small
        : themeSchema.sizes.card.medium;

const cardSize = getCardSize();

interface cardPropsI {
    source: any;
    onPress?: () => void | undefined;
    onRevert?: () => void | undefined;
}

const CardContainer = styled.View`
    flex: 1;
    width: ${cardSize.width}px;
    margin: ${themeSchema.space[4]}px;
    justify-content: center;
    align-items: center;
`;

const IconContaier = styled.View`
    flex: 1;
`;

const TouchableCard = styled.TouchableHighlight`
    width: ${cardSize.width}px;
    height: ${cardSize.height}px;
    border-radius: ${themeSchema.radii[6]}px;
`;

const ImageCard = styled.Image`
    width: ${cardSize.width}px;
    height: ${cardSize.height}px;
    border-radius: ${themeSchema.radii[6]}px;
`;

const Card = (props: cardPropsI) => {
    const { source, onPress, onRevert } = props;

    const renderRevertButton = () => {
        return (
            onRevert && (
                <IconContaier>
                    <Icon
                        name="cached"
                        size={themeSchema.sizes.icon.xsmall}
                        color={themeSchema.colors.blues[700]}
                        onPress={onRevert}
                        reverse
                    />
                </IconContaier>
            )
        );
    };
    return (
        <CardContainer>
            <TouchableCard onPress={onPress}>
                <ImageCard source={source} />
            </TouchableCard>
            {renderRevertButton()}
        </CardContainer>
    );
};

export default Card;
