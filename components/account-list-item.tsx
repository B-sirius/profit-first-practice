import { View, Text, StyleSheet } from "react-native";

export default function AccountListItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Profit</Text>
      <Text>10%</Text>
      <Text>20%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
  },
  name: {
    fontWeight: "bold",
  },
  percentage: {},
});
