<script setup>
import DeleteWindow from './components/DeleteWindow.vue';
import EditWindow from './components/EditWindow.vue';
import MessagePanel from './components/MessagePanel.vue';
import NewMsgWindow from './components/NewMsgWindow.vue';
import PersonalInfo from './components/PersonalInfoPanel.vue';
import UserInfoSetting from './components/UserInfoSettingPanel.vue';
</script>

<template>
  <div class="grid grid-cols-5">
    <div class="col-span-2">
      <PersonalInfo />
      <UserInfoSetting />
    </div>
    <div class="col-span-3">
      <MessagePanel :datas="messageDatas" />
    </div>
  </div>
  <div @click="openNewMsgModal" class="fixed bottom-0 left-0 p-4">
    <button class="w-16 h-16 text-4xl pb-3 bg-blue-500 hover:bg-blue-800 text-white p-2 rounded-full shadow-lg">+</button>
  </div>

  <ToastItem />
  <EditWindow />
  <DeleteWindow />
  <NewMsgWindow />
</template>

<script>
import moment from 'moment';
import { ref } from 'vue';
import ToastItem from './components/ToastItem.vue';
import eventBus from './event';

const newId = ref(3);
const messageDatas = ref([
  { id: 0, title: 'title 1', message: 'message 1', createTime: '2023-11-25 06:51:30', updateTime: '2023-11-26 06:51:30' },
  { id: 1, title: 'title 2', message: 'message 2', createTime: '2023-11-25 06:52:30', updateTime: '2023-11-26 06:52:30' },
  { id: 2, title: 'title 3', message: 'message 3', createTime: '2023-11-25 06:53:30', updateTime: '2023-11-26 06:53:30' },
]);

const openNewMsgModal = () => {
  eventBus.emit('open-new-msg-modal');
};

const updateDataById = (updateData) => {
  const index = messageDatas.value.findIndex(item => item.id === updateData.id);
  if (index !== -1) {
    messageDatas.value[index].title = updateData.title;
    messageDatas.value[index].message = updateData.message;
    messageDatas.value[index].updateTime = moment().format('YYYY-MM-DD HH:mm:ss');
  }
};

const deleteMessageById = (id) => {
  const index = messageDatas.value.findIndex(message => message.id === id);
  if (index !== -1) {
    messageDatas.value.splice(index, 1);
  }
};

const createNewMessage = (newData) => {
  const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
  const newMessage = {
    id: newId.value,
    title: newData.title,
    message: newData.message,
    createTime: currentTime,
    updateTime: currentTime,
  }

  messageDatas.value.push(newMessage);
  newId.value++;
}

eventBus.on('create-data', (newData) => {
  createNewMessage(newData);
});

eventBus.on('update-data', (updateData) => {
  updateDataById(updateData);
});

eventBus.on('delete-data', (id) => {
  deleteMessageById(id);
});

// const showToast = (title, msg, type) => {
//   eventBus.emit('show-toast', { title, msg, type });
// };
</script>

<style scoped></style>
