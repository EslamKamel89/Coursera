<template>
  <h2 class="text-3xl font-bold font-mono mb-2 uppercase">Error 404</h2>
  <div class="" style="margin-bottom: 10px">Page Not Found</div>
  <div></div>
  <div>
    <div v-if="slugs.length > 0">
      <span>Path (</span>
      <span v-for="slug in slugs" :key="slug" class="text-lg font-bold">
        {{ slug }}/
      </span>
      <span>) Not Found </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const slugs = useRoute().params.slug as string[];
</script>

<style scoped></style>
