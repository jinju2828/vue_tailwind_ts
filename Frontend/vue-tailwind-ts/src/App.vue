<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">My Vue Todo App</h1>
    <TodoList />
  </div>
</template>

<script setup lang="ts">
import TodoList from './components/TodoList.vue';

import { ref, onMounted } from "vue";

// const message = ref("Loading...");

// onMounted(async () => {
//   try {
//     const res = await fetch("http://localhost:5000"); // backend URL
//     const text = await res.text();
//     message.value = text;
//   } catch (err) {
//     console.error("API 요청 에러:", err);
//     message.value = "Failed to fetch from backend 😢";
//   }
// });

</script>

