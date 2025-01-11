import { Stack, router } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import database, { allocationsCollection } from "@/db";

export default function AddAllocationScreen() {
  const [income, setIncome] = useState("");

  const onSave = async () => {
    await database.write(async () => {
      await allocationsCollection.create((allocation) => {
        allocation.income = parseFloat(income);
      });
    });
    // navigate back to the previous screen
    router.back();
  };

  return (
    <View style={{ padding: 10 }}>
      <Stack.Screen options={{ title: "Add Allocation" }} />
      <View style={styles.row}>
        <Text style={styles.label}>Income</Text>
        <TextInput
          style={styles.input}
          inputMode="numeric"
          value={income}
          onChangeText={setIncome}
        />
      </View>
      <Button title="Save" onPress={onSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    width: 100,
  },
  input: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    margin: 5,
  },
});
