import React from "react";
import { TextInput, StyleSheet } from "react-native";

const CustomInput = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width:240,
    borderColor:  "#421A37",
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
  },
});

export default CustomInput;
