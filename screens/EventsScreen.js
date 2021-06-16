import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');
const GOOGLE_MAPS_APIKEY = 'AIzaSyBbPSKOHDvHPOZMa_txPfKU0AcC9En23Vg';
const initialRegion = {
  latitude: 1.3098,
  longitude: 103.7775,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
}
var marker = [{latitude:0,longitude:0},{latitude:0.005,longitude:0.005}];
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
                title = { marker.contactName }
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