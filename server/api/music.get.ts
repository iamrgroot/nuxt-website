import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { RefreshTokenStrategy } from "@@/server/lib/spotify-auth";

export default defineCachedEventHandler(
  async () => {
    const { spotifyClientId, spotifyClientSecret, spotifyRefreshToken } =
      useRuntimeConfig();

    const authenticatedSpotify = new SpotifyApi(
      new RefreshTokenStrategy(
        spotifyClientId,
        spotifyClientSecret,
        spotifyRefreshToken
      )
    );

    const topItems = await authenticatedSpotify.currentUser.topItems(
      "artists",
      "short_term",
      3
    );

    return topItems.items;
  },
  { maxAge: 60 * 60 }
);
