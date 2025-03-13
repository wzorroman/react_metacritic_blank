import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';


const icon = require('./assets/favicon.png');


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" /> {/* Barra SUPERIOR: (bateria, hora) - light */} 
      <Image source={{uri: "https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-513164-52.jpg"}} 
        style={{
          width:215, 
          height: 350,
          resizeMode: 'center',
          }} />
      <Text>WZ starter to working on this app! ;)</Text>
      {/* Este es un boton x defecto */}
      <Button 
        color='#b4a7d6'
        title="Default Button"
        onPress={() => alert('Default button!')}
        />

      {/* Este es un boton customizado */}
      <TouchableHighlight
        style={{
          backgroundColor: '#f0c929',
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
          borderRadius: 10,
          underlayColor: 'red',
        }}
        onPress={() => alert('I am a custom button!')}    
        >
          <Text>Custom button</Text>
        </TouchableHighlight>  
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
