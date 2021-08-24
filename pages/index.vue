<template>
  <section class="container mx-auto px-2">
    <h2 class="text-lg md:text-xl xl:text-2xl md:text-center">
      {{ dateArray[0] }}年{{ dateArray[1] }}月{{ dateArray[2] }}日のアマゾンタイムセール
    </h2>
    <ul class="flex flex-wrap">
      <li v-for="(data, key) in datas" :key="key" class="w-1/2 p-1 sm:w-1/3 md:w-1/4 xl:w-1/5">
        <SaleItem
          :href="data.href"
          :image="data.image"
          :label="data.label"
          :aside-price="data.asidePrice"
          :price="data.price"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import SaleItem from '../components/SaleItem.vue'
export default {
  components: { SaleItem },
  async asyncData ({ $axios, store }) {
    if (store.getters.datetimes.length) {
      return
    }
    await store.dispatch('fetchDatetimes')
    const datas = await $axios.get(`${store.getters.targetUrl}/posts/${store.getters.datetimes[store.getters.datetimes.length - 1]}.json`)
    return {
      dateArray: datas.data[0].date.split('-'),
      datas: datas.data
    }
  },
  head () {
    return {
      title: 'アマゾンタイムセール情報ツウ！',
      titleTemplate: ''
    }
  }
}
</script>
