<template>
  <div class="first-article mb-px">
    <div class="absolute bottom-11 left-10">
      <button class="tag py-1 px-3">{{ articles[0].tag }}</button>
      <h2 class="max-w-[70%] my-6">{{ articles[0].title }}</h2>
      <div class="flex">
        <img
          class="reporter-img mr-4"
          src="../assets/firstArticles/1-reporter.jpg"
        />
        <div class="text-white">
          <span class="block text-sm">Di {{ articles[0].author }}</span>
          <span>{{ articles[0].date }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="flex h-[845px]">
    <div class="second-article me-px">
      <div>
        <button
          class="tag py-1 px-3"
          :style="`background-color: ${articles[1].color}`"
        >
          {{ articles[1].tag }}
        </button>
        <h2 class="max-w-[700px] my-6 text-[32px] leading-[46px]">
          {{ articles[1].title }}
        </h2>
        <img
          class="reporter-img mb-4"
          src="../assets/firstArticles/2-reporter.png"
        />
        <div class="text-white mb-6">
          <span class="block text-sm">Di {{ articles[1].author }}</span>
          <span>{{ articles[1].date }}</span>
        </div>
        <img src="../assets/arrow-right-white.svg" />
      </div>
    </div>
    <div class="w-[40%]">
      <div class="third-article mb-px">
        <div class="mb-px">
          <button
            class="tag py-1 px-3 mb-6"
            :style="`background-color: ${articles[2].color}`"
          >
            {{ articles[2].tag }}
          </button>
          <img src="../assets/firstArticles/sound.svg" />
          <h2 class="my-6 text-2xl">
            {{ articles[2].title }}
          </h2>
          <img
            class="reporter-img mb-4"
            src="../assets/firstArticles/3-reporter.jpg"
          />
          <div class="text-white mb-6">
            <span class="block text-sm">Di {{ articles[2].author }}</span>
            <span>{{ articles[2].date }}</span>
          </div>
          <img src="../assets/arrow-right-white.svg" />
        </div>
      </div>
      <div class="third-article forth-article">
        <div class="mb-px">
          <button
            class="tag py-1 px-3"
            :style="`background-color: ${articles[3].color}`"
          >
            {{ articles[3].tag }}
          </button>
          <h2 class="my-6 text-2xl max-w-[380px]">
            {{ articles[3].title }}
          </h2>
          <img
            class="reporter-img mb-4"
            src="../assets/firstArticles/4-reporter.jpg"
          />
          <div class="text-white mb-6">
            <span class="block text-sm">Di {{ articles[3].author }}</span>
            <span>{{ articles[3].date }}</span>
          </div>
          <img src="../assets/arrow-right-white.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const articles = [
  {
    id: 0,
    tag: "migranti",
    title: "Roccella Jonica, la Lampedusa che l'Italia ignora",
    author: "Alessandro Puglia",
    date: "29 Giugno 2022",
  },
  {
    id: 1,
    tag: "allarmi",
    title:
      "Il collasso dei ghiacciai negli scatti del fotografo ambientale Fabiano Ventura",
    author: "Ugo Lombi",
    date: "14 Giugno 2022",
    color: "#E2F1E8",
  },
  {
    id: 2,
    tag: "esperimenti",
    title:
      "Gli startupper? Li trovi al bistrot. Così il DumBo incuba relazioni",
    author: "Diletta Grella",
    date: "14 Luglio 2022",
    color: "#E2F0F1",
  },
  {
    id: 3,
    tag: "ucraina",
    title: "Nelle città italiane tutti in piazza per e con Kiev",
    author: "Anna Spena",
    date: "14 Luglio 2022 ",
    color: "#F1DADA",
  },
];
</script>

<style scoped>
.first-article {
  position: relative;
  right: 0;
  width: 100%;
  height: 506px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../assets/firstArticles/1-article.jpg");
  background-position-y: center;
  background-size: cover;
}
.second-article {
  width: 60%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../assets/firstArticles/2-article.png");
  background-position-y: center;
  background-position-x: center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  padding: 4vh 40px;
}
.third-article {
  height: 55%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../assets/firstArticles/3-article.jpg");
  background-position-y: center;
  background-position-x: center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  padding: 0 40px 4vh 40px;
}
.forth-article {
  height: 45%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../assets/firstArticles/4-article.png");
  padding: 0 40px 4vh 40px;
}
.reporter-img {
  border-radius: 48px;
  width: 48px;
  height: 48px;
}
</style>
