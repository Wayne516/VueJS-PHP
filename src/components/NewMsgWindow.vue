<template>
   <transition name="fade">
      <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
         <div class="panel w-2/5">
            <div>
               <p class="text-center text-xl">建立新留言</p>
            </div>
            <hr />
            <div class="px-12 mt-10 mb-10">
               <div class="grid grid-cols-3 px-3 gap-3">
                  <div>
                     <p class="text-left">標題</p>
                  </div>
                  <div class="col-span-2">
                     <input class="w-full" type="text" v-model="title">
                  </div>
                  <div>
                     <p class="text-">內容</p>
                  </div>
                  <div class="col-span-2">
                     <input class="w-full" type="text" v-model="message">
                  </div>
               </div>
            </div>
            <div class="grid grid-cols-2 gap-2 px-10">
               <button @click="createData(title, message)"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">確認</button>
               <button @click="closeModal"
                  class="focus:outline-none text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900">取消</button>
            </div>
         </div>
      </div>
   </transition>
</template>

<script setup>
import { ref } from 'vue';
import eventBus from '../event';
const isModalOpen = ref(false);

const title = ref('');
const message = ref('');

const openModal = () => {
   isModalOpen.value = true;
};

const closeModal = () => {
   isModalOpen.value = false;
   title.value = '';
   message.value = '';
};

const createData = (title, message) => {
   eventBus.emit('create-data', { title, message });
   showToast('通知', '留言新增成功', 'success');
   closeModal();
};

const showToast = (title, msg, type) => {
   eventBus.emit('show-toast', { title, msg, type });
};

eventBus.on('open-new-msg-modal', () => {
   openModal();
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
   transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
   opacity: 0;
}
</style>