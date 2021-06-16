import React, { useEffect, useState, Fragment } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  DevSettings,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Tabletop from "tabletop";
import Expo from "expo";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.main}>
      <View style={{ alignSelf: "center" }}>
        <Text style={styles.container_top}>OneTrail</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Clicker Game")}>
        <Image
          style={styles.profilePic}
          source={require("./assets/SGTrails_logo.png")}
        ></Image>
      </TouchableOpacity>
      <Text style={styles.container_bottom}>News Updates</Text>
      <Text style={{ marginLeft: 10, fontWeight: "bold", color: "green" }}>
        (click to read full news)
      </Text>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => DevSettings.reload()}>
          <Text style={{fontWeight: "bold"}}>refresh</Text>
        </TouchableOpacity>
        </View>
      <ScrollView style={{ backgroundColor: "#BBCBEE" }}>
        <App></App>
        <Text>
          ************************************************************
        </Text>
      </ScrollView>
    </View>
  );
}

function test() {
  let [count, setCount] = useState(0);

  function buttonPressed() {
    setCount(count + 1);
  }

  function renderEncouragingText() {
    if (count >= 10 && count < 20) {
      return "Let's go on a trail!";
    } else if (count >= 20 && count < 30) {
      return "Stop clicking and start a trail...";
    } else if (count >= 30 && count < 50) {
      return "Give your finger a rest please!";
    } else if (count >= 50 && count < 100) {
      return "Why are you still here???";
    } else if (count >= 100) return "Congrats! You made it to 100! :)";
  }

  return (
    <View style={{ alignSelf: "center" }}>
      <View>
        <Text
          style={{
            color: "blue",
            fontSize: 40,
            textAlign: "center",
            marginTop: 50,
          }}
        >
          {count}
        </Text>
        <Text
          style={{
            marginTop: 1,
            alignSelf: "center",
            color: "green",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {renderEncouragingText()}
        </Text>
        <TouchableOpacity onPress={buttonPressed} style={styles.buttonClicker}>
          <Text
            style={{ fontWeight: "bold", fontSize: 40, textAlign: "center" }}
          >
            {" "}
            Click Me!{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonReset}
          onPress={() => setCount(0)}
        >
          <Text
            style={{ fontWeight: "bold", fontSize: 20, alignSelf: "center" }}
          >
            Reset
          </Text>
        </TouchableOpacity>
      </View>
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
          <Text>
            ************************************************************
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL(item.URL)}>
            <Text
              style={{ fontWeight: "bold", marginLeft: 10, color: "black" }}
            >
              {"\u2192"} Title - {item.Title}
            </Text>
            <Text
              style={{ fontWeight: "bold", marginLeft: 10, color: "black" }}
            >
              {"\u2192"} Description - {item.Description}
            </Text>
            <Text
              style={{ fontWeight: "bold", marginLeft: 10, color: "black" }}
            >
              {"\u2192"} Time - {item.Recency}
            </Text>
          </TouchableOpacity>
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
          headerStyle: { backgroundColor: "#BBCBEE" },
          headerTintColor: "black",
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="Clicker Game" component={test}></Stack.Screen>
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
    marginTop: 30,
  },
  container_bottom: {
    color: "#5464FF",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 30,
    marginTop: 80,
    marginLeft: 10,
  },
  profilePic: {
    height: 130,
    width: 180,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 5,
  },
  button: {
    alignSelf: "flex-end",
    backgroundColor: "cyan",
    borderRadius: 30,
  },
  buttonClicker: {
    backgroundColor: "red",
    marginTop: 100,
    padding: 20,
    borderRadius: 50,
  },
  buttonReset: {
    backgroundColor: "yellow",
    marginTop: 50,
    borderRadius: 50,
    padding: 20,
  },
});
