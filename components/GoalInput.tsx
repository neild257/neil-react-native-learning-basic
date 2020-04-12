import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';


export default function GoalInput(props: any) {
    
    const inputTextChangeHandler = (text: string) => {
        props.onStateChange(text);
    }
    
    const addGoalHandler = () => {
        props.onButtonPress();
    }

    return (
        <View style={styles.formGroup}>
            <TextInput 
                style={styles.textInput} 
                placeholder="Course Goals" 
                onChangeText={inputTextChangeHandler}
                value={props.text}
            />
            <Button title="Add" onPress={addGoalHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    formGroup: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textInput: {
        width: '80%',
        borderColor: 'blue',
        borderWidth: 1,
        padding: 5,
        marginRight: 5
    },
});
