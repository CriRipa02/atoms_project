<template>
  <div class="grid grid-cols-3 grid-rows-2">
    <div class="border-b border-black p-10 pt-[187px]" :class="option.id != 2 && option.id != 5 ? 'border-r' : ''" v-for="option in options" :key="option.id">
      <h1 class="text-5xl mb-4">{{ option.text }}</h1>
      <label>{{ option.description }}</label>
    </div>
  </div>
  <div class="grid grid-cols-6 grid-rows-1">
    <div class="border-b border-black text-center py-[53px]" :class="item.id != info.length - 1 ? 'border-r' : ''" v-for="item in info" :key="item.id">
      <label>{{ item.text }}</label>
    </div>
  </div>
</template>

<script setup>
const options = [
  { id: 0, text: "Articoli", description: "Trend, dati e novità del Terzo Settore." },
  { id: 1, text: "Storie", description: "Letture ed approfondimenti dei fenomeni complessi." },
  { id: 2, text: "Interviste", description: "Racconti reali di persone ed organizzazioni." },
  { id: 3, text: "Opinioni", description: "Riflessioni e confronti dei nostri opinionisti." },
  { id: 4, text: "Podcast", description: "Un luogo per dare voce ai protagonisti della sostenibilità." },
  { id: 5, text: "Bookazine", description: "Una rivista da leggere e un libro da conservare." },
]
const info = [
  { id: 0, text: "Chi siamo" },
  { id: 1, text: "Comitato editoriale" },
  { id: 2, text: "Servizi" },
  { id: 3, text: "Agenda / Eventi" },
  { id: 4, text: "Mappa dell’attivismo" },
  { id: 5, text: "Inchieste crowdfunding" },
]
</script>

<style scoped>
</style>
