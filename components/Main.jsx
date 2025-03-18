import { useEffect, useState } from "react";

import { FlatList, View, ActivityIndicator } from "react-native";
import { getLatestGamesFree } from "../lib/freeToGame";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameCard } from "./GameCard";
import { Logo } from "./Logo";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGamesFree().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{ marginBottom: 20 }}>
        <Logo />
      </View>
      {games.length === 0 ? (
        <ActivityIndicator color={"#f50dcf"} size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.id}
          renderItem={({ item }) => <GameCard game={item} />}
        />
      )}
    </View>
  );
}
