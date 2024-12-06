import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./src/screens/ProfileScreen";
import FeedScreen from "./src/screens/FeedScreen";

const tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <tabs.Navigator screenOptions={{ tabBarIcon: () => null, headerShown:false }}>
        <tabs.Screen name="FeedScreen" component={FeedScreen} />
        <tabs.Screen name="ProfileScreen" component={ProfileScreen} />
      </tabs.Navigator>
    </NavigationContainer>
  );
}
