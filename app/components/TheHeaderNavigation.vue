<script setup lang="ts">
import type { Navigation } from '~~/shared/types/navigation';

const navigations = computed<Navigation[]>(() => [
  {
    text: `홈`,
    to: `/`,
  },
  {
    text: `이벤트`,
    to: `/event`,
  },
  {
    text: `시술예약`,
    to: `/appointment`,
  },
  {
    text: `지유 둘러보기`,
    to: `/browse`,
  },
]);
</script>

<template>
  <div class="flex border-b px-4">
    <NuxtLink
      v-for="navigation of navigations"
      :key="(navigation.to as string)"
      :to="navigation.to"
      class="p-3 text-sm"
    >
      {{ navigation.text }}
    </NuxtLink>
  </div>
</template>
