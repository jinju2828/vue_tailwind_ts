<template>
  <div class="flex gap-2 mt-4">
    <input
      v-model="newTodo"
      @keyup.enter="handleAddTodo"
      placeholder="Input new todo"
      class="border p-2 flex-1 rounded"
    />
    <button
      @click="handleAddTodo"
      class="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Add
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "@/stores/todoStore";

const store = useTodoStore();
const newTodo = ref("");

function handleAddTodo() {
  if (newTodo.value.trim() === "") return;
  store.addTodo(newTodo.value);
  newTodo.value = "";
}
</script>
