import { FlatList, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import Allocation from "@/models/allocation";
import AllocationListItem from "@/components/allocation-list-item";
import { withObservables } from "@nozbe/watermelondb/react";
import { allocationsCollection } from "@/db";

function Allocations({ allocations }: { allocations: Allocation[] }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
      }}
    >
      <Stack.Screen options={{ title: "Allocations" }} />
      <Link href="/allocations/add-allocation">
        <Text
          style={{
            fontSize: 20,
            color: "blue",
          }}
        >
          Add allocation
        </Text>
      </Link>
      <FlatList
        contentContainerStyle={{ gap: 10, padding: 10 }}
        data={allocations}
        renderItem={({ item }) => <AllocationListItem allocation={item} />}
      />
    </View>
  );
}

export default withObservables([], () => ({
  allocations: allocationsCollection.query(),
}))(Allocations);
