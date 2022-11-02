import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ex1 from "./src/ex1";
import Ex2 from "./src/ex2";
import ex3 from "./src/ex3";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Home" component={ex1} /> */}
        <Stack.Screen name="Ex2" component={Ex2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
