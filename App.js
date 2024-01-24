import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import MovieDetailsModal from "./screens/MovieDetailsModal";
import AllMoviesScreen from "./screens/AllMovies";
// import Search from "./screens/Search";
import Favorite from "./screens/Favorite";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: "#421A37" },
        headerTintColor: "#ffffff",
        tabBarStyle: { backgroundColor: "#421A37" },
        tabBarActiveTintColor: "#ffffff",
      })}
    >
      <BottomTabs.Screen
        name="AllMovies"
        component={AllMoviesScreen}
        options={{
          title: "All Movies",
          tabBarLabel: "All Movies",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="film" size={size} color={color} />
          ),
        }}
      />
      {/* <BottomTabs.Screen
        name="Search"
        component={Search}
        options={{
          title: "Search",
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      /> */}
      <BottomTabs.Screen
        name="Favorite"
        component={Favorite}
        options={{
          title: "Favorite Movies",
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <View style={{ flex: 1, backgroundColor: "#BC9EB4" }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#421A37",
              },
              headerTintColor: "#ffffff",
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MovieDetailsModal"
              component={MovieDetailsModal}
              options={({ route }) => ({
                title: "Movie Details",
                cardStyle: { backgroundColor: "transparent" },
                cardOverlayEnabled: true,
                headerRight: () => (
                  <Ionicons
                    name={"heart-outline"}
                    size={30}
                    color={"#FFFFFF"}
                    style={{ marginRight: 5 }}
                    onPress={() => {
                      route.params.handleFavorite();
                    }}
                  />
                ),
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
};

export default App;
