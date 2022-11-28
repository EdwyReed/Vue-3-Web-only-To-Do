<script setup>
import { useStore } from "vuex";

const store = useStore();

defineProps({
  item: {
    type: Object,
    required: true,
  },
});

function updateItem(item) {
  store.dispatch("switchStatus", item);
}

function deleteItem(item) {
  store.dispatch("deleteItem", item);
}
</script>

<template>
  <div
    class="flex flex-col max-w-sm px-6 py-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
    @click="updateItem(item)"
  >
    <h3
      class="mb-1 text-1xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {{ item.title }}
    </h3>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      {{ item.description }}
    </p>
    <button
      type="submit"
      class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto ml-auto px-2 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      @click="deleteItem(item)"
    >
      Delete
    </button>
  </div>
</template>

<style></style>
