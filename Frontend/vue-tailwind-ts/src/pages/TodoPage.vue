<template>
  <div class="todo-page">
    <!-- 움직이는 배경 레이어 -->
    <div class="background">
      <div
        class="blob blob1"
        :style="{
          transform: `translateY(${scrollY * 0.2}px)`,
          background: `radial-gradient(circle, rgba(139,92,246,${0.6 + scrollY * 0.0005}) , transparent 70%)`
        }"
      ></div>
      <div
        class="blob blob2"
        :style="{
          transform: `translateY(${scrollY * 0.5}px)`,
          background: `radial-gradient(circle, rgba(236,72,153,${0.5 + scrollY * 0.0005}) , transparent 70%)`
        }"
      ></div>
      <div
        class="blob blob3"
        :style="{
          transform: `translateY(${scrollY * 0.8}px)`,
          background: `radial-gradient(circle, rgba(34,211,238,${0.5 + scrollY * 0.0005}) , transparent 70%)`
        }"
      ></div>
    </div>

    <!-- 중앙 고정된 ToDo 앱 -->
    <div class="content">
      <TodoList />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import TodoList from "@/components/TodoList.vue";

const scrollY = ref(0);

function handleScroll() {
  scrollY.value = window.scrollY;
}

onMounted(() => window.addEventListener("scroll", handleScroll));
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
.todo-page {
  position: relative;
  width: 100%;
  height: 200vh; /* 충분히 스크롤 가능 */
  overflow-x: hidden;
}

/* ✨ 애니메이션 배경 */
.background {
  position: fixed; /* 화면 고정 */
  inset: 0;
  overflow: hidden;
  z-index: 0;
}

.blob {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(150px);
  opacity: 0.6;
  transition: background 0.2s linear;
}

/* 초기 위치 */
.blob1 { top: -20%; left: -15%; }
.blob2 { bottom: -25%; right: -10%; }
.blob3 { top: 30%; right: 20%; }

/* 투두 리스트 중앙 고정 */
.content {
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  pointer-events: auto;
}
</style>
