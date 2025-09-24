<template>
  <li class="flex justify-between items-center p-2 border-b">
    <span>{{ todo }}</span>
    <button @click="removeTodo" class="text-red-500">Remove</button>
  </li>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

// Props: 부모가 자식에게 내려주는 데이터
const props = defineProps<{
  todo: string;
}>();

// Emits: 자식이 부모에게 이벤트 보내기
const emit = defineEmits<{
  (e: "remove", todo: string): void;
}>();

function removeTodo() {
  emit("remove", props.todo); // 자식에서 부모로 "remove" 이벤트 전달
}
</script>
