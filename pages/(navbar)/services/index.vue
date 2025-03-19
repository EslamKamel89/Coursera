<template>
  <h2 class="text-3xl font-bold font-mono mb-2 uppercase">services</h2>
  <ul>
    <li v-for="i in 10" :key="i">
      <NuxtLink
        :to="`services/${i}`"
        class="border-b-2 border-gray-400 my-4 w-full px-10 text-center"
        :class="{
          'text-red-500': i % 2 == 0,
        }"
        >{{ `Service ${i}` }}</NuxtLink
      >
    </li>
  </ul>
</template>

<script setup lang="ts"></script>

<style scoped></style>
