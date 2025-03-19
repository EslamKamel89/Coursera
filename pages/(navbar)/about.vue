<template>
  <h2 class="text-3xl font-bold font-mono mb-2 uppercase">about</h2>
  <h3>{{ route.query?.secret }}</h3>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped></style>
