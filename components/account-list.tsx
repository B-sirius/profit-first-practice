import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import { accountsCollection } from "@/db";
import Account from "@/models/account";
import AccountListItem from "./account-list-item";

export default function AccountList() {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    const accounts = await accountsCollection.query().fetch();
    setAccounts(accounts);
  };

  return (
    <FlatList
      data={accounts}
      contentContainerStyle={{ gap: 5 }}
      renderItem={({ item }) => <AccountListItem account={item} />}
    />
  );
}
