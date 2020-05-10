import React from 'react';
import ActionButton from 'react-native-action-button';
import { Icon } from 'react-native-elements';

import themeSchema from '../../theme/themeSchema';

interface menuPropsI {
    navigation: any;
}

const Menu = (props: menuPropsI) => {
    return (
        <ActionButton buttonColor={themeSchema.colors.blues[700]}>
            <ActionButton.Item
                buttonColor={themeSchema.colors.oranges[700]}
                title="Dungeon"
                onPress={() => props.navigation.navigate('DungeonTable')}
            >
                <Icon name="door" type="material-community" color="white" />
            </ActionButton.Item>
            <ActionButton.Item
                buttonColor={themeSchema.colors.oranges[700]}
                title="Eventos"
                onPress={() => props.navigation.navigate('EventsTable')}
            >
                <Icon name="skull" type="material-community" color="white" />
            </ActionButton.Item>
            <ActionButton.Item
                buttonColor={themeSchema.colors.oranges[700]}
                title="Tesoros"
                onPress={() => props.navigation.navigate('TreasuresTable')}
            >
                <Icon name="treasure-chest" type="material-community" color="white" />
            </ActionButton.Item>
        </ActionButton>
    );
};

export default Menu;
