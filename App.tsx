import React, { useState } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

export default function App() {
  const [enteredText, enteredTextState] = useState('');
  const [goalsList, goalsListState] = useState(([] as any[]));

  const onDeleteListHandler = (key: string) => {
    goalsListState((prevList: any[]) => {
      return [ ...prevList.filter((item: any) => item.key !== key )];
    });
  }

  return (
    <View style={styles.container}>
      <GoalInput 
        text={enteredText} 
        onStateChange={(text: string) => enteredTextState(text)}
        onButtonPress={() => {
          return goalsListState((prevList: string[]) => [...prevList, {
            key: enteredText,
            value: enteredText
          }])
        }}
      />
      <GoalList list={goalsList} onDeleteItem={(key: string) => onDeleteListHandler(key)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
