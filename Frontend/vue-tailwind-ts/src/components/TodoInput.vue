<template>
  <div>
    <input
      type="text"
      v-model="newTodo"
      @focus="handleFocus"
      :class="inputFocused ? 'border-blue-500' : 'border-gray-300'"
      class="border-2 p-2 rounded"
    />
    <button @click="addTodo">Add</button>
    <button @click="cancelInput">Cancel</button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

const newTodo = ref("");
const emit = defineEmits<{
  (e: "add", todo: string): void;
  (e: "focus"): void;
  (e: "cancel"): void;
}>();

// 부모로부터 전달된 focus 상태
const props = defineProps<{
  isFocused: boolean;
}>();

const inputFocused = ref(false);

// 이벤트 핸들러
const handleFocus = () => {
  inputFocused.value = true;
  emit("focus");
};

const addTodo = () => {
  if (!newTodo.value.trim()) return;
  emit("add", newTodo.value.trim());
  newTodo.value = "";
};

const cancelInput = () => {
  newTodo.value = "";
  inputFocused.value = false;
  emit("cancel");
};
</script>
