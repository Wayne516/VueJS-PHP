import { ref } from 'vue';

const eventBus = {
   events: ref({}),
   emit(event, payload) {
      if (this.events.value[event]) {
         this.events.value[event].forEach(callback => callback(payload));
      }
   },
   on(event, callback) {
      if (!this.events.value[event]) {
         this.events.value[event] = [];
      }
      this.events.value[event].push(callback);
   },
};

export default eventBus;
