import React from 'react';

import DungeonDeck from '../../molecules/DungeonDeck';
import Table from '../../molecules/Table';

const DungeonTable = (props: { navigation: any }) => {
    const renderItems = () => {
        return <DungeonDeck />;
    };

    return <Table renderItems={renderItems} navigation={props.navigation} />;
};

export default DungeonTable;
