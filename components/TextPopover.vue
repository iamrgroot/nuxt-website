<script setup lang="ts">
import { useElementHover } from "@vueuse/core";
import { ref } from "vue";

const trigger = ref();
const isHovered = useElementHover(trigger);
</script>

<template>
  <Popover :open="isHovered">
    <PopoverTrigger as="span">
      <span ref="trigger">
        <slot name="trigger" />
      </span>
    </PopoverTrigger>
    <PopoverContent>
      <slot name="text" />
    </PopoverContent>
  </Popover>
</template>
