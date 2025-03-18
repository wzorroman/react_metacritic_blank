import { StyleSheet, Text, View, Image } from "react-native";

export function GameCard({ game }) {
  return (
    <View key={game.id} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}>#{game.id} - {game.title}</Text>
      <Text style={styles.description}>{game.description}</Text>
      <Text style={styles.genre}>{game.genre}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
