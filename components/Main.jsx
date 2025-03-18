import { useEffect, useState } from "react";

import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { getLatestGamesFree } from "../lib/freeToGame";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameCard } from "./GameCard";

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
      <ScrollView>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </ScrollView>
    </View>
  );
}
