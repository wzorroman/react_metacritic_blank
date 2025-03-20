import { useEffect, useState } from "react";

import { FlatList, View, ActivityIndicator, ScrollView, Platform, StyleSheet } from "react-native";
import { getLatestGamesFree } from "../lib/freeToGame";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard, GameCard } from "./GameCard";
import { Logo } from "./Logo";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();
  //const isWeb = DeviceInfo.getSystemName() === "Browser";

  useEffect(() => {
    getLatestGamesFree().then((games) => {
      setGames(games);
    }).catch((e) => {
      console.error('Error cargando juegos:', e);
    });
  }, []);

  // Función para renderizar la lista según la plataforma
  const renderList = () => {
    if (Platform.OS === "web") {
      // Usar ScrollView o un div para web
      console.log("Using Web");
      return (
        // <ScrollView style={{ height: "94vh" }}>
        <ScrollView style={styles.webContainer}>
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </ScrollView>
      );
    } else {
      // Usar FlatList para móvil (Android/iOS)
      console.log("Using Mobile");
      return (
        // <View style={{ flex: 1, backgroundColor: "#333" }}>
        <View>
          <FlatList
            data={games}
            contentContainerStyle={{ flexGrow: 2 }}
            keyExtractor={(game) => game.id.toString()}
            renderItem={({ item, index }) => (
              <AnimatedGameCard game={item} index={index} />
            )}
          />
        </View>
      );
    }
  };

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{ marginBottom: 20 }}>
        <Logo />
      </View>
      {games.length === 0 ? (
        <ActivityIndicator color={"#f50dcf"} size={"large"} />
      ) : (
        renderList()
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  webContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    //justifyContent: "space-between",
    //paddingHorizontal: "2%",
    height: "94vh",
  },
  mobileContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
});
