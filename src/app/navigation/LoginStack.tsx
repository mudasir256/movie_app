import {  StackNavigationProp, createStackNavigator } from "@react-navigation/stack";
import { LoginStackRoutes } from "./routes";
import Login from "../../modules/movies/screens/Login";
import Splash from "../../modules/movies/screens/Splash";
import SignUp from "../../modules/movies/screens/SignUp";

const Stack = createStackNavigator();

export type RootNavigationProps = {
  Login: undefined;
  Home: undefined;
  SignUp: undefined;
}

const LoginStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={LoginStackRoutes.Splash}
      component={Splash}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={LoginStackRoutes.Login}
      component={Login}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={LoginStackRoutes.SignUp}
      component={SignUp}
      options={() => ({
        title: "Sign Up",
        headerStyle: { backgroundColor: "#421A37" },
        headerTintColor: "#ffffff",
      })}
    />
  </Stack.Navigator>
);

export default LoginStack;
// export type RootNavigationProps = StackNavigationProp<LoginStackParamsList>;