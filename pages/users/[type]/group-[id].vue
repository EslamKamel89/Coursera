<template>
  <h2 class="text-3xl font-bold font-mono mb-2 uppercase">
    Your profile {{ $route.params.type }}, Your ID is {{ $route.params.id }}
  </h2>
  <input
    type="text"
    v-model="name"
    class="border rounded-xl px-3 py-2 w-2/3 my-2"
    placeholder="Please Enter Your Name"
  />
  <div class="my-3 flex gap-x-2">
    <button
      class="bg-red-500 text-white px-3 py-2 rounded-xl"
      @click="showPrompt"
    >
      Show Prompt
    </button>
    <NuxtLink
      :to="`/users/info/${name}`"
      v-if="name"
      class="bg-blue-500 text-white px-3 py-2 rounded-xl"
      >Info</NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
const name = ref("");
const showPrompt = () => {
  if (import.meta.client) {
    name.value = prompt("Please Enter Your Name") ?? "";
  }
};
</script>
