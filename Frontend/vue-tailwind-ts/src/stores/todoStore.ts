import { defineStore } from "pinia";
import { ref } from "vue";

interface Todo {
  text: string;
  done: boolean;
}

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<Todo[]>([]);

  function addTodo(text: string) {
    if (text.trim() !== "") {
      todos.value.push({ text, done: false });
    }
  }

  function removeTodo(index: number) {
    todos.value.splice(index, 1);
  }

  function toggleTodo(index: number) {
  const todo = todos.value[index];
  if (todo) {
    todo.done = !todo.done;
  }
}

  return { todos, addTodo, removeTodo, toggleTodo };
});
