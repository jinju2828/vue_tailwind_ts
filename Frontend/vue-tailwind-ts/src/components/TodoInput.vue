<template>
  <div>
    <input
      v-model="newTodo"
      @focus="emit('focus')"
      placeholder="Add a todo"
      class="border p-2 rounded"
    />
    <button @click="handleAdd" class="ml-2 p-2 bg-blue-500 text-white rounded">Add</button>
    <button @click="emit('cancel')" class="ml-2 p-2 bg-gray-300 rounded">Cancel</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const newTodo = ref('');
const emit = defineEmits<{
  (e: 'add', todo: string): void;
  (e: 'focus'): void;
  (e: 'cancel'): void;
}>();

function handleAdd() {
  if (!newTodo.value.trim()) return;
  emit('add', newTodo.value.trim());
  newTodo.value = '';
}
</script>
