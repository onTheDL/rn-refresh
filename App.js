import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [goal, setGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = () => {
    setCourseGoals(prevGoals => [...prevGoals, goal], console.log(courseGoals))
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={(input) => setGoal(input)}
          value={goal}
        />

        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        
          {courseGoals.map(courseGoal => (
            <Text key={courseGoal}>{courseGoal}</Text>
          ))}
        
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
  },
});
