<template>
  <div class="flex flex-row gap-x-2 items-center">
    <button @click="likeCount++" class="text-3xl">💞 {{ likeCount }}</button>
    <button @click="changeDescription" class="text-3xl">💬</button>
  </div>
  <template v-if="status == 'pending'">
    <div>Loading....</div>
  </template>
  <template v-else-if="status == 'error'">
    <div>{{ error?.message }}</div>
  </template>
  <template v-else-if="status == 'success'">
    <div class="flex justify-between items-start">
      <TitleComp
        :title="product?.title ?? ''"
        @click="refresh"
        class="cursor-pointer mb-4"
      />
      <button
        class="bg-blue-500 text-white px-3 py-2 rounded-xl"
        @click="fetchRandomProduct"
      >
        Random Porduct
      </button>
    </div>
    <div
      class="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img class="rounded-t-lg" :src="product?.image" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ product?.title }}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ product?.description }}
        </p>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add To Cart
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import type { Product } from "~/types";

const route = useRoute();
let id: number = Number(route.params.id);
let likeCount = ref(0);
const url = ref(`https://fakestoreapi.com/products/${id}`);
const {
  data: product,
  execute,
  status,
  error,
  refresh,
} = useFetch<Product>(url, {
  method: "GET",
  immediate: false,
  // deep: false,
});
onMounted(() => {
  execute();
});
const fetchRandomProduct = async () => {
  id = Math.floor(Math.random() * 10) + 1;
  url.value = `https://fakestoreapi.com/products/${id}`;
  //   refresh();
};
const changeDescription = () => {
  if (product.value) product.value.description = "New description";
};
</script>
