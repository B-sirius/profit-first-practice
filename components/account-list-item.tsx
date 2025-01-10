import Account from "@/models/account";
import { View, Text, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { withObservables } from "@nozbe/watermelondb/react";
import database from "@/db";

function AccountListItem({ account }: { account: Account }) {
  const { name, cap, tap } = account;

  const onDelete = async () => {
    await database.write(async () => {
      await account.markAsDeleted();
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text>{cap}%</Text>
      <Text>{tap}%</Text>
      <MaterialIcons
        onPress={onDelete}
        name="delete-outline"
        size={20}
        color="black"
      />
    </View>
  );
}

export default withObservables(["account"], ({ account }) => ({
  // the account typing here is actually a problem, I can't find a nice way to solve it.
  // which leads to the AccountListItem used in AccountList to be not properly typed.
  account,
}))(AccountListItem);

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
