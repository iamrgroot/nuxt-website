<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import * as z from "zod";

defineRouteRules({
  ssr: false,
});

definePageMeta({
  validate: async () => useRuntimeConfig().public.spotifyEnableAuth,
});

const { query } = useRoute();
const { push } = useRouter();

const { spotifyClientId, doSpotifyAuth, resetSpotifyAuth, currentToken } =
  await useSpotifyAuthentication();

const form = useForm({
  validationSchema: toTypedSchema(
    z.object({
      clientId: z.string(),
    })
  ),
});

const onSubmit = form.handleSubmit(({ clientId }) => {
  spotifyClientId.value = clientId;
  doSpotifyAuth();
});

if (currentToken.value) {
  form.setValues({
    clientId: spotifyClientId.value,
  });
}
// Spotify auth callback
else if ("code" in query) {
  doSpotifyAuth();
}
</script>

<template>
  <form class="w-96" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="clientId">
      <FormItem>
        <FormLabel>{{ $t("spotify.clientId") }}</FormLabel>
        <FormControl>
          <Input type="text" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <template v-if="currentToken">
      <p class="mt-4">{{ $t("spotify.currentToken") }}:</p>
      <pre v-if="currentToken" class="overflow-x-scroll mt-4">{{
        currentToken
      }}</pre>
    </template>
    <Button v-if="!currentToken" type="submit" class="mt-4 mr-4">
      {{ $t("buttons.submit") }}
    </Button>
    <Button v-else class="mt-4 mr-4" @click="resetSpotifyAuth">
      {{ $t("buttons.reset") }}
    </Button>
    <Button @click="push({ path: '/' })">
      {{ $t("buttons.back") }}
    </Button>
  </form>
</template>
