<template>
  <NavbarComp :color="color" />
  <div class="max-w-4xl mx-5 md:mx-auto mt-4">
    <slot />
    <div
      class="flex items-center space-x-2 mt-5 text-white pt-4 pb-20 rounded-xl px-2"
      :class="{
        'bg-red-500': color == 'red',
        'bg-green-500': color == 'green',
        'bg-blue-500': color == 'blue',
      }"
    >
      <label>Pick Layout Theme</label>
      <select v-model="color" class="text-black rounded-xl px-4 py-2">
        <option value="blue">Default</option>
        <option value="green">Green</option>
        <option value="red">Red</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
const color = ref<"red" | "green" | "blue">("blue");
watch(color, (c) => {
  console.log(c);
  // setPageLayout(c);
});
</script>

<style scoped></style>
