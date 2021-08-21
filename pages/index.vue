<template>
  <section class="container mx-auto px-4">
    <h2 class="text-3xl">
      {{ dateArray[0] }}年{{ dateArray[1] }}月{{ dateArray[2] }}日のアマゾンタイムセール
    </h2>
    <ul class="flex flex-wrap">
      <li v-for="(data, key) in datas" :key="key" class="md:w-2/6 p-2">
        <a :href="data.href" class="shadow-lg block p-4">
          <img :src="data.image" :alt="data.label">
          <h3 class="text-xl">{{ data.label }}</h3>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const targetUrl = 'https://tokka2.github.io/tokka_amazon_timesale'
    const datas = await $axios.get(`${targetUrl}/updated.json`)
      .then(res1 => $axios.get(`${targetUrl}/posts/${res1.data[res1.data.length - 1]}.json`).then(res2 => res2))
    return {
      dateArray: datas.data[0].date.split('-'),
      datas: datas.data
    }
  },
  head () {
    return {
      title: `${this.dateArray[0]}年${this.dateArray[1]}月${this.dateArray[2]}日`
    }
  }
}
</script>
