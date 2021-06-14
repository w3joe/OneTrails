import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";


function HomeScreen( {navigation} ) {
  return (
    <View style={styles.main}>
      <span>
        <FontAwesome style={{paddingRight:100}} name="map-marker" size={99} color="rgba(230, 200, 0, 0.90)" />      
        <Text style={styles.container_top}>SG Trails</Text>
        <FontAwesome style={{paddingLeft:100}} name="map-marker" size={99} color="rgba(230, 200, 0, 0.90)" />
      </span>
      <Image
        style={styles.profilePic}
        source={{
          uri:'https://www.clipartkey.com/mpngs/m/154-1545165_transparent-background-travel-icon-png.png',
        }}></Image>
      <Text style={styles.container_bottom}>News Feed</Text>
      <View style={styles.rectangle}></View>
    </View>
  );
}

const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen style={{color:""}} name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
    backgroundColor: "lightgreen",
    paddingTop: 10,
  },
  container_top: {
    color: "#FF7F50",
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "Calibri",
  },
  container_bottom: {
    color: "grey",
    fontWeight: "bold",
    fontFamily: "Papyrus",
    fontStyle: "italic",
    fontSize: 40,
    marginTop: 30,
  },
  profilePic: {
    height: 130,
    width: 180,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 5,
    borderColor: 'lightgreen',
  },
});
