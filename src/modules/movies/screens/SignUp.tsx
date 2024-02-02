import React, { useState } from "react";
import { StyleSheet, Text, View, Keyboard, Alert, TouchableWithoutFeedback } from "react-native";
import { useDispatch } from "react-redux";
import { StatusBar } from "expo-status-bar";
import Input from "../../../app/components/Input";
import Button from "../../../app/components/Button";
import { loginUser } from "../../../app/store/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field, value) => {

    if (field === "email" && !value.includes("@")) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSignUp = () => {
 
    if (formData.password !== formData.confirmPassword) {
      Alert.alert("Password Mismatch", "Passwords do not match.");
      return;
    }
    dispatch(loginUser(formData));

    console.log("Form Data:", formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    Keyboard.dismiss();
  };

  const handleTouchablePress = () => {

    Keyboard.dismiss();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handleTouchablePress}>
        <View style={styles.container}>
          <StatusBar style="light" />
          <Input
            placeholder="First Name"
            style={styles.input}
            onChangeText={(text) => handleChange("firstName", text)}
          />
          <Input
            placeholder="Last Name"
            style={styles.input}
            onChangeText={(text) => handleChange("lastName", text)}
          />
          <Input
            placeholder="Email"
            style={styles.input}
            onChangeText={(text) => handleChange("email", text)}
          />
          <Input
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            onChangeText={(text) => handleChange("password", text)}
          />
          <Input
            placeholder="Confirm Password"
            style={styles.input}
            secureTextEntry
            onChangeText={(text) => handleChange("confirmPassword", text)}
          />
          <Button onPress={handleSignUp} label="Sign Up" style={styles.button} />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "seashell",
    paddingBottom: 100,
  },
  input: {
    marginBottom: 10,
    width: 300,
  },
  button: {
    marginTop: 20,
  },
});

export default SignUp;
