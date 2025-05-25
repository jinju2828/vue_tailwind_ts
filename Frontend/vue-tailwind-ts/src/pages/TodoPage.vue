<template>
  <div class="relative h-screen overflow-y-scroll">
    <!-- Parallax Background -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"
      :style="{
        transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.3}px)`,
      }"
    ></div>

    <!-- Content (Todo Card) -->
    <div class="relative z-10 flex items-center justify-center min-h-screen">
      <div
        class="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 space-y-6"
      >
        <h1 class="text-2xl font-bold text-center">✨ My Todo List</h1>
        <TodoList />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import TodoList from "@/components/TodoList.vue";

const scrollY = ref(0);

function handleScroll() {
  scrollY.value = window.scrollY;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
