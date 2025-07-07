import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<string[]>([]);

  function addTodo(todo: string) {
    if (todo.trim() !== "") {
      todos.value.push(todo);
    }
  }

  function removeTodo(index: number) {
    todos.value.splice(index, 1);
  }

  return { todos, addTodo, removeTodo };
});
