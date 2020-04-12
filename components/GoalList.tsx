import React from 'react';
import { FlatList } from 'react-native';
import GoalItem from './GoalItem';

export default function GoalList(props: any) {
    return (
        <FlatList 
            data={props.list}
            keyExtractor={(itemData) => itemData.key}
            renderItem={(itemData) => {
                return (
                    <GoalItem value={itemData.item.value} />
                );
            }} 
      />
    );
}