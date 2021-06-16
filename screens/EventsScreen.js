import React from 'react';
import MapView,{Polyline} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');
const GOOGLE_MAPS_APIKEY = 'AIzaSyBbPSKOHDvHPOZMa_txPfKU0AcC9En23Vg';
const initialRegion = {
  latitude: 1.3646458053494213,
  longitude: 103.81211035383676,
  latitudeDelta: 0.25,
  longitudeDelta: 0.25,
} 
var marker0 = [{latitude:1.284603077361679, longitude:103.84358936326166, title:'Chinatown MRT Station',desc:'Downtown Line & North East Line'},
              {latitude:1.283363642895326, longitude:103.84557209255705, title:'Masjid Jamae (Chulia)',desc:'19th-century mosque with eclectic architecture'},
              {latitude:1.2817554886620903 , longitude:103.84481371608447, title:'Chinatown Street Markets',desc:'Colorful Chinese shophouses selling Asian street food & souvenirs'},
              {latitude:1.2827719962663375, longitude: 103.8452524368565, title: 'Sri Mariamman Temple',desc:'Built in 1827, the oldest Hindu temple in Singapore'},
              {latitude:1.2815800654159542, longitude:103.84423299435205, title:'Buddha Tooth Relic Temple',desc:'Tang dynasty–style temple housing religious relics'},
              {latitude:1.282856729074865, longitude:103.84316360151024, title:'Chinatown Complex', desc:'Straightforward marketplace offering diverse retailers, plus a food court'}];

var marker1 = [{latitude:1.3080416946421083,longitude:103.85222221683591,title:'Sri Veeramakaliamman Temple',desc:'This Hindu temple displays architecture & colorful statues of deities'},
              {latitude:1.3071968588745324, longitude:103.85085803253624, title:'Tan Teng Niah',desc:'This unique, colorful Chinese villa with 2 stories was built in 1900'},
              {latitude: 1.307330826911569, longitude: 103.85031515103434, title:'Buffalo Mural',desc:'A Mural depicting a buffalo'},
              {latitude: 1.3063675793438427, longitude:103.85026206360122, title:'Tekka Center',desc:'Mixed-use market building established in 1915 and located here since 1982.'},
              {latitude:1.3067074282378992, longitude:103.84939437733111, title:'Little India MRT Station',desc:'Downtown Line & North East Line'}];

var marker2 = [{latitude:1.4125312349318588,longitude:103.90446130172893,title:'Punggol Waterway Park',desc:'Greenspace along a waterway offering walking & biking paths.'},
              {latitude:1.4176663129973768,  longitude:103.91516715112361, title:'Coney Island (West Entrance)',desc:'A scenic place to enjoy the scenery and exercise.'},
              {latitude: 1.40267597761846,  longitude: 103.92976029420826, title:'Coney Island (East Entrance)',desc:'A scenic place to enjoy the scenery and exercise.'},
              {latitude: 1.3991650480605684,  longitude:103.9325046586621, title:'Lorong Halus Jetty',desc:'The jetty is a relaxing place to do some photography.'},
              {latitude:1.39576416465213332, longitude:103.9241698060151, title:'Lorong Halus Wetland',desc:'There are many forms of wildlife here'}];

var marker3 = [{latitude:1.1621232952567198,longitude:104.0393432034132,title:'THE ILLUSION',desc:'Fun and exciting visual illusions'},
              {latitude:1.1620437130435197,longitude:104.04035229573543,title:'Go-kart Bengkong Laut',desc:'Go-kart racing for the whole family'},
              {latitude:1.1622218985926565, longitude:104.04104256432245,title:'Miniature House Indonesia',desc:'Indonesian traditional houses miniaturized'},
              {latitude:1.1626914986603483,longitude:104.04255406386751,title:'Monkey Beach Hut Sea Sport Centre',desc:'An affordable place for water sports'},
              {latitude:1.160917022866831,longitude:104.04220271346256,title:'Belalang Adventure',desc:'Many outdoor activities for everyone'},
              {latitude:1.1627397684681748,longitude:104.04512898451884,title:"Taman Dino's",desc:'Dino-themed park with many attractions for the family'}];

