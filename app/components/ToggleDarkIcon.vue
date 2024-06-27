<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({ disableTransition: false });
const toggleDark = useToggle(isDark);
</script>

<template>
  <Button
    title="Toggle dark mode"
    variant="ghost"
    class="px-2"
    @click="toggleDark()"
  >
    <Icon
      size="24"
      :name="
        isDark ? 'material-symbols:light-mode' : 'material-symbols:dark-mode'
      "
    />
  </Button>
</template>
