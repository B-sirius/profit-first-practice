import AccountList from "@/components/account-list";
import AddAccountListItem from "@/components/add-account-list-item";
import { View, Text, StyleSheet, Button } from "react-native";
import { accountsCollection } from "@/db";

export default function AccountScreen() {
  const onTest = async () => {
    const accounts = await accountsCollection.query().fetch();
    console.log(accounts);
  };

  return (
    <View style={{ gap: 5, padding: 5 }}>
      <View style={styles.header}>
        <Text>Name</Text>
        <Text>CAP</Text>
        <Text>TAP</Text>
      </View>
      <AccountList />
      <AddAccountListItem />
      <Button title="Test" onPress={onTest} />
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
