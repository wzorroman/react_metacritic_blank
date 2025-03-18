import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { getLatestGames } from "./lib/metacritic";
import { getLatestGamesFree } from "./lib/freeToGame";

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGamesFree().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {games.map((game) => (
        <View key={game.id} style={styles.card}>
          <Text>{game.title}</Text>
          <Image source={{ uri: game.image }}
            style={{
              width: 215,
              height: 350,
              resizeMode: "center",
            }}
          />
          <Text style={styles.title}>{game.title}</Text>
          <Text style={styles.description}>{game.description}</Text>

        </View>
      ))}
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
