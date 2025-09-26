<template>
  <div class="max-w-md mx-auto mt-10">
    <TodoInput
      @add="addTodo"
      @focus="inputFocused = true"
      @cancel="inputFocused = false"
    />
    <ul>
      <TodoItem
        v-for="t in todos"
        :key="t.id"
        :todo="t"
        @remove="removeTodo"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TodoInput from './TodoInput.vue';
import TodoItem from './TodoItem.vue';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const todos = ref<Todo[]>([]);
const inputFocused = ref(false);

function addTodo(text: string) {
  todos.value.push({ id: Date.now(), text, completed: false });
}

function removeTodo(id: number) {
  todos.value = todos.value.filter(t => t.id !== id);
}
</script>
