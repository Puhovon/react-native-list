import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen.jsx";
import ForthList from "./forthList.jsx";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Me" component={HomeScreen} />
        <Tab.Screen name="List" component={ForthList} />
      </Tab.Navigator>
  );
}