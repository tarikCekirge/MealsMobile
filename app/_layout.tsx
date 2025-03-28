import React from "react";
import { StatusBar } from "react-native";
import "../global.css";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotFoundScreen from "./+not-found";
import RootLayout from "./(tabs)/_layout";

const Stack = createNativeStackNavigator();

export default function AppLayout() {
  return (
    <>
      <NavigationIndependentTree>
        <NavigationContainer >
          <Stack.Navigator initialRouteName="Root">
            <Stack.Screen name="Root" component={RootLayout} options={{ headerShown: false }} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </NavigationIndependentTree>
      <StatusBar barStyle="light-content" className="bg-[#25292e]" />
    </>

  );
}
