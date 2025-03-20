<template>
  <h2 class="text-3xl font-bold font-mono mb-2 uppercase">
    Your profile {{ $route.params.type }}, Your ID is {{ $route.params.id }}
  </h2>
  <Info />
</template>

<script setup lang="ts"></script>
