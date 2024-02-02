import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const Button = ({ label, onPress, style }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
    onPress();
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <TouchableOpacity
      style={[styles.container, isPressed && styles.containerPressed, style]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text style={[styles.btn, isPressed && styles.btnPressed]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: 310,
    borderRadius: 5,
    backgroundColor: "#421A37",
    marginTop: 10,
  },
  containerPressed: {
    backgroundColor: "#421A37",
  },
  btn: {
    color: 'white',
    textAlign: 'center',
  },
  btnPressed: {},
});
