import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
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
      <ScrollView>
        {games.map((game) => (
          <View key={game.id} style={styles.card}>
            <Image source={{ uri: game.image }} style={styles.image}/>
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.description}>{game.description}</Text>
            <Text style={styles.genre}>{game.genre}</Text>
          </View>
        ))}
      </ScrollView>
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
  card: {
    marginBottom: 36,
  },
  image: {
    width: 365,
    height: 206,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1f1f1f",
  },
  description: {
    fontSize: 16,
    color: "#2c2824",
  },
  score: {
    fontSize: 16,
    color: "#f7b427",
  },
  genre: {
    fontSize: 14,
    color: "#0d610b",
    marginTop: 10,
  },
});
