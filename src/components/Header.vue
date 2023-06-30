<template>
  <div class="flex justify-between items-center py-4 px-10">
    <div>
      <a class="mr-6">Contribuisci</a>
      <a>Abbonati</a>
    </div>
    <div class="flex">
      <img class="mr-2" src="../assets/account.svg" alt="Utente" />
      <a>Accedi</a>
    </div>
  </div>
  <div
    class="border-y border-black rounded-none flex justify-between items-center"
  >
    <div class="border-r border-black cursor-pointer p-9" :class="isFilterVisible ? 'hidden' : 'block'" @click="isMenuVisible = ! isMenuVisible">
      <img :class="isMenuVisible ? 'hidden' : ''" src="../assets/burger.svg" alt="Visualizza menù" />
      <img :class="isMenuVisible ? '' : 'hidden'" src="../assets/close.svg" alt="Chiudi menù" />
    </div>
    <div></div>
    <div class="border-l border-black cursor-pointer p-9" :class="isMenuVisible ? 'hidden' : 'block'" @click="isFilterVisible = ! isFilterVisible">
      <img :class="isFilterVisible ? 'hidden' : ''" src="../assets/search.svg" alt="Cerca" />
      <img :class="isFilterVisible ? '' : 'hidden'" src="../assets/close.svg" alt="Chiudi menù" />
    </div>
  </div>

  <Menu v-if="isMenuVisible" />

  <div class="lg:flex sm:hidden border-b border-black rounded-none px-10">
    <div class="flex flex-wrap w-full mr-2.5">
      <div
    class="cursor-pointer"
        :class="idxTopic != topic.length - 1 ? 'mr-8' : ''"
        v-for="(topic, idxTopic) in topics"
        :key="topic.id"
        @click="setTopic(topic)"
      >
        <h3 class="py-6">{{ topic.text }}</h3>
        <img
          class="relative mt-[-9px]"
          :class="
            topicSelected && topicSelected.id == topic.id
              ? 'opacity-1'
              : 'opacity-0'
          "
          src="../assets/selection.png"
        />
      </div>
    </div>
    <div class="flex items-center">
      <div class="p-1.5" :class="isTextual ? 'toggle-selected' : 'cursor-pointer'" @click="isTextual = true">
        <img src="../assets/text-toggle.svg" />
      </div>
      <div class="p-1.5" :class="isTextual ? 'cursor-pointer' : 'toggle-selected'" @click="isTextual = false">
        <img src="../assets/img-toggle.svg" />
      </div>
    </div>
  </div>
  <div class="flex lg:flex-row sm:flex-col justify-between bg-grey py-16 px-10">
    <h1>{{ topicSelected.text }}</h1>
    <div>
      <button
        :class="idxTopic != topic.length - 1 ? 'mr-4' : ''"
        class="tag py-3 px-4"
        v-for="(topic, idxTopic) in topics.filter(
          (item) => item.id !== topicSelected.id
        )"
        :key="topic.id"
        :style="`background-color: ${topic.color}`"
      >
        {{ topic.text }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Menu from "./Menu.vue";

const topics = ref([
  { id: 0, name: "all", text: "Tutti i temi", color: "#F4F4F4" },
  { id: 1, name: "env", text: "Ambiente", color: "#E2F1E8" },
  { id: 2, name: "eco", text: "Economia", color: "#E2E8F1" },
  { id: 3, name: "world", text: "Mondo", color: "#F1DADA" },
  { id: 4, name: "no-prof", text: "Non Profit", color: "#F0E2F1" },
  { id: 5, name: "politics", text: "Politica", color: "#F1F1E2" },
  { id: 6, name: "society", text: "Società", color: "#E2F0F1" },
  { id: 7, name: "welfare", text: "Welfare", color: "#F5E6E0" },
]);
const topicSelected = ref(topics.value[0]);
const isMenuVisible = ref(false);
const isFilterVisible = ref(false);
const isTextual = ref(true);

const setTopic = (topic) => {
  topicSelected.value = topic;
};
</script>

<style scoped>
.toggle-selected {
  border-radius: 4px;
  border: 1px solid black;
  background: white;
  box-shadow: -2px 2px 0px 0px black;
}
</style>
