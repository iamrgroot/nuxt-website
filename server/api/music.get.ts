import { SpotifyApi } from "@spotify/web-api-ts-sdk";

export default defineCachedEventHandler(
  async () => {
    const { spotifyClient, spotifyAccessToken, spotifyRefreshToken } =
      useRuntimeConfig();

    const authenticatedSpotify = SpotifyApi.withAccessToken(
      spotifyClient,
      // {
      //   access_token:
      //     "",
      //   token_type: "Bearer",
      //   expires_in: 3600,
      //   refresh_token:
      //     "",
      //   // scope:
      //   //   "user-read-currently-playing user-read-recently-played user-top-read",
      //   expires: 1718485038526,
      // }
      {
        access_token: spotifyAccessToken,
        refresh_token: spotifyRefreshToken,
        expires_in: 3600,
        token_type: "Bearer",
      }
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
