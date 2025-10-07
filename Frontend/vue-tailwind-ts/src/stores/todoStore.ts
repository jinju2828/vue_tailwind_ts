// frontend/src/store/todoStore.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import * as api from '@/api/todos';

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<api.Todo[]>([]);

  // 서버에서 전체 Todos 가져오기
  async function fetchTodos() {
    todos.value = await api.getTodos();
  }

  // Todo 추가
  async function addTodo(text: string) {
    if (!text.trim()) return;
    const newTodo = await api.addTodo(text);
    todos.value.push(newTodo);
  }

  // Todo 삭제
  async function removeTodo(id: number) {
    await api.deleteTodo(id);
    todos.value = todos.value.filter(t => t.id !== id);
  }

  // Todo 완료 토글
  async function toggleTodo(id: number) {
    const todo = todos.value.find(t => t.id === id);
    if (!todo) return;
    const updated = await api.updateTodo(id, { done: !todo.done });
    const index = todos.value.findIndex(t => t.id === id);
    if (index !== -1) todos.value[index] = updated;
  }

  // 드래그 순서 반영
  async function setTodos(newTodos: api.Todo[]) {
    todos.value = newTodos;
    // 순서를 서버에 반영
    if (!newTodos || !newTodos.length) return
    for (let i = 0; i < newTodos.length; i++) {
      await api.updateTodo(newTodos[i].id, { order: newTodos[i].order });
    }
  }

  const allTodos = computed(() => todos.value);
  const activeTodos = computed(() => todos.value.filter(t => !t.done));
  const completedTodos = computed(() => todos.value.filter(t => t.done));

  return {
    todos,
    allTodos,
    activeTodos,
    completedTodos,
    fetchTodos,
    addTodo,
    removeTodo,
    toggleTodo,
    setTodos
  };
});
