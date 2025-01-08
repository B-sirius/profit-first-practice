import { Platform } from "react-native";
import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import schema from "./schema";
import migrations from "./migrations";
import Account from "@/models/account";

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: true,
  onSetUpError: (error) => {},
});

const database = new Database({
  adapter,
  modelClasses: [Account],
});

export default database;

export const accountsCollection = database.get<Account>("accounts");
