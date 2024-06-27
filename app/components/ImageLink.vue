<script setup lang="ts">
import type { Icon, NuxtImg } from "#components";
import type { HTMLAttributes } from "vue";

type ImageProps = InstanceType<typeof NuxtImg>["$props"] & HTMLAttributes;
type IconProps = Omit<InstanceType<typeof Icon>["$props"], "name"> &
  HTMLAttributes;

defineProps<{
  href: string;
  text?: string;
  icon?: string;
  image?: string;
  imageProps?: ImageProps;
  iconProps?: IconProps;
}>();
</script>

<template>
  <a :href="href" target="_blank">
    <Icon
      v-if="icon"
      class="mr-1"
      :name="icon"
      size="16"
      v-bind="iconProps ?? {}"
    />
    <NuxtImg
      v-else-if="image"
      :src="image"
      :width="16"
      :height="16"
      class="inline mr-1"
      alt=""
      placeholder
      v-bind="imageProps ?? {}"
    />
    <span class="underline">{{ text }}</span>
  </a>
</template>
