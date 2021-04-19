import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Expense Tracker Celesto Fogue</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    alignSelf: "stretch",
    padding: 15,
    backgroundColor: "green",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 23,
  },
});
