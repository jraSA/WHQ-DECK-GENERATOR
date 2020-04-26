import React from 'react';
import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';

import Menu from '../../molecules/Menu';

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

interface TablePropsI {
    renderItems: () => any;
    navigation: any;
}

const Table = (props: TablePropsI) => {
    return (
        <ImageBackground style={styles.imgBackground} source={require('../../../assets/table.png')}>
            <DeckContainer>{props.renderItems()}</DeckContainer>
            <Menu navigation={props.navigation} />
        </ImageBackground>
    );
};

export default Table;
