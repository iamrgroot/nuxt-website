import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { useStorage } from "@vueuse/core";

export const useSpotifyAuthentication = async () => {
  const { data: currentSpotifyToken } = await useFetch<SpotifyAuth>(
    "/api/spotify-auth"
  );
  const currentToken = ref(currentSpotifyToken.value?.token);

  const spotifyClientId = useStorage<string | undefined>(
    "spotify-client-id",
    currentSpotifyToken.value?.clientId
  );

  const doSpotifyAuth = () => {
    SpotifyApi.performUserAuthorization(
      spotifyClientId.value!,
      `${window.location.origin}/spotify-auth`,
      [
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-top-read",
      ],
      async (accessToken) => {
        await $fetch<SpotifyAuth>("/api/spotify-auth", {
          method: "post",
          body: {
            clientId: spotifyClientId.value,
            token: accessToken,
          },
        });

        currentToken.value = accessToken;
      }
    );
  };

  const resetSpotifyAuth = async () => {
    await $fetch<SpotifyAuth>("/api/spotify-auth", {
      method: "delete",
    });

    currentToken.value = undefined;
  };

  return {
    currentToken,
    spotifyClientId,
    doSpotifyAuth,
    resetSpotifyAuth,
  };
};
