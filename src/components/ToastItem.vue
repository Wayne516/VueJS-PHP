<template>
   <transition name="fade">
      <div v-if="isVisible" class="fixed bottom-0 right-0 m-4 shadow-md">
         <div :class="updateClassType" class="w-80 h-8 rounded-t-md flex items-center justify-between px-2">
            <p class="text-white font-semibold">{{ toastTitle }}</p>
            <button @click="hideToast">✖</button>
         </div>
         <div class="bg-white w-80 rounded-b-md px-2 py-3 line">
            <p>{{ message }}</p>
         </div>
      </div>
   </transition>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import eventBus from '../event';

const isVisible = ref(false);
const message = ref('');
const toastTitle = ref('');
const toastType = ref('');

onMounted(() => {
   eventBus.on('show-toast', msg => {
      showToast(msg);
   });
});

watch(isVisible, (newValue) => {
   if (newValue) {
      setTimeout(() => {
         isVisible.value = false;
      }, 2500);
   }
});

const hideToast = () => {
   isVisible.value = false;
}

const showToast = (msg) => {
   toastTitle.value = msg.title;
   message.value = msg.msg;
   toastType.value = msg.type;
   isVisible.value = true;
};

const updateClassType = computed(() => {
   const status = toastType.value;

   switch (status) {
      case 'success':
         return 'bg-green-600';
      case 'warning':
         return 'bg-orange-600';
      case 'error':
         return 'bg-red-600';
   }
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