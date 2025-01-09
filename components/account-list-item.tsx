import Account from "@/models/account";
import { View, Text, StyleSheet } from "react-native";

export default function AccountListItem({ account }: { account: Account }) {
  const { name, cap, tap } = account;
  console.log("the things I got:", name, cap, tap);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text>{cap}%</Text>
      <Text>{tap}%</Text>
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
