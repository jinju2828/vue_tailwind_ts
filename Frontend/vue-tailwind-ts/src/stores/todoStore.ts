import { defineStore } from "pinia";
import { ref, computed } from "vue";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

let nextId = 1;

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<Todo[]>([]);

  function addTodo(text: string) {
    if (text.trim() !== "") {
      todos.value.push({ id: nextId++, text, done: false });
    }
  }

  function removeTodo(id: number) {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  }

  function toggleTodo(id: number) {
    const todo = todos.value.find((t) => t.id === id);
    if (todo) todo.done = !todo.done;
  }

  // getters
  const allTodos = computed(() => todos.value);
  const activeTodos = computed(() => todos.value.filter((t) => !t.done));
  const completedTodos = computed(() => todos.value.filter((t) => t.done));

  return { todos, addTodo, removeTodo, toggleTodo, allTodos, activeTodos, completedTodos };
});
