import { useEffect, useState } from "react";

import { FlatList, View, ActivityIndicator, ScrollView, Platform } from "react-native";
import { getLatestGamesFree } from "../lib/freeToGame";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameCard } from "./GameCard";
import { Logo } from "./Logo";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();
  //const isWeb = DeviceInfo.getSystemName() === "Browser";

  useEffect(() => {
    getLatestGamesFree().then((games) => {
      setGames(games);
    });
  }, []);

  // Función para renderizar la lista según la plataforma
  const renderList = () => {
    if (Platform.OS === "web") {
      // Usar ScrollView o un div para web
      return (
        <ScrollView style={{ height: "94vh" }}>
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </ScrollView>
      );
    } else {
      // Usar FlatList para móvil (Android/iOS)
      return (
        <FlatList
          data={games}
          keyExtractor={(game) => game.id.toString()}
          renderItem={({ item }) => <GameCard game={item} />}
          contentContainerStyle={{ flexGrow: 2 }}
        />
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
