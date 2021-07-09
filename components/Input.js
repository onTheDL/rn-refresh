import React from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

export default function Input({ inputValue, setInput, handleInput, handleSubmit, visible, setIsAddMode }) {


  const handleAddGoal = () => {
    handleSubmit(inputValue)
    setInput('')
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={(input) => handleInput(input)}
          value={inputValue}
        />
        <Button title="CANCEL" color="red" onPress={setIsAddMode} />
        <Button title="ADD" onPress={handleAddGoal} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
    marginBottom: 10,
  },
});
