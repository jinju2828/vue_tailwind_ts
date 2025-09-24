<script setup lang="ts">
import { ref, onMounted } from "vue";

const message = ref("Loading...");

onMounted(async () => {
  try {
    const res = await fetch("http://localhost:5000"); // backend URL
    const text = await res.text();
    message.value = text;
  } catch (err) {
    console.error("API 요청 에러:", err);
    message.value = "Failed to fetch from backend 😢";
  }
});
</script>

<template>
  <div class="p-4">
    <h1 class="text-red-500">hello world</h1>
    <p class="mt-4 text-blue-500">{{ message }}</p>
  </div>
</template>
