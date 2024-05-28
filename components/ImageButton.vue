<script setup lang="ts">
import type { Icon, NuxtImg } from "#components";
import type Button from "./ui/button/Button.vue";
import type { HTMLAttributes, LinkHTMLAttributes } from "vue";

type ButtonProps = InstanceType<typeof Button>["$props"] & HTMLAttributes;
type ImageProps = InstanceType<typeof NuxtImg>["$props"] & HTMLAttributes;
type IconProps = Omit<InstanceType<typeof Icon>["$props"], "name"> &
  HTMLAttributes;

defineProps<{
  href: string;
  text?: string;
  icon?: string;
  image?: string;
  buttonProps?: ButtonProps;
  imageProps?: ImageProps;
  iconProps?: IconProps;
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
    <a :href="href" target="_blank">
      <Icon
        v-if="icon"
        :name="icon"
        size="14"
        :class="{ 'mr-2': !!text }"
        v-bind="iconProps ?? {}"
      />
      <NuxtImg
        v-else-if="image"
        :src="image"
        :width="14"
        :height="14"
        alt=""
        class="mr-2"
        placeholder
        v-bind="imageProps ?? {}"
      />
      {{ text }}
    </a>
  </Button>
</template>
