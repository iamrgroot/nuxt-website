import * as z from "zod";
import { setSpotifyAuth } from "~/utils/spotifyAuthStorage";

const spotifyAuthSchema = z.object({
  clientId: z.string(),
  token: z.object({
    access_token: z.string(),
    token_type: z.string(),
    expires_in: z.number(),
    refresh_token: z.string(),
    expires: z.number(),
  }),
});

export default eventHandler(async (event) => {
  const config = useRuntimeConfig();

  if (!config.public.spotifyEnableAuth) {
    return createError({
      statusCode: 403,
    });
  }

  const result = await readValidatedBody(event, (body) =>
    spotifyAuthSchema.safeParse(body)
  );

  if (!result.success) {
    return result.error;
  }

  setSpotifyAuth(result.data);

  setResponseStatus(event, 201);
  return {
    message: "ok",
  };
});
