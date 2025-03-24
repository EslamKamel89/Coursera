<template>
  <div>
    <TitleComp title="products" />
    <template v-if="status == 'pending'">
      <div>Loading....</div>
    </template>
    <template v-else-if="status == 'error'">
      <div>{{ error?.message }}</div>
    </template>
    <template v-else-if="status == 'success'">
      <div
        class="flex flex-col items-center gap-y-2 md:grid md:grid-cols-2 md:gap-2"
      >
        <div v-for="product in products" :key="product.id">
          <ProductsCard :product />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types";

const {
  data: products,
  execute,
  status,
  error,
} = useFetch<Product[]>("/products", {
  method: "GET",
  baseURL: "https://fakestoreapi.com",
  // query: { secret: "Eslam Ahmed" },
});
onMounted(() => {
  execute();
});
</script>
