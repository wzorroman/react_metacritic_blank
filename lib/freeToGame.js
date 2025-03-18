export async function getLatestGamesFree() {
  const LATEST_GAMES = "http://localhost:3000/api/games";
  const rawData = await fetch(LATEST_GAMES);
  const json = await rawData.json();

  const items = json;

  return items.map((item) => {
    console.log(item);

    // const { description, slug, releaseDate, image, criticScoreSummary, title } = item;
    // const { score } = criticScoreSummary;

    // // crea la imagen
    // const { bucketType, bucketPath } = image;
    // const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

    // return {
    //   description,
    //   releaseDate,
    //   score,
    //   slug,
    //   title,
    //   image: img,
    // };
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
