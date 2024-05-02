import React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MemoScreen from "./MemoScreen"; // MemoScreen 컴포넌트를 import
import WeatherScreen from "./WeatherScreen"; // WeatherScreen 컴포넌트를 import

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Weather"
          component={WeatherScreen}
          options={{ title: "Weather" }}
        />
        <Stack.Screen
          name="Memo"
          component={MemoScreen}
          options={{ title: "Memo" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="날씨 보기"
        onPress={() => navigation.navigate("Weather")}
      />
      <Button
        title="메모 작성하기"
        onPress={() => navigation.navigate("Memo")} // 메모 작성 페이지로 이동
      />
    </View>
  );
}
