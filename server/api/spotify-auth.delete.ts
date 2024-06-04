import { removeSpotifyAuth } from "~/utils/spotifyAuthStorage";

export default eventHandler(async () => {
  const config = useRuntimeConfig();

  if (!config.public.spotifyEnableAuth) {
    return createError({
      statusCode: 403,
    });
  }

  await removeSpotifyAuth();

  return {
    message: "ok",
  };
});
