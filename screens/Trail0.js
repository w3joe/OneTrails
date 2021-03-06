import React from 'react';
import MapView,{Polyline} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');
const GOOGLE_MAPS_APIKEY = 'AIzaSyBbPSKOHDvHPOZMa_txPfKU0AcC9En23Vg';
const initialRegion = {
  latitude: 1.3067074282378992,
  longitude: 103.84939437733111,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
} 
var marker = [{latitude:1.3080416946421083,longitude:103.85222221683591,title:'Sri Veeramakaliamman Temple',desc:'This Hindu temple displays architecture & colorful statues of deities'},
{latitude:1.3071968588745324, longitude:103.85085803253624, title:'Tan Teng Niah',desc:'This unique, colorful Chinese villa with 2 stories was built in 1900'},
{latitude: 1.307330826911569, longitude: 103.85031515103434, title:'Buffalo Mural',desc:''},
{latitude: 1.3063675793438427, longitude:103.85026206360122, title:'Tekka Center',desc:''},
{latitude:1.3067074282378992, longitude:103.84939437733111, title:'Little India MRT Station',desc:''}];
var len = marker.length;

class App extends React.Component{
  render(){
    return(
      <View style ={styles.container}>
       <MapView
        style = {styles.map}
        zoomEnabled={true}
        initialRegion={initialRegion}>
        
          {marker[0] != null && marker.map((marker, index) => (
            <MapView.Marker
                key = {index}
                coordinate = {{
                    latitude: marker.latitude,
                    longitude: marker.longitude
                }}
                title = { marker.title }
                description = {marker.desc}
            />
            ))
          }
        </MapView>
        
      </View>
    )
  }
  
} 
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});