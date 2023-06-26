<template>
  <div class="flex justify-between items-center py-4 px-10">
    <div>
      <a class="mr-6">Contribuisci</a>
      <a>Abbonati</a>
    </div>
    <div class="flex">
      <img class="mr-2" src="../assets/account.svg" />
      <a>Accedi</a>
    </div>
  </div>
  <div
    class="border-y border-black rounded-none flex justify-between items-center"
  >
    <img class="border-x border-black p-9" src="../assets/burger.svg" />
    <img class="border-x border-black p-9" src="../assets/search.svg" />
  </div>
  <div class="lg:flex sm:hidden px-10">
    <div class="flex flex-wrap w-full mr-2.5">
      <div
        :class="idxTopic != topic.length - 1 ? 'mr-8' : ''"
        v-for="(topic, idxTopic) in topics"
        :key="idxTopic"
        @click="setTopic(topic)"
      >
        <h4 class="py-6">{{ topic.text }}</h4>
        <img
          class="relative mt-[-9px]"
          :class="topicSelected && topicSelected.name == topic.name ? 'opacity-1' : 'opacity-0'"
          src="../assets/selection.png"
        />
      </div>
    </div>
    <img src="../assets/toggle.svg" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const topics = ref([
  { id: 0, name: "all", text: "Tutti i temi" },
  { id: 1, name: "env", text: "Ambiente" }, 
  { id: 2, name: "eco", text: "Economia" },
  { id: 3, name: "world", text: "Mondo" },
  { id: 4, name: "no-prof", text: "Non Profit" },
  { id: 5, name: "politics", text: "Politica" },
  { id: 6, name: "society", text: "Società" },
  { id: 7, name: "welfare", text: "Welfare" }
]);
const topicSelected = ref({});

const setTopic = (topic) => {
  topicSelected.value = topic;
}
</script>

<style scoped>
</style>
