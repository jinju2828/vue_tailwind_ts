import { defineStore } from "pinia";
import { ref, computed } from "vue";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

let nextId = 1;

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<Todo[]>([]);

  function addTodo(text: string) {
    if (text.trim() === "") return;
    todos.value.push({ id: nextId++, text, done: false });
  }

  function removeTodo(id: number) {
    const index = todos.value.findIndex(t => t.id === id);
    if (index !== -1) todos.value.splice(index, 1);
  }

  function toggleTodo(id: number) {
    const todo = todos.value.find(t => t.id === id);
    if (todo) todo.done = !todo.done;
  }

  const allTodos = computed(() => todos.value);
  const activeTodos = computed(() => todos.value.filter(t => !t.done));
  const completedTodos = computed(() => todos.value.filter(t => t.done));

  // 순서 변경
  function setTodos(newTodos: Todo[]) {
    todos.value = newTodos;
  }

  return {
    todos,
    allTodos,
    activeTodos,
    completedTodos,
    addTodo,
    removeTodo,
    toggleTodo,
    setTodos
  };
});
