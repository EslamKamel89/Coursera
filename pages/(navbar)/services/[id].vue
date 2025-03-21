<template>
  <h2 class="text-3xl font-bold font-mono mb-2 uppercase">
    service:{{ route.params?.id ?? "Not known" }}
  </h2>
  <Info />
</template>

<script setup lang="ts">
const route = useRoute();
definePageMeta({
  validate: async (route) => {
    const regExp = new RegExp("^\\d+$");
    return typeof route.params.id == "string" && regExp.test(route.params.id);
  },
});
</script>
