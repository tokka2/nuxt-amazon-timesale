<template>
  <section class="px-2">
    <h2 class="badge-promo">
      <span class="badge-promo-content">
        {{ dateArray[0] }}年{{ dateArray[1] }}月{{ dateArray[2] }}日
      </span>
    </h2>
    <ul class="flex flex-wrap mt-2">
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
