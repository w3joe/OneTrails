import * as React from "react";
import { Text, View, StyleSheet, Image, Span } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.main}>
      <View style={{ alignSelf: "center" }}>
        <Text style={styles.container_top}>SG Trails</Text>
      </View>
      <Image
        style={styles.profilePic}
        source={require("./assets/SGTrails_logo.png")}
      ></Image>
      <Text style={styles.container_bottom}>News</Text>
    </View>
  );
}

const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "" },
          headerTintColor: "",
          headerTitleStyle: { fontWeight: "bold" },
        }}
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "lightblue",
    paddingTop: 10,
  },
  container_top: {
    color: "#5454FF",
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "Sans-serif",
  },
  container_bottom: {
    color: "#6464FF",
    fontWeight: "bold",
    fontFamily: "Serif",
    fontStyle: "italic",
    fontSize: 30,
    marginTop: 30,
  },
  profilePic: {
    height: 130,
    width: 180,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 5,
  },
});
