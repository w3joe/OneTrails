import React, { useEffect, useState, Fragment } from "react";
import { Text, View, StyleSheet, Image} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Tabletop from "tabletop";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.main}>
      <View style={{ alignSelf: "center" }}>
        <Text style={styles.container_top}>OneTrail</Text>
      </View>
      <Image
        style={styles.profilePic}
        source={require("./assets/SGTrails_logo.png")}
      ></Image>
      <Text style={styles.container_bottom}>News</Text>
      <App></App>
    </View>
  );
}

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Tabletop.init({
      key: "1t8JKEHpJe2B83n2N8FpaMyQkRA1LsEhb1aPUUhq9mgM",
      simpleSheet: true,
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);
  const base = Array.from(data);

  return (
    <>
        {base.map((item, i) => (
          <Fragment key={i}>
            <Text style={{fontWeight: "bold"}}>{'\u2192'} Title - {item.Title}</Text>
            <Text style={{fontWeight: "bold"}}>{'\u2192'} Description - {item.Description}</Text>
            <Text style={{fontWeight: "bold"}}>{'\u2192'} Time - {item.Recency}</Text>
            
          </Fragment>
        ))}
    </>
  );
}

const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#5464FF" },
          headerTintColor: "white",
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
    color: "#5464FF",
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "Times New Roman",
  },
  container_bottom: {
    color: "#5464FF",
    fontWeight: "bold",
    fontFamily: "Serif",
    fontStyle: "italic",
    fontSize: 30,
    marginTop: 30,
    marginLeft: 20,
  },
  profilePic: {
    height: 130,
    width: 180,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 5,
  },
});
