import { Platform } from "react-native";
import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import schema from "./schema";
import migrations from "./migrations";
import Account from "@/models/account";
import Allocation from "@/models/allocation";

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: true,
  onSetUpError: (error) => {},
});

const database = new Database({
  adapter,
  modelClasses: [Account, Allocation],
});

export default database;

export const accountsCollection = database.get<Account>("accounts");
export const allocationsCollection = database.get<Allocation>("allocations");
