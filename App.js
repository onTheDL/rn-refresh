import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 60 }}>
      <View style={styles.flexRow}>
        <TextInput
          placeholder="Course Goal"
          style={{
            borderColor: "black",
            borderWidth: 1,
            width: '80%',
      
          }}
        />

        <Button title="ADD" />
      </View>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});
