<template>
  <h2 class="text-3xl font-bold font-mono mb-2 uppercase">about</h2>
  <h3>{{ route.query?.secret }}</h3>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "green",
  middleware: [
    function (to, from) {
      if (import.meta.client) {
        console.log("Inline Middleware in the about page");
      }
      if (to.query?.secret != "Be the best version of your self") {
        return navigateTo("/");
      }
    },
    "logger",
  ],
});
const route = useRoute();
</script>
