<template>
  <section class="container mx-auto px-4">
    <h2 class="text-3xl">
      {{ dateArray[0] }}年{{ dateArray[1] }}月{{ dateArray[2] }}日のアマゾンタイムセール
    </h2>
    <ul class="flex flex-wrap">
      <li v-for="(data, key) in datas" :key="key" class="w-full py-2 sm:w-1/2 md:w-2/6 sm:p-2 xl:w-1/4">
        <a :href="data.href" target="_blank" class="shadow-lg block p-2 bg-white transform md:scale-95 hover:scale-100">
          <img :src="data.image" :alt="data.label" class="object-contain h-48 display-block mx-auto">
          <div class="has-tooltip mt-2">
            <span class="tooltip rounded shadow-lg p-1 bg-blue-100">{{ data.label }}</span>
            <h3 class="text-md md:truncate md:underline">{{ data.label }}</h3>
          </div>
          <p class="flex justify-end items-center mt-2">
            <span v-if="data.aside_price" class="pr-2 py-1 leading-4">{{ data.aside_price }}</span>
            <span v-if="data.price" class="bg-red-600 text-white px-2 py-1 text-xl">¥{{ data.price }}</span>
          </p>
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
