import { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated, Dimensions, Platform } from "react-native";


export function GameCard({ game }) {
  const [height, setHeight] = useState(250); // Altura inicial
  const descriptionRef = useRef(null);
  const { width } = Dimensions.get("window");

  // Calcular estilos dinámicos según la plataforma
  const dynamicStyles = Platform.select({
    web: {
      width: "22%", // Aproximadamente 4 tarjetas por fila
      height: 320,
      margin: "1%",
    },
    default: {
      width: width * 0.9, // Ocupa el 90% del ancho en móvil
      height: "auto", // Ajusta la altura automáticamente
      marginVertical: 10,
    },
  });

  // para altura dinámica
  useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.measure((x, y, width, height) => {
        // Suma la altura de la imagen, el texto y un margen extra
        const cardHeight = 150 + height + 70;
        setHeight(cardHeight);
      });
    }
  }, [game.description]);

  return (
    // <View key={game.id} style={[styles.cardContainer, { height }]}>
    <View key={game.id} style={[styles.cardContainer, dynamicStyles]}>
      <Image
        source={{ uri: game.image }}
        style={styles.gameImage}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>#{game.id} - {game.title}</Text>
        <Text style={styles.description}>{game.description}</Text>
        <View style={styles.bottomInfo}>
          <View style={styles.platformContainer}>
            <Text style={styles.platform}>{game.platform}</Text>
          </View>
          <Text style={styles.genre}>{game.genre}</Text>
        </View>
      </View>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles2 = StyleSheet.create({
  card: {
    marginBottom: 42,
    border: "1px solid #7c7c7c",
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#e3e3e3",
  },
  image: {
    width: 365,
    height: 206,
    borderRadius: 10,
    border: "1px solid #7c7c7c",
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

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    backgroundColor: "#f2f3f4",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  gameImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  bottomInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  platformContainer: {
    backgroundColor: "#1bb1e8",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  platform: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
  },
  genre: {
    fontSize: 13,
    color: "#229954",
    fontWeight: "bold",
  },
});
