<template>
   <transition name="fade">
      <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
         <div class="panel w-2/5">
            <div>
               <p class="text-center text-xl">確認刪除 #{{ id }}</p>
            </div>
            <hr />
            <div class="px-12 mt-10 mb-10">
               <div>
                  <p class="text-left text-xl font-bold">{{ title }}</p>
               </div>
               <div>
                  <p class="text-left">{{ message }}</p>
               </div>
            </div>
            <div class="grid grid-cols-2 gap-2 px-10">
               <button @click="deleteData(id)"
                  class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">刪除</button>
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

const id = ref();
const title = ref('');
const message = ref('');

const openModal = (Data) => {
   id.value = Data.id;
   title.value = Data.title;
   message.value = Data.message;
   isModalOpen.value = true;
};

const closeModal = () => {
   isModalOpen.value = false;
};

const deleteData = (id) => {
   eventBus.emit('delete-data', id);
   closeModal();
   showToast('通知', '留言刪除成功', 'success')
};

// @click="showToast('通知', '留言建立成功', 'success')"
const showToast = (title, msg, type) => {
   eventBus.emit('show-toast', { title, msg, type });
};

eventBus.on('open-delete-modal', (Data) => {
   openModal(Data);
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