//imports
import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

//declare
const { width, height } = Dimensions.get('window');
//const origin = {latitude: 37.3318456, longitude: -122.0296002};
//const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = 'AIzaSyBbPSKOHDvHPOZMa_txPfKU0AcC9En23Vg';

const initialRegion = {
  latitude: 1.3098,
  longitude: 103.7775,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
}

class Maps extends React.Component{
  render(){
    return(
      <View style ={styles.container}>
        //mapview create
       <MapView
       style = {styles.map}
       zoomEnabled={true}
        initialRegion={initialRegion}>
        
        <MapViewDirections
          origin={{latitude: 1.3098,
            longitude: 103.7775}}
          destination={{latitude: 1.3236,
            longitude: 103.9273}}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={500}
          strokeColor="red"
        />
        //create markers
        <MapView.Marker
            coordinate={{latitude: 1.3098,
            longitude: 103.7775}}
            title={"title"}
            description={"description"}
         />
         <MapView.Marker
            coordinate={{latitude: 1.3236,
            longitude: 103.9273}}
            title={"title"}
            description={"description"}
         />

        </MapView>
        
      </View>
    )
  }
  
} 
export default Maps;

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