<template>
  <div class="relative overflow-hidden max-h-[506px]">
    <img src="../assets/news/1-article.jpg" alt="Articolo principale" />
    <div class="absolute bottom-11 left-10">
      <button class="tag py-1 px-3">{{ articles[0].tag }}</button>
      <h2 class="max-w-[700px] my-6">{{ articles[0].title }}</h2>
      <div class="flex">
        <img class="reporter-img mr-4" src="../assets/news/1-reporter.jpg" />
        <div class="text-white">
          <span class="block text-sm mb-2">Di {{ articles[0].author }}</span>
          <span>{{ articles[0].date }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="relative overflow-hidden max-w-[825px]">
    <img src="../assets/news/2-article.png" alt="Articolo principale" />
    <div class="absolute bottom-[41px] left-10">
      <button class="tag py-1 px-3">{{ articles[1].tag }}</button>
      <h2 class="max-w-[700px] my-6">{{ articles[1].title }}</h2>
      <div class="flex">
        <img class="reporter-img mr-4" src="../assets/news/2-reporter.png" />
        <div class="text-white">
          <span class="block text-sm mb-2">Di {{ articles[1].author }}</span>
          <span>{{ articles[1].date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const articles = [
  { id: 0, tag: "migranti", title: "Roccella Jonica, la Lampedusa che l'Italia ignora", author: "Alessandro Puglia", date: "29 Giugno 2022" },
  { id: 1, tag: "allarmi", title: "Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura", author: "Ugo Lombi", date: "14 Giugno 2022" },
  { id: 2, text: "Chi Siamo", link: "https://www.google.com" },
  { id: 3, text: "Condizioni d'uso", link: "https://www.google.com" },
  { id: 4, text: "Privacy", link: "https://www.google.com" },
  { id: 5, text: "Scrivici", link: "https://www.google.com" },
  { id: 6, text: "Pubblicità", link: "https://www.google.com" },
];
</script>

<style scoped>
.reporter-img {
  border-radius: 48px;
  width: 48px;
  height: 48px;
}
</style>
