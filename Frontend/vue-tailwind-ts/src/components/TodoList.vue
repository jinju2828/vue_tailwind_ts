<template>
  <ul class="mt-6 space-y-2">
    <li
      v-for="(todo, index) in store.todos"
      :key="index"
      class="flex justify-between items-center border-b pb-2"
    >
      <label class="flex items-center gap-2 flex-1">
        <input
          type="checkbox"
          v-model="todo.done"
        />
        <span :class="{ 'line-through text-gray-400': todo.done }">
          {{ todo.text }}
        </span>
      </label>
      <button
        @click="store.removeTodo(index)"
        class="text-red-500 hover:underline"
      >
        Delete
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useTodoStore } from "@/stores/todoStore";
const store = useTodoStore();
</script>
