import { getSpotifyAuth } from "~/utils/spotifyAuthStorage";

export default eventHandler(async () => {
  const config = useRuntimeConfig();

  if (!config.public.spotifyEnableAuth) {
    return createError({
      statusCode: 403,
    });
  }

  return await getSpotifyAuth();
});
