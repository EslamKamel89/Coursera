<template>
  <TitleComp title="Posts" />
  <form @submit.prevent="execute()">
    <input
      type="text"
      class="rounded-lg border w-full border-gray-700 px-2 py-1 my-2"
      placeholder="Title"
      v-model="title"
    />
    <textarea
      type="text"
      class="rounded-lg border w-full border-gray-700 px-2 py-1 my-2"
      placeholder="Post Body"
      v-model="body"
    ></textarea>
    <button type="submit" class="bg-blue-500 text-white px-3 py-2 rounded-xl">
      Create Post
    </button>
  </form>
  <div v-if="status == 'success'" class="text-xl font-bold font-mono">
    <ul>
      <li>ID:{{ data?.id }}</li>
      <li>TITLE:{{ data?.title }}</li>
      <li>BODY:{{ data?.body }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Post } from "~/types";
const title = ref("default");
const body = ref("default");
const { data, execute, status, error, refresh } = useFetch<Post>("/posts", {
  method: "POST",
  baseURL: "https://jsonplaceholder.typicode.com",
  immediate: false,
  watch: false,
  body: {
    userId: 1,
    id: 1,
    title: title,
    body: body,
  },
});
const submit = async () => {
  if (!title.value || !body.value) {
    alert("Title and Body is required");
    return;
  }
  refresh();
};
</script>
