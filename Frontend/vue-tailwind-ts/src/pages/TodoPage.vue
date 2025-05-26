<template>
  <div class="relative h-screen overflow-hidden">
    <!-- 여러 레이어 배경 -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"
      :style="{
        transform: `translateY(${scrollY * 0.2}px)`
      }"
    ></div>

    <div
      class="absolute inset-0 opacity-60"
      :style="{
        background:
          'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4), transparent 60%)',
        transform: `translateY(${scrollY * 0.4}px)`
      }"
    ></div>

    <div
      class="absolute inset-0 opacity-50"
      :style="{
        background:
          'radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3), transparent 70%)',
        transform: `translateY(${scrollY * 0.6}px)`
      }"
    ></div>

    <!-- 콘텐츠 (TodoList는 중앙 고정) -->
    <div
      class="relative z-10 flex items-center justify-center h-screen pointer-events-none"
    >
      <div
        class="pointer-events-auto w-full max-w-md bg-white shadow-xl rounded-2xl p-6 space-y-6"
      >
        <h1 class="text-2xl font-bold text-center">✨ My Todo List</h1>
        <TodoList />
      </div>
    </div>

    <!-- 스크롤용 spacer (강제로 높이 줘서 스크롤 발생시킴) -->
    <div class="h-[200vh]"></div>
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
