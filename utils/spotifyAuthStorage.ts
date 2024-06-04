import { type AccessToken } from "@spotify/web-api-ts-sdk";

const storage = "file";
const storageKey = "spotify-auth";

export type SpotifyAuth = {
  clientId: string;
  token: AccessToken;
};

export const getStorage = async () => await useStorage<SpotifyAuth>(storage);

export const getSpotifyAuth = async () =>
  await (await getStorage()).getItem(storageKey);

export const setSpotifyAuth = async (value: SpotifyAuth) =>
  await (await getStorage()).setItem(storageKey, value);

export const removeSpotifyAuth = async () =>
  await (await getStorage()).removeItem(storageKey);
