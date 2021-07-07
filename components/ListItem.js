import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ListItem({title}) {
  return (
    <View style={styles.listItems}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
})
