import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  ScrollView,
} from "react-native";
import uuid from "react-native-uuid";

import Header from "./app/components/Header";
import Balance from "./app/components/Balance";
import IncomeExpenses from "./app/components/IncomeExpenses";
import TransactionList from "./app/components/TransactionList";
import AddTransaction from "./app/components/AddTransaction";

export default function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      amount: 1400,
      name: "Cash",
    },
    {
      id: 2,
      amount: 100,
      name: "Check",
    },
    {
      id: 3,
      amount: -200,
      name: "Camera",
    },
  ]);

  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) => {
      return prevTransactions.filter((transaction) => transaction.id !== id);
    });
  };

  const addTransaction = (e, transaction) => {
    e.preventDefault();

    setTransactions((prevTransactions) => {
      return [{ id: uuid.v1(), ...transaction }, ...prevTransactions];
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Header />
        <View style={styles.bodyWrapper}>
          <Balance transactions={transactions} />
          <IncomeExpenses transactions={transactions} />
          <TransactionList
            transactions={transactions}
            deleteTransaction={deleteTransaction}
          />
          <AddTransaction addTransaction={addTransaction} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollView: {},
  bodyWrapper: {
    alignSelf: "stretch",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
  },
});