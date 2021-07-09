import React from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

export default function Input({ inputValue, handleInput, handleSubmit, visible }) {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={(input) => handleInput(input)}
          value={inputValue}
        />

        <Button title="ADD" onPress={handleSubmit} />
      </View>
    </Modal>
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
