import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigationProps } from "../../../app/navigation/LoginStack";
import { StatusBar } from "expo-status-bar";

interface MyProps {
  navigation: StackNavigationProp<RootNavigationProps, "Splash">;
}

const Splash = ({ navigation }: MyProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.text}>Movie App</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "seashell",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#831D66",
    fontSize: 38,
    fontWeight: "bold",
  },
});
