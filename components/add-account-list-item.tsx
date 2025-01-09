import React from "react";
import { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import database, { accountsCollection } from "@/db";

export default function AddAccountListItem() {
  const [name, setName] = useState("");
  const [cap, setCap] = useState("");
  const [tap, setTap] = useState("");

  const clearInputs = () => {
    setName("");
    setCap("");
    setTap("");
  };

  const createAccount = async () => {
    // check if name, cap, tap has value
    if (!name || cap === null || tap === null) {
      return;
    }
    await database.write(async () => {
      await accountsCollection.create((account) => {
        account.name = name;
        account.cap = parseFloat(cap);
        account.tap = parseFloat(tap);
      });
    });
    clearInputs();
  };

  return (
    <>
      <View style={styles.inputRow}>
        <TextInput
          value={name}
          style={styles.input}
          onChangeText={setName}
          placeholder="Name"
        />
        <TextInput
          value={cap}
          style={styles.input}
          onChangeText={setCap}
          placeholder="CAP %"
        />
        <TextInput
          value={tap}
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