var marker4 = [{latitude:3.1355558623286153, longitude:101.47780598158194,title:'Port mancing setia alam',desc:'It is a beautiful place full of flowers and trees'},
              {latitude:3.1382550473779536, longitude:101.47899024187782, title:'Lakeview',desc:'There is a beautiful lake which you can relax and take pictures'},
              {latitude: 3.1394763014046387, longitude: 101.48483611982127, title:'Budiman Real Peak',desc:'A scenic place to enjoy the a view from the top '},
              {latitude: 3.1354760958749788, longitude: 101.48499409272493, title:'Lookup point Alam Budiman ',desc:'A scenic place to enjoy the a view from the top'},
              {latitude:3.135855461783505, longitude: 101.4816137025421, title:'Budimen Lakeside',desc:'A place where many swamps plants and animal resides giving an rural feel'}];
              
var marker5 = [{latitude:10.724945894058532, longitude:122.55703538169612,title:'Graciano Lopez Jaena Park',desc:'A mundane illonggo plaza built during the spanish era.'},
              {latitude:10.722609698570064,   longitude:122.55426535495474, title:'Aquarium Cafe',desc:'The Exotic Reptiles and the Fishes are a sight to see with good ambiance.'},
              {latitude: 10.718665057793231,   longitude: 122.54815767985782, title:'Iloilo Museum of Contemporary Art',desc:'ILOMOCA displays modern artworks with friendly staff'},
              {latitude: 10.71438565232438,   longitude:122.54545295190005, title:'Iloilo Business Park',desc:'This is perfect place to hang out with friends and a wonderful hub. '},];
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
          strokeColor="#AD1457" // fallback for when strokeColors is not supported by the map-provider
          strokeColors={['#AD1457']}
          strokeWidth={6}
          />

        <Polyline
          coordinates={marker1}
          strokeColor="yellow" // fallback for when strokeColors is not supported by the map-provider
          strokeColors={['yellow']}
          strokeWidth={6}
          />

        <Polyline
          coordinates={marker2}
          strokeColor="#6A1B9A" // fallback for when strokeColors is not supported by the map-provider
          strokeColors={['#6A1B9A']}
          strokeWidth={6}
          />

        <Polyline
          coordinates={marker3}
          strokeColor="blue" // fallback for when strokeColors is not supported by the map-provider
          strokeColors={['blue']}
          strokeWidth={6}
          />

        <Polyline
          coordinates={marker4}
          strokeColor="red" // fallback for when strokeColors is not supported by the map-provider
          strokeColors={['red']}
          strokeWidth={6}
          />

        <Polyline
          coordinates={marker5}
          strokeColor="orange" // fallback for when strokeColors is not supported by the map-provider
          strokeColors={['orange']}
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

          {marker2[0] != null && marker2.map((marker2, index) => (
            <MapView.Marker
                key = {index}
                coordinate = {{
                    latitude: marker2.latitude,
                    longitude: marker2.longitude
                }}
                title = { marker2.title }
                description = {marker2.desc}
            />
            ))
          }

          {marker3[0] != null && marker3.map((marker3, index) => (
            <MapView.Marker
                key = {index}
                coordinate = {{
                    latitude: marker3.latitude,
                    longitude: marker3.longitude
                }}
                title = { marker3.title }
                description = {marker3.desc}
            />
            ))
          }

          {marker4[0] != null && marker4.map((marker4, index) => (
            <MapView.Marker
                key = {index}
                coordinate = {{
                    latitude: marker4.latitude,
                    longitude: marker4.longitude
                }}
                title = { marker4.title }
                description = {marker4.desc}
            />
            ))
          }

          {marker5[0] != null && marker5.map((marker5, index) => (
            <MapView.Marker
                key = {index}
                coordinate = {{
                    latitude: marker5.latitude,
                    longitude: marker5.longitude
                }}
                title = { marker5.title }
                description = {marker5.desc}
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