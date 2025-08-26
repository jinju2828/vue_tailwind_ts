<template>
  <div class="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 space-y-6">
    <!-- 할 일 입력 -->
    <div class="flex gap-2">
      <input
        v-model="newTodo"
        type="text"
        placeholder="Add new todo..."
        class="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        @keyup.enter="addTodo"
      />
      <button
        @click="addTodo"
        class="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full shadow hover:scale-105 transition-transform"
      >
        ➕
      </button>
    </div>

    <!-- 필터 탭 -->
    <div class="flex border-b mb-4 relative">
      <button
        v-for="type in ['all', 'active', 'completed']"
        :key="type"
        @click="setFilter(type)"
        class="flex-1 text-center py-2 relative"
      >
        <span
          :class="[
            'pb-1 transition-colors duration-300',
            filter === type ? 'text-blue-600 font-semibold' : 'text-gray-500'
          ]"
        >
          {{ type.charAt(0).toUpperCase() + type.slice(1) }}
        </span>
      </button>
      <!-- underline 애니메이션 -->
      <span
        class="absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300"
        :style="{
          width: tabWidth,
          transform: `translateX(${tabTranslate})`
        }"
      />
    </div>

    <!-- Todo 리스트 -->
    <ul v-if="filteredTodos.length" class="space-y-3">
      <li
        v-for="todo in filteredTodos"
        :key="todo.id"
        class="flex justify-between items-center bg-gray-50 rounded-lg px-3 py-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
      >
        <label class="flex items-center gap-3 flex-1 cursor-pointer">
          <!-- 커스텀 체크박스 -->
          <input type="checkbox" v-model="todo.done" class="peer hidden" />
          <span
            class="w-5 h-5 border-2 rounded-full flex items-center justify-center 
                   peer-checked:bg-blue-500 peer-checked:border-blue-500 
                   transition-colors duration-300"
          >
            <svg
              v-if="todo.done"
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 h-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span
            :class="[
              'transition-colors duration-300',
              todo.done ? 'line-through text-gray-400' : 'text-gray-800'
            ]"
          >
            {{ todo.text }}
          </span>
        </label>

        <!-- 삭제 버튼 -->
        <button
          @click="store.removeTodo(todo.id)"
          class="ml-3 text-red-500 hover:scale-110 transition-transform"
        >
          🗑
        </button>
      </li>
    </ul>

    <!-- Empty state -->
    <div v-else class="text-center text-gray-400 py-6">
      <p class="mb-2">😴 There is no ToDo </p>
      <p class="text-sm">Add any ToDo you want to finish today!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useTodoStore } from "@/stores/todoStore";

const store = useTodoStore();
const newTodo = ref("");
const filter = ref<"all" | "active" | "completed">("all");

function addTodo() {
  if (newTodo.value.trim()) {
    store.addTodo(newTodo.value);
    newTodo.value = "";
  }
}
function setFilter(type: "all" | "active" | "completed") {
  filter.value = type;
}

const filteredTodos = computed(() => {
  if (filter.value === "active") return store.activeTodos;
  if (filter.value === "completed") return store.completedTodos;
  return store.allTodos;
});

// underline 애니메이션용
const tabWidth = "33.33%";
const tabTranslate = computed(() => {
  if (filter.value === "all") return "0%";
  if (filter.value === "active") return "100%";
  return "200%";
});
</script>
