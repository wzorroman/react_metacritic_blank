import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


const icon = require('./assets/favicon.png');


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" /> {/* Barra SUPERIOR: (bateria, hora) - light */} 
      <Text>WZ starter to working on this app! ;)</Text>      
      <Image source={{uri: "https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-513164-52.jpg"}} 
      style={{
        width:215, 
        height: 350,
        resizeMode: 'center',
        }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
