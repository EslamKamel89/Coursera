<template>
  <h2 class="text-3xl font-bold font-mono mb-2 uppercase">{{ title }}</h2>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
