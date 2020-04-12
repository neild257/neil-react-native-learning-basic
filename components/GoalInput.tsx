import React from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal
} from 'react-native';


export default function GoalInput(props: any) {
    
    const inputTextChangeHandler = (text: string) => {
        props.onStateChange(text);
    }
    
    const addGoalHandler = () => {
        props.onButtonPress();
        props.onAddPressed();
        props.clearText();
    }

    return (
        <Modal visible={props.isModalVisible} animationType="slide">
            <View style={styles.formGroup}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Course Goals" 
                    onChangeText={inputTextChangeHandler}
                    value={props.text}
                />
                <View style={styles.actionWrapper}>
                    {/* Buttons cannot have their own styles will need a view wrapper for them to have some styles */}
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={props.closeModel}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Add" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    formGroup: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    textInput: {
        width: '80%',
        borderColor: 'blue',
        borderWidth: 1,
        padding: 5,
        marginRight: 5,
        marginBottom: 5
    },
    button: {
        width: '20%'
    }
});
