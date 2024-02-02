import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import CustomButton from "../../../app/components/Button";
import Input from "../../../app/components/Input";

const Search = (props) => {
  const { label, buttonText, onSearch, title, style } = props;

  const handleSearch = (text: string) => {
    onSearch(text);
  };
const handleSearchBtn = () => {
console.log("searching")
}
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        {title && <Text style={styles.title}>{title}</Text>}
        <View style={styles.inputContainer}>
          <Input
            style={styles.inputstyle}
            placeholder="Search for movies"
            onChangeText={handleSearch}
          />
          <CustomButton onPress={handleSearchBtn} label="Search" style={styles.btn} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#421A37",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 5,
  },
  inputContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputstyle:{
    width:240,
  },
  btn: {
    width: 100,
    marginTop: -1.5,
    padding: 12,
  },
});

export default Search;
