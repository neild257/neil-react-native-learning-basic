import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default function GoalItem(props: any) {
    
    return (
        <TouchableOpacity onPress={props.onDelete}>
            <View style={styles.listItems}>
                <Text>{props.value}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItems: {
        padding: 10,
        backgroundColor: '#CCC',
        marginVertical: 10,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1
    }
});