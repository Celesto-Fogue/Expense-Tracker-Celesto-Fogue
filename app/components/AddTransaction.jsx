import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { heading } from "../styles/heading";

export default function TransactionList({ addTransaction }) {
  const [transaction, setTransaction] = useState({
    name: "",
    amount: "",
  });

  const handleNameChange = (textValue) => {
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      name: textValue,
    }));
  };

  const handleAmountChange = (textValue) => {
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      amount: textValue,
    }));
  };

  const clearForm = () => {
    setTransaction({ name: "", amount: "" });
  };

  return (
    <View>
      <Text style={[heading.h4, heading.subTitle]}>Nouvelle transaction</Text>
      <Text style={styles.mtb}>Nom</Text>
      <TextInput
        placeholder="Entrez le nom..."
        style={styles.input}
        onChangeText={handleNameChange}
        value={transaction.name}
      />
      <Text
        style={styles.mtb}
      >{`Montant\n(le revenu est positif, la dépense est négative)`}</Text>
      <TextInput
        placeholder="Entrez le Montant..."
        style={styles.input}
        keyboardType="numeric"
        onChangeText={handleAmountChange}
        value={transaction.amount}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={(e) => {
          clearForm();
          addTransaction(e, transaction);
        }}
      >
        <Text style={styles.btnText}>Ajouter la transaction</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 2,
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  mtb: {
    marginTop: 10,
    marginBottom: 5,
  },
  btn: {
    marginTop: 10,
    backgroundColor: "#ffb300",
    padding: 9,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
