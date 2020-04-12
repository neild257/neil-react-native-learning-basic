import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

export default function App() {
  const [enteredText, enteredTextState] = useState('');
  const [goalsList, goalsListState] = useState(([] as any[]));
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onDeleteListHandler = (key: string) => {
    goalsListState((prevList: any[]) => {
      return [ ...prevList.filter((item: any) => item.key !== key )];
    });
  }

  const clearEnteredTextState = () => {
    enteredTextState('');
  }

  const closeModelHandler = () => {
    clearEnteredTextState();
    setIsModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Button 
        title="Add Goal Input" 
        onPress={() => setIsModalVisible(true)}
      />
      {isModalVisible && 
        <GoalInput
          visible={isModalVisible}
          clearText={clearEnteredTextState}
          onAddPressed={() => setIsModalVisible(false)}
          closeModel={closeModelHandler}
          text={enteredText} 
          onStateChange={(text: string) => enteredTextState(text)}
          onButtonPress={() => {
            return goalsListState((prevList: string[]) => [...prevList, {
              key: enteredText,
              value: enteredText
            }])
          }}
        />
      }
      <GoalList list={goalsList} onDeleteItem={(key: string) => onDeleteListHandler(key)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
