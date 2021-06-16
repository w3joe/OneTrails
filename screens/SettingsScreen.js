import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Divider,
  Platform,
  ToastAndroid,
  Image,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Permissions } from "expo";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Get Ready",
      body: "Enjoy a trail today!!",
      data: { data: "goes here" },
    },
    trigger: {
      seconds: 60,
      repeats: true,
    },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

function EventsScreen({ navigation }) {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View style={styles.Container}>
      <View style={styles.box1}>
        <TouchableOpacity onPress={() => navigation.navigate("About")}>
          <Text style={styles.Text}>About</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box2}>
        <TouchableOpacity onPress={() => navigation.navigate("FAQ")}>
          <Text style={styles.Text}>FAQ</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box3}>
        <TouchableOpacity onPress={() => navigation.navigate("App Guide")}>
          <Text style={styles.Text}>App Guide</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box4}>
        <TouchableOpacity
          style={styles.box}
          onPress={async () => {
            await schedulePushNotification();
            ToastAndroid.show("Notification has been ON", ToastAndroid.SHORT);
          }}
        >
          <Text style={styles.Text2}>ON Notifications</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Space}>
        <View style={styles.Space}></View>
      </View>
    </View>
  );
}

function About() {
  return (
    <View style={styles.Container}>
      <Image
        style={styles.Images}
        source={require("./assets/SGTrails_logo.png")}
      ></Image>
      <Text style={styles.AboutText}>
        {`OneTrail is a travel application, designed to bring the world's places of interests to your fingertips without needing an internet connection.
        
The app also regularly provides updates on locations which are open to public in your country.`}
      </Text>

      <Text style={styles.AboutVersion}>Created by: easyGame Version: 1.0</Text>
    </View>
  );
}

function FAQ() {
  return (
    <View style={styles.Container}>
      <Text style={{ fontSize: 20, padding: 9, color: "green" }}>
        1. What is OneTrail for?
      </Text>
      <Text style={{ fontSize: 18 }}>
        OneTrail is an application which compiles all the trails and you will be
        able to view these trails offline, anytime, anywhere.
      </Text>

      <Text style={{ fontSize: 20, padding: 9, color: "green" }}>
        2. Why OneTrail?
      </Text>
      <Text style={{ fontSize: 18 }}>
        This application was designed to be simple so that anyone would be able
        to use it.{" "}
      </Text>

      <Text style={{ fontSize: 20, padding: 9, color: "green" }}>
        3. How do I contact the developers for suggestions?
      </Text>
      <Text style={{ fontSize: 18 }}>
        You may contact us through our email: hello@onetrail.sg. We are always
        open to new suggestions from the community as we believe the users know
        what they need in this application most.
      </Text>

      <Text style={{ fontSize: 20, padding: 9, color: "green" }}>
        4. Is OneTrail an organisation?
      </Text>
      <Text style={{ fontSize: 18 }}>
        No we are not. We have come together to publish an app which can support
        users in unprecedented times like the Covid-19 pandemic. If you would
        like to support us, visit us @onetrail on Instagram.
      </Text>
    </View>
  );
}

function Guide() {
  return (
    <View style={styles.Container}>
      <Text style={{ fontSize: 25, padding: 5 }}>
        1. In the "Home" tab, the latest news will be updated constantly.
      </Text>
      <Text style={{ fontSize: 25, padding: 5 }}>
        2. Select the "Trail" tab to view the available trails on the map.
      </Text>
      <Text style={{ fontSize: 25, padding: 5 }}>
        3. Click on each marker to display the name and description of the
        location.
      </Text>
      <Text style={{ fontSize: 25, padding: 5 }}>
        4. Start walking and enjoy yourself!!
      </Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#BBCBEE" },
          headerTintColor: "black",
        }}
        name="Settings"
        component={EventsScreen}
      />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="App Guide" component={Guide} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "lightblue",
    padding: 5,
    borderRadius: 10,
  },
  Text: {
    color: "blue",
    fontSize: 35,
    backgroundColor: "transparent",
  },
  Text2: {
    color: "blue",
    fontSize: 35,
    backgroundColor: "transparent",
  },
  box1: {
    backgroundColor: "white",
    padding: 13,
    //paddingBottom: 25,
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 5,
    width: "100%",
    flex: 1,
  },
  box2: {
    backgroundColor: "white",
    padding: 10,
    //paddingBottom: 25,
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 5,
    width: "100%",
    flex: 1,
  },
  box3: {
    backgroundColor: "white",

    padding: 12,
    //paddingBottom: 20,
    borderRadius: 10,
    justifyContent: "center",

    marginBottom: 5,
    width: "100%",
    flex: 1,
  },
  box4: {
    backgroundColor: "white",
    padding: 10,
    // paddingBottom: 30,
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 1,
    width: "100%",
    flex: 1,
  },
  Space: {
    backgroundColor: "grey",
    flex: 8,
  },
  AboutText: {
    marginTop: 50,
    fontSize: 20,
    color: "black",
  },
  AboutVersion: {
    fontSize: 15,
    color: "black",
    position: "absolute",
    bottom: 0,
  },
  Images: {
    borderRadius: 5,
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 30,
  },
});
