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
      <TouchableOpacity  onPress={() => navigation.navigate("Guide")}>
        <Text style={styles.Text}>Guide</Text>       
      </TouchableOpacity>
      </View>
      
      <View style={styles.Space}>
          <View style={styles.Space}></View>
        
         </View>

    </View>
    
    
  );
}

function About() {
  return <Text>????</Text>;
}

function FAQ() {
  return <Text>???</Text>;
}

function Guide() {
  return <Text>???</Text>
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={EventsScreen} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="Guide" component={Guide} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "grey",
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
      flex: 8.5

  }
});
