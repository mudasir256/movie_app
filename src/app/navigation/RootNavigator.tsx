import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import { useSelector } from "react-redux";
import { AuthState } from "./../store/userSlice";
import LoginStack from "./LoginStack";
import { RootState } from "./../store/store";

export const RootNavigator = () => {
  const authState = useSelector((state: RootState) => state.user.authState);

  return (
    <NavigationContainer>
      {authState === AuthState.Authenticated ? <HomeStack /> : <LoginStack />}
    </NavigationContainer>
  );
};
