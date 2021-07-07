import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function ListItem({ id, title, handleDelete }) {
  return (
    <TouchableOpacity onPress={() => handleDelete(id)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
