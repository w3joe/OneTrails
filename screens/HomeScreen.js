import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.main}>
      <span style={{alignSelf:"center"}}>
        <FontAwesome
          style={{ paddingRight: 100 }}
          name="map-marker"
          size={75}
          color="rgba(100, 100, 255, 0.80)"
        />
        <Text style={styles.container_top}>SG Trails</Text>
        <FontAwesome
          style={{ paddingLeft: 100 }}
          name="map-marker"
          size={75}
          color="rgba(100, 100, 255, 0.80)"
        />
      </span>
      <Image
        style={styles.profilePic}
        source={
          require('./assets/SGTrails_logo.png')
        }
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
    justifyContent: "top",
    backgroundColor: "lightblue",
    paddingTop: 10,
  },
  container_top: {
    color: "#5454FF",
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "Calibri",
  },
  container_bottom: {
    color: "blue",
    fontWeight: "bold",
    fontFamily: "Papyrus",
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
    borderColor: "lightgreen",
  },
});
