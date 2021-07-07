import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

import ListItem from './components/ListItem'
import Input from './components/Input'

export default function App() {
  const [goal, setGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = () => {
    setCourseGoals(
      (prevGoals) => [...prevGoals, { uid: Math.random().toString(), value: goal }],
      console.log(courseGoals)
    );
  };

  return (
    <View style={styles.container}>

      <Input handleInput={setGoal} inputValue={goal} handleSubmit={addGoalHandler} />

      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={(itemData) => (
          <ListItem title={itemData.item.value} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
