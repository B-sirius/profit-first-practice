import React from "react";
import { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export default function AddAccountListItem() {
  const [name, setName] = useState("");
  const [cap, setCap] = useState("");
  const [tap, setTap] = useState("");

  const createAccount = () => {};

  return (
    <>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={setCap}
          placeholder="CAP %"
        />
        <TextInput
          style={styles.input}
          onChangeText={setTap}
          placeholder="TAP %"
        />
      </View>
      <Button title="Add acount" onPress={createAccount} />
    </>
  );
}
const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  input: {
    flex: 1,
  },
});
