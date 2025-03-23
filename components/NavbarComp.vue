<template>
  <nav>
    <div
      class="bg-blue-900 text-white p-4 w-full font-mono"
      :class="{
        'bg-blue-900': !color || color == 'blue',
        'bg-green-900': color == 'green',
        'bg-red-900': color == 'red',
      }"
    >
      <ul class="flex gap-x-5 max-w-4xl mx-5 md:mx-auto container">
        <li>
          <NuxtLink to="/" :exact-active-class="active">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products" :exact-active-class="active"
            >Products</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/services" :exact-active-class="active"
            >Services</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/pricing" :exact-active-class="active"
            >Pricing</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/contact" :exact-active-class="active"
            >Contact</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            :to="`/users/admin/group-${randomNumber()}`"
            :exact-active-class="active"
            >Profile</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            :to="{
              name: 'about',
              query: { secret: 'Be the best version of your self' },
            }"
            :exact-active-class="active"
            >About</NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
const active = "text-2xl font-bold mx-5";
const randomNumber = () => Math.floor(Math.random() * 10) + 1;
defineProps<{
  color?: "red" | "green" | "blue";
}>();
</script>
<style scoped></style>
