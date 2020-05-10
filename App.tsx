import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import DungeonTable from './src/organisms/DungeonTable';
import EventsTable from './src/organisms/EventsTable';

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
        initialRouteName: 'EventsTable',
    }
);

const Navigation = createAppContainer(stackNavigator);

export default function App() {
    return <Navigation />;
}
