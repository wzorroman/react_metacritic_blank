import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

// Other way to import image -- No suggested
// import icon from './assets/favicon.png';

// best way to import image
const icon = require('./assets/favicon.png');


export default function App() {
  return (
    <View style={styles.container}>
      <Text>WZ starter to working on this app! ;)</Text>
      <StatusBar style="auto" />
      <Image source={icon} style={{width:100, height: 100}} />
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
