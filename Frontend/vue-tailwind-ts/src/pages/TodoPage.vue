<template>
  <div class="todo-page">
    <!-- 움직이는 배경 레이어 -->
    <div class="background">
      <div
        class="blob blob1"
        :style="{
          transform: `translateY(${scrollY * 0.2}px) translateX(${floatX1}px) translateY(${floatY1}px)`,
          background: `radial-gradient(circle, rgba(139,92,246,0.8) , transparent 70%)`
        }"
      ></div>
      <div
        class="blob blob2"
        :style="{
          transform: `translateY(${scrollY * 0.5}px) translateX(${floatX2}px) translateY(${floatY2}px)`,
          background: `radial-gradient(circle, rgba(236,72,153,0.75) , transparent 70%)`
        }"
      ></div>
      <div
        class="blob blob3"
        :style="{
          transform: `translateY(${scrollY * 0.8}px) translateX(${floatX3}px) translateY(${floatY3}px)`,
          background: `radial-gradient(circle, rgba(34,211,238,0.75) , transparent 70%)`
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

// float 애니메이션용
const floatX1 = ref(0), floatY1 = ref(0);
const floatX2 = ref(0), floatY2 = ref(0);
const floatX3 = ref(0), floatY3 = ref(0);

let frame = 0;

function handleScroll() {
  scrollY.value = window.scrollY;
}

function animateBlobs() {
  frame += 0.01;
  floatX1.value = Math.sin(frame) * 30;
  floatY1.value = Math.cos(frame * 1.1) * 20;

  floatX2.value = Math.sin(frame * 0.8 + 1) * 50;
  floatY2.value = Math.cos(frame * 0.9 + 1) * 25;

  floatX3.value = Math.sin(frame * 1.2 + 2) * 40;
  floatY3.value = Math.cos(frame * 1.3 + 2) * 30;

  requestAnimationFrame(animateBlobs);
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  animateBlobs();
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.todo-page {
  position: relative;
  width: 100%;
  height: 200vh;
  overflow-x: hidden;
}

/* 배경 레이어 */
.background {
  position: fixed;
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
  opacity: 0.8;
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
}
</style>
