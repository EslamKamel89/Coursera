<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts"></script>
<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.9s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
