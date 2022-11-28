<script setup>
import { useStore } from "vuex";

const store = useStore();
const item = {
  title: "",
  description: "",
  status: false,
};

function saveItem(item) {
  store.commit("saveItem", item);
}
</script>

<template>
  <form>
    <div class="mb-6">
      <label
        for="title"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Task title:</label
      >
      <input
        type="text"
        id="title"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-model="item.title"
        required
      />
    </div>
    <div class="mb-6">
      <label
        for="description"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Task short description:</label
      >
      <input
        type="text"
        id="description"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-model="item.description"
        required
      />
    </div>
    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      @click="saveItem(item)"
    >
      Add to List
    </button>
  </form>
</template>

<style></style>
