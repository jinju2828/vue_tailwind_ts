<!-- frontend/src/views/Home.vue -->
<template>
  <div class="p-6 text-center home">
    <h1 class="text-3xl font-bold mb-6">🎉 Welcome to Vue Todos</h1>

    <div class="flex gap-4 justify-center">
      <Button label="Go to Todos" icon="pi pi-check-square" @click="goTodos" />
      <Button label="About" icon="pi pi-info-circle" severity="secondary" @click="goAbout" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function goTodos() {
  router.push("/todos");
}

function goAbout() {
  router.push("/about");
}
</script>

<style scoped>
.home {
  min-height: calc(100vh - 64px); /* 네비게이션 바 높이 제외 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>