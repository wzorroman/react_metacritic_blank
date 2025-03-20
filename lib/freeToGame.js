export async function getLatestGamesFree() {
  const LATEST_GAMES = "http://192.168.122.1:3000/api/games";
  // const LATEST_GAMES = "http://localhost:3000/api/games";
  const rawData = await fetch(LATEST_GAMES);
  const json = await rawData.json();

  const items = json;

  return items.map((item) => {
    return {
      id: item.id,
      title: item.title,
      description: item.short_description,
      image: item.thumbnail,
      genre: item.genre,
      platform: item.platform,
      developer: item.developer,
      releaseDate: item.release_date,
    };
  });
}
