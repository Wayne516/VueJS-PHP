<template>
   <div class="panel text-center">
      <p class=" text-xl">所有留言</p>
      <hr />
      <div>
         <Message v-for="data in datas" :key="data" :message="data" />
      </div>
   </div>
   <!-- <span>{{ datas }}</span> -->
</template>

<script setup>
import Message from './Message.vue';

defineProps({
   datas: Object,
})
</script>