<template>
  <div>
    <TodoInput
      @add="addTodo"
      @focus="onFocusInput"
      @cancel="onCancelInput"
      :is-focused="inputFocused"
    />
    <ul>
      <TodoItem 
        v-for="t in todos" 
        :key="t" 
        :todo="t" 
        @remove="removeTodo" 
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TodoInput from "./TodoInput.vue";
import TodoItem from "./TodoItem.vue";

const todos = ref<string[]>([]);
const inputFocused = ref(false); // input focus 상태

function addTodo(todo: string) {
  todos.value.push(todo);
}

function removeTodo(todo: string) {
  todos.value = todos.value.filter(t => t !== todo);
}

// 부모 상태 변경으로 UI 반영
function onFocusInput() {
  inputFocused.value = true;
}

function onCancelInput() {
  inputFocused.value = false; // 테두리 원래대로
}

</script>
