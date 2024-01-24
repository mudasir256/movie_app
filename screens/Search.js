import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import CustomButton from "../components/button";
import Input from "../components/Input";

const Search = (props) => {
  const { title, buttonText, onSearch } = props;

  const handleSearch = (text) => {
    onSearch(text);
  };

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        {title && <Text style={styles.title}>{title}</Text>}
        <View style={styles.inputContainer}>
          <Input
            style={styles.input}
            placeholder="Search for movies"
            onChangeText={handleSearch}
          />
          <CustomButton
            title={buttonText}
            onPress={(text) => {
              setSearchText(text);
            }}
          />
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
    justifyContent: "space-between",
  },
});

export default Search;
