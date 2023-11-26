<template>
   <div class="grid grid-cols-12 my-4 py-3 px-1 border-stone-300 border rounded-md">
      <div class="col-span-1 flex items-center border-stone-300 border-r">
         <div class="block w-full">
            <p>ID</p>
            <p>#{{ message.id }}</p>
         </div>
      </div>
      <div class="col-span-6 px-5">
         <p class="text-left font-bold text-lg">{{ message.title }}</p>
         <p class="text-left">
            {{ message.message }}</p>
      </div>
      <div class="col-span-3 flex items-center border-stone-300 border-r border-l">
         <div class="block w-full">
            <p>時間</p>
            <p>{{ message.createTime }}</p>
            <p>{{ message.updateTime }}</p>
         </div>
      </div>
      <div class="col-span-2 flex items-center">
         <div class="w-full justify-center mx-3 grid grid-cols-2 gap-2">
            <button @click="openEditModal(message.id, message.title, message.message)"
               class="w-full ml-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">修改</button>
            <button @click="openDeleteModal(message.id, message.title, message.message)"
               class="w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">刪除</button>
         </div>
      </div>
   </div>
</template>

<script setup>
import { defineProps } from 'vue';
import eventBus from '../event';

const props = defineProps(['message']);

const openEditModal = (id, title, message) => {
   eventBus.emit('open-edit-modal', { id, title, message });
};

const openDeleteModal = (id, title, message) => {
   eventBus.emit('open-delete-modal', { id, title, message });
};
</script>