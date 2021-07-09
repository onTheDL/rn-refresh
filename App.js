import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
} from "react-native";

import ListItem from "./components/ListItem";
import Input from "./components/Input";

export default function App() {
  const [goal, setGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = () => {
    setCourseGoals(
      (prevGoals) => [
        ...prevGoals,
        { uid: Math.random().toString(), value: goal },
      ],
      setIsAddMode(false)
    );
  };

  const deleteGoalHandler = (goalId) => {
    setCourseGoals((prevGoals) =>
      prevGoals.filter((goal) => goal.uid !== goalId)
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <Input
        visible={isAddMode}
        handleInput={setGoal}
        inputValue={goal}
        setInput={setGoal}
        handleSubmit={addGoalHandler}
        setIsAddMode={setIsAddMode}
      />

      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={(itemData) => (
          <ListItem
            id={itemData.item.uid}
            title={itemData.item.value}
            handleDelete={deleteGoalHandler}
          />
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
