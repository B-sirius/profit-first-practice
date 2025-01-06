import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function AddAllocationScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Add Allocation" }} />
      <Text>add allocation</Text>
    </View>
  );
}
