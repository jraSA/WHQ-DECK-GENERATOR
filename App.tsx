import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import DungeonTable from './src/organisms/DungeonTable';
import EventsTable from './src/organisms/EventsTable';
import TreasuresTable from './src/organisms/TreasuresTable';

const stackNavigator = createBottomTabNavigator(
    {
        EventsTable: {
            screen: EventsTable,
            path: 'eventsTable',
            navigationOptions: () => ({
                header: null,
                tabBarVisible: false,
            }),
        },
        TreasuresTable: {
            screen: TreasuresTable,
            path: 'treasuresTable',
            navigationOptions: () => ({
                header: null,
                tabBarVisible: false,
            }),
        },
        DungeonTable: {
            screen: DungeonTable,
            path: 'dungeonTable',
            navigationOptions: () => ({
                header: null,
                tabBarVisible: false,
            }),
        },
    },
    {
        initialRouteName: 'DungeonTable',
    }
);

const Navigation = createAppContainer(stackNavigator);

export default function App() {
    return <Navigation />;
}
