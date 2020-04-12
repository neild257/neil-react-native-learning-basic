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
                    <GoalItem onDelete={() => props.onDeleteItem(itemData.item.key)} value={itemData.item.value} />
                );
            }} 
      />
    );
}