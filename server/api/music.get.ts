import { AccessToken, SpotifyApi } from "@spotify/web-api-ts-sdk";

// TODO remove when spotify lets you use client secret to login
async function getAccessToken(
  clientId: string,
  clientSecret: string,
  refreshToken: string
): Promise<AccessToken> {
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: clientId,
    }),
  });

  return await result.json();
}

export default defineCachedEventHandler(
  async () => {
    const { spotifyClientId, spotifyClientSecret, spotifyRefreshToken } =
      useRuntimeConfig();

    const token = await getAccessToken(
      spotifyClientId,
      spotifyClientSecret,
      spotifyRefreshToken
    );

    const authenticatedSpotify = SpotifyApi.withAccessToken(
      spotifyClientId,
      token
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
