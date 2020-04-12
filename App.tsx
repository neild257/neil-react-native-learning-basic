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

  return (
    <View style={styles.container}>
      <GoalInput 
        text={enteredText} 
        onStateChange={(text: string) => enteredTextState(text)}
        onButtonPress={() => {
          return goalsListState((prevList: string[]) => [...prevList, {
            key: ((Math.random()+100)*Math.random()).toString(),
            value: enteredText
          }])
        }}
      />
      <GoalList list={goalsList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
