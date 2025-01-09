import AccountList from "@/components/account-list";
import AddAccountListItem from "@/components/add-account-list-item";
import { View, Text, StyleSheet, Button } from "react-native";

export default function AccountScreen() {
  return (
    <View style={{ gap: 5, padding: 5 }}>
      <View style={styles.header}>
        <Text>Name</Text>
        <Text>CAP</Text>
        <Text>TAP</Text>
      </View>
      <AccountList />
      <AddAccountListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
