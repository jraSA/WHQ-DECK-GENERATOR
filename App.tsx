import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import EventsTable from './src/organisms/EventsTable';

const stackNavigator = createStackNavigator(
    {
        EventsTable: {
            screen: EventsTable,
            path: 'eventsTable',
            navigationOptions: () => ({
                header: null,
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
