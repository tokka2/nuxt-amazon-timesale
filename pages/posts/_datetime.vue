<template>
  <section class="container mx-auto px-2">
    <h2 class="text-lg md:text-xl xl:text-2xl md:text-center">
      {{ dateArray[0] }}年{{ dateArray[1] }}月{{ dateArray[2] }}日のアマゾンタイムセール
    </h2>
    <ul class="flex flex-wrap">
      <li v-for="(data, key) in datas" :key="key" class="w-full py-2 sm:w-1/2 md:w-2/6 sm:p-2 xl:w-1/4">
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
import SaleItem from '../../components/SaleItem.vue'
export default {
  components: { SaleItem },
  async asyncData ({ $axios, params, store }) {
    const dateTime = params.datetime
    const datas = await $axios.get(`${store.getters.targetUrl}/posts/${dateTime}.json`)
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
