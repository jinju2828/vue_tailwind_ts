<template>
  <div>
    <!-- 필터 버튼 -->
    <div class="flex gap-2 mb-4">
      <button @click="filter='all'" :class="btnClass('all')">All</button>
      <button @click="filter='active'" :class="btnClass('active')">Pending</button>
      <button @click="filter='completed'" :class="btnClass('completed')">Completed</button>
    </div>

    <ul class="space-y-2">
      <li
        v-for="todo in filteredTodos"
        :key="todo.id"
        class="flex justify-between items-center border-b pb-2"
      >
        <label class="flex items-center gap-2 flex-1">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ 'line-through text-gray-400': todo.done }">
            {{ todo.text }}
          </span>
        </label>

        <!-- 🗑️ 아이콘 버튼 -->
        <button
          @click="store.removeTodo(todo.id)"
          class="ml-4 text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-gray-100"
        >
          <TrashIcon class="w-5 h-5" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useTodoStore } from "@/stores/todoStore";
import { TrashIcon } from "@heroicons/vue/24/solid"; // ✅ Heroicons import

const store = useTodoStore();
const filter = ref<"all" | "active" | "completed">("all");

const filteredTodos = computed(() => {
  if (filter.value === "active") return store.activeTodos;
  if (filter.value === "completed") return store.completedTodos;
  return store.allTodos;
});

function btnClass(type: "all" | "active" | "completed") {
  return filter.value === type
    ? "bg-blue-500 text-white px-3 py-1 rounded"
    : "bg-gray-200 px-3 py-1 rounded";
}
</script>
