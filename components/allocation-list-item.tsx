import Allocation from "@/models/allocation";
import { View, Text, StyleSheet } from "react-native";
import { withObservables } from "@nozbe/watermelondb/react";

const AllocationListItem = ({ allocation }: { allocation: Allocation }) => {
  const { income, createdAt } = allocation;
  return (
    <View style={styles.container}>
      <Text>{income}</Text>
      {/* display the date YYYY-MM-DD*/}
      <Text>{createdAt.toISOString().split("T")[0]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
  },
});

export default withObservables(["allocation"], ({ allocation }) => ({
  allocation,
}))(AllocationListItem);
