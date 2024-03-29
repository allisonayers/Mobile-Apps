import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DestinaitionScreen from "./screens/DestinationScreen";
import Colors from "./constants/colors";


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    mountain: require("./assets/fonts/Mountain.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="dark" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
              headerStyle: {backgroundColor: Colors.primary500},
              headerTintColor: Colors.primary300,
              headerTitleStyle: { fontSize: 28,},
              contentStyle: { backgroundColor: Colors.primary800},
            }}
          >
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: "Destination Locations",
              }}
            />
            <Stack.Screen 
            name="DestinationScreen"
            component={DestinaitionScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});