import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootTabsNavigator from "./src/navigators/RootTabsNavigator";
import { DataProvider } from "./src/context/DataContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <DataProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <RootTabsNavigator />
        </NavigationContainer>
      </DataProvider>
    </SafeAreaProvider>
  );
}
