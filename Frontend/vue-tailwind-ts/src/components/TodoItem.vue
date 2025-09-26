<template>
  <li class="flex items-center justify-between border p-2 my-1">
    <span :class="{ 'line-through text-gray-400': todo.completed }">{{ todo.text }}</span>
    <div>
      <input type="checkbox" v-model="todo.completed" @change="toggleComplete" />
      <button @click="emit('remove', todo.id)" class="ml-2 text-red-500">Remove</button>
    </div>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const props = defineProps<{
  todo: Todo;
}>();

const emit = defineEmits<{
  (e: 'remove', id: number): void;
}>();

function toggleComplete() {
  props.todo.completed = !props.todo.completed;
}
</script>
