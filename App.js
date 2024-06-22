/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LogBox, SafeAreaView, StyleSheet } from "react-native";
import { Provider } from "react-redux";

import store from "./src/redux/store";
import Login from "./src/screens/login/Login";
import EventQuestionnaire from "./src/screens/questionnaire/EventQuestionnaire";
import EventGuestList from "./src/screens/event/EventGuestList";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs();

function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <NavigationContainer>
          <Stack.Navigator
            {...{
              initialRouteName: "EventGuestList", //Login
            }}
          >
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EventGuestList"
              component={EventGuestList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EventQuestionnaire"
              component={EventQuestionnaire}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
