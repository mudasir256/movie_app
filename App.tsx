import React from "react";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import { store } from "./src/app/store/store";
import { RootNavigator } from "./src/app/navigation/RootNavigator";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <RootNavigator />
    </Provider>
  );
};

export default App;
