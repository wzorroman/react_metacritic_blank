import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


const icon = require('./assets/favicon.png');


export default function App() {
  return (
    <View style={styles.container}>
      <Text>WZ starter to working on this app! ;)</Text>
      <StatusBar style="auto" />
      <Image source={icon} style={{
        width:200, 
        height: 100,
        resizeMode: 'center',
        }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
