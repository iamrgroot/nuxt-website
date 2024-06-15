import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { getSpotifyAuth } from "~/utils/spotifyAuthStorage";

export default defineCachedEventHandler(
  async () => {
    const auth = await getSpotifyAuth();

    if (!auth) {
      throw new Error(`No token found. Visit /spotify-auth to get one.`);
    }

    const authenticatedSpotify = SpotifyApi.withAccessToken(
      auth.clientId,
      auth.token
    );

    const topItems = await authenticatedSpotify.currentUser.topItems(
      "artists",
      "medium_term",
      3
    );

    return topItems.items;
  },
  { maxAge: 60 * 60 }
);
