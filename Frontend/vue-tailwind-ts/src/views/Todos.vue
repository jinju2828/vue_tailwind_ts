<template>
  <div class="max-w-lg mx-auto mt-10 p-6 border rounded">
    <h1 class="text-2xl font-bold mb-4">Todo App</h1>
    <TodoInput />
    <TodoList />
  </div>
</template>

<script setup lang="ts">
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";
</script>
