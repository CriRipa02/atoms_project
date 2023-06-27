<template>
<div class="flex lg:flex-row sm:flex-col justify-between py-12 px-10">
  <div class="flex lg:flex-row sm:flex-col" >
    <a class="mr-6" v-for="(note, idxNote) in notes" :key="idxNote" :href="note.link" target="_blank">{{ note.text }}</a>
  </div>
  <h4 class="lg:mt-0 sm:mt-6">© 1994-2022 Vita Società Editoriale S.p.A.</h4>
</div>
</template>

<script setup>

const notes = [
  { id: 0, text: "Il Gruppo", link: "https://www.google.com" },
  { id: 1, text: "Note Legali", link: "https://www.google.com" },
  { id: 2, text: "Chi Siamo", link: "https://www.google.com" },
  { id: 3, text: "Condizioni d'uso", link: "https://www.google.com" },
  { id: 4, text: "Privacy", link: "https://www.google.com" },
  { id: 5, text: "Scrivici", link: "https://www.google.com" },
  { id: 6, text: "Pubblicità", link: "https://www.google.com" }
];

</script>

<style scoped>
</style>
