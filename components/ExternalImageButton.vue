<script setup lang="ts">
import type { NuxtImg } from "#build/components";
import type Button from "./ui/button/Button.vue";

type ButtonProps = InstanceType<typeof Button>["$props"];
type ImageProps = InstanceType<typeof NuxtImg>["$props"];

defineProps<{
  text: string;
  imageUrl: string;
  href: string;
  buttonProps?: ButtonProps;
  imageProps?: ImageProps;
}>();
</script>

<template>
  <Button
    variant="secondary"
    size="sm"
    as-child
    class="my-1 h-6"
    v-bind="buttonProps ?? {}"
  >
    <a :href="href">
      <NuxtImg
        :src="imageUrl"
        :width="14"
        alt=""
        class="mr-2"
        placeholder
        v-bind="imageProps ?? {}"
      />
      {{ text }}
    </a>
  </Button>
</template>
