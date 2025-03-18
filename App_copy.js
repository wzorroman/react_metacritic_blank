import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  Pressable,
} from "react-native";

const icon = require("./assets/favicon.png");

export default function App() {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = "";
  if (timesPressed > 1) {
    textLog = timesPressed + "x onPress";
  } else if (timesPressed > 0) {
    textLog = "onPress";
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" /> {/* Barra SUPERIOR: (bateria, hora) - light */} 
      <Image
        source={{
          uri: "https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-513164-52.jpg",
        }}
        style={{
          width: 215,
          height: 350,
          resizeMode: "center",
        }}
      />
      <Text>WZ starter to working on this app! ;)</Text>
      {/* Este es un boton x defecto */}
      <Button
        color="#b4a7d6"
        title="Default Button"
        onPress={() => alert("Default button!")}
      />

      {/* Este es un boton customizado */}
      <TouchableHighlight
        style={{
          backgroundColor: "#f0c929",
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
          underlayColor: "red",
        }}
        onPress={() => alert("I am a custom button!")}
      >
        <Text>Custom button</Text>
      </TouchableHighlight>
      
      {/* Best way - BTN  */}
      <Pressable
        onPress={() => {
          setTimesPressed(current => current + 1);
        }}
        style={({ pressed }) => [
            {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
            fontSize: pressed ? 30 : 20,
            },
            styles.wrapperCustom,
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>{pressed ? "Pressed!" : "Press Me"}</Text>
        )}
        </Pressable>
      <View style={{ backgroundColor: "yellow", marginTop: 10 }}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "center",
  },
});
