import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";
import SceenHeader from "./src/components/SceenHeader";
import store from "./src/redux/store";
import Login from "./src/screens/login/Login";
import UserProfile from "./src/screens/login/UserProfile";
import { Stack } from "./App";

export function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          {...{
            initialRouteName: "Login", //Login
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />

          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen
            name="SceenHeader"
            component={SceenHeader}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
