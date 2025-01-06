import { Text, View } from "react-native";
import { Link, Stack } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack.Screen options={{ title: "Allocations" }} />
      <Link href="/allocations/add-allocation">
        <Text>add allocation</Text>
      </Link>
      <Text>Home Screen</Text>
    </View>
  );
}
