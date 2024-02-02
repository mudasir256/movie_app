import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  style,
  rightIcon,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      {rightIcon && (
        <TouchableOpacity
          onPress={rightIcon.onPress}
          style={styles.iconContainer}
        >
          {rightIcon.icon}
        </TouchableOpacity>
      )}
    </View>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool,
  style: PropTypes.object,
  rightIcon: PropTypes.shape({
    icon: PropTypes.element.isRequired,
    onPress: PropTypes.func.isRequired,
  }),
};

Input.defaultProps = {
  secureTextEntry: false,
};

export default Input;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#B4839C",
    borderRadius: 5,
    padding: 10,
    width: 310,
  },
  iconContainer: {
    marginLeft: 280,
    marginTop: -29,
  },
});
