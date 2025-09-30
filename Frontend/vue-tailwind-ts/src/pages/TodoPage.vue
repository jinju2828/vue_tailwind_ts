<template>
  <div class="todo-page">
    <!-- 배경 -->
    <div class="parallax-bg">
      <div class="layer layer1"></div>
      <div class="layer layer2"></div>
      <div class="layer layer3"></div>
    </div>

    <!-- 투두 리스트 (항상 화면 고정) -->
    <div class="content">
      <h1 class="text-2xl font-bold mb-4">My Todos</h1>
      <TodoList />
    </div>

    <!-- 가짜 스크롤 영역 -->
    <div class="scroll-space"></div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue"
import TodoList from "../components/TodoList.vue"

const handleScroll = () => {
  const scrollY = window.scrollY
  document.querySelector(".layer1").style.transform = `translateY(${scrollY * 0.2}px)`
  document.querySelector(".layer2").style.transform = `translateY(${scrollY * 0.5}px)`
  document.querySelector(".layer3").style.transform = `translateY(${scrollY * 0.8}px)`
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
html {
  scrollbar-width: none;
}
body {
  -ms-overflow-style: none;
}

.todo-page {
  position: relative;
  overflow-x: hidden;
}

.parallax-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
}

.layer {
  position: absolute;
  width: 100%;
  height: 200%;
  will-change: transform;
  opacity: 0.6;
}

.layer1 {
  background: linear-gradient(120deg, #6dd5ed, #2193b0);
}
.layer2 {
  background: linear-gradient(120deg, #ffecd2, #fcb69f);
}
.layer3 {
  background: linear-gradient(120deg, #c9ffbf, #ffafbd);
}

.content {
  position: fixed; /* ✅ 화면 중앙 고정 */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  text-align: center;
}

.scroll-space {
  height: 200vh; /* ✅ 스크롤 공간만 만들어줌 */
}
</style>
