import * as React from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet, Divider} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";


function EventsScreen({ navigation }) {
  return (
    
    <View style={styles.Container} >
      
      <View style={styles.box1}>
      <TouchableOpacity  onPress={() => navigation.navigate("About")} >
        <Text style={styles.Text}>About</Text> 
      </TouchableOpacity>
      </View>
      
      <View style={styles.box2}>
      <TouchableOpacity  onPress={() => navigation.navigate("FAQ")} >
        <Text style={styles.Text}>FAQ</Text>   
      </TouchableOpacity>
      </View>

      <View style={styles.box3}>
      <TouchableOpacity  onPress={() => navigation.navigate("App Guide")}>
        <Text style={styles.Text}>App Guide</Text>       
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
  <Text style={styles.AboutText}>OneTrails is a travel application, designed to bring the world's places of interests to your fingertips without needing an internet connection.
  The app also regularly provides updates on locations which are open to public in your country. 
  </Text>
  
  <Text style={styles.AboutVersion}>
  Created by: easyGame
  Version: 1.0
  </Text>
  </View>
  
  )



}

function FAQ() {
  return <Text>???</Text>;
}

function Guide() {
  return (
  <View style={styles.Container}>
      <Text style={{fontSize:30, padding:5}}>1. In the "Home" tab, the latest news will be updated constantly.</Text>
      <Text style={{fontSize:30, padding:5}}>2. Select the "Trail" tab to access the variety of trails to choose from.</Text>
      <Text style={{fontSize:30, padding:5}}>3. Upon selecting each item, a marked map will appear. Clicking on each marker displays a description of the location.</Text>
      <Text style={{fontSize:30, padding:5}}>4. Start walking and enjoy yourself!!</Text>
  </View>
  )
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={EventsScreen} />
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
    fontSize: 45,
    backgroundColor: 'transparent',
  },
  box1: {
    backgroundColor: 'white',
    padding: 10,
    paddingBottom: 15,
    borderRadius: 20,
    justifyContent: 'flex-start',
    marginBottom:5,
    width:'100%',
    flex: 1,
  },
  box2: {
    backgroundColor: 'white',
    padding: 10,
    //paddingBottom: 50,
    borderRadius: 20,
    justifyContent: 'flex-start',
    marginBottom:5,
    width:'100%',
    flex: 1,
  },
  box3: {
    backgroundColor: 'white',
    padding: 10,
    //paddingBottom: 70,
    borderRadius: 20,
    justifyContent: 'flex-start',
    marginBottom:1,
    width:'100%',
    flex: 1,
  },
  Space: {
      backgroundColor: 'grey',
      flex: 8.5,

  },
  AboutText: {
    fontSize: 20,
    color: 'black',
    
  },
  AboutVersion: {
    fontSize: 10,
    color: 'black',
    position: 'absolute',
    bottom:0
  }
});
