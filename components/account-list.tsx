import { FlatList } from "react-native";
import { accountsCollection } from "@/db";
import Account from "@/models/account";
import { withObservables } from "@nozbe/watermelondb/react";
import AccountListItem from "./account-list-item";

function AccountList({ accounts }: { accounts: Account[] }) {
  return (
    <FlatList
      data={accounts}
      contentContainerStyle={{ gap: 5 }}
      renderItem={({ item }) => <AccountListItem account={item} />}
    />
  );
}

export default withObservables([], () => ({
  accounts: accountsCollection.query(),
}))(AccountList);
