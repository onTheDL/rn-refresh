import React from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

export default function Input({ inputValue, handleInput, handleSubmit }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={(input) => handleInput(input)}
        value={inputValue}
      />

      <Button title="ADD" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
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
