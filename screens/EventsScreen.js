import React from 'react';
import MapView,{Polyline} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');
const GOOGLE_MAPS_APIKEY = 'AIzaSyBbPSKOHDvHPOZMa_txPfKU0AcC9En23Vg';
const initialRegion = {
  latitude: 1.2835711924428908, 
  longitude: 103.84446343773878,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
} 
var marker0 = [{latitude:1.2815800654159542, longitude:103.84423299435205, title:'Buddha Tooth Relic Temple',desc:'Tang dynasty–style temple housing religious relics'},
              {latitude:1.2827719962663375, longitude: 103.8452524368565, title: 'Sri Mariamman Temple',desc:'Built in 1827, the oldest Hindu temple in Singapore'},
              {latitude:1.283363642895326, longitude:103.84557209255705, title:'Masjid Jamae (Chulia)',desc:'19th-century mosque with eclectic architecture'},
              {latitude:1.284603077361679, longitude:103.84358936326166, title:'Chinatown MRT Station',desc:'Downtown Line & North East Line'},
              {latitude:1.2817554886620903 , longitude:103.84481371608447, title:'Chinatown Street Markets',desc:'Colorful Chinese shophouses selling Asian street food & souvenirs'},
              {latitude:1.282856729074865, longitude:103.84316360151024, title:'Chinatown Complex', desc:'Straightforward marketplace offering diverse retailers, plus a food court'}];

var marker1 = [{latitude:1.3080416946421083,longitude:103.85222221683591,title:'Sri Veeramakaliamman Temple',desc:'This Hindu temple displays architecture & colorful statues of deities'},
              {latitude:1.3071968588745324, longitude:103.85085803253624, title:'Tan Teng Niah',desc:'This unique, colorful Chinese villa with 2 stories was built in 1900'},
              {latitude: 1.307330826911569, longitude: 103.85031515103434, title:'Buffalo Mural',desc:''},
              {latitude: 1.3063675793438427, longitude:103.85026206360122, title:'Tekka Center',desc:''},
              {latitude:1.3067074282378992, longitude:103.84939437733111, title:'Little India MRT Station',desc:''}];

class App extends React.Component{
  render(){
    return(
      <View style ={styles.container}>
       <MapView
        style = {styles.map}
        zoomEnabled={true}
        initialRegion={initialRegion}>
        
        <Polyline
          coordinates={marker0}
          strokeColor="#000" // fallback for when strokeColors is not supported by the map-provider
          strokeColors={['#7F0000']}
          strokeWidth={6}
          />

          <Polyline
          coordinates={marker1}
          strokeColor="#000" // fallback for when strokeColors is not supported by the map-provider
          strokeColors={['#7F0000']}
          strokeWidth={6}
          />
        
        

          {marker0[0] != null && marker0.map((marker0, index) => (
            <MapView.Marker
                key = {index}
                coordinate = {{
                    latitude: marker0.latitude,
                    longitude: marker0.longitude
                }}
                title = { marker0.title }
                description = {marker0.desc}
            />
            ))
          }

          {marker1[0] != null && marker1.map((marker1, index) => (
            <MapView.Marker
                key = {index}
                coordinate = {{
                    latitude: marker1.latitude,
                    longitude: marker1.longitude
                }}
                title = { marker1.title }
                description = {marker1.desc}
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