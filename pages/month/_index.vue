<template>
  <section class="px-2">
    <h2 class="border-b-2 p-2 text-xl" />
    <ul class="mt-2 list-disc pl-4">
      <li v-for="(data, key) in datas" :key="key" class="mt-2">
        <a v-if="data.date" :href="`/posts/${data.date}`" class="p-2 block text-yellow-500">{{ data.title }}</a>
        <a v-else :href="`/posts/${data}`" class="p-2 block text-yellow-500">{{ data }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async asyncData ({ $axios, params, store }) {
    const datas = await $axios.get(`${store.getters.targetUrl}/updated.json`)
    return {
      dateArray: params.index.split('-'),
      datas: datas.data.filter(item => item.date ? item.date.includes(params.index) : item.includes(params.index))
    }
  },
  head () {
    return {
      title: `${this.dateArray[0]}年${this.dateArray[1]}月`
    }
  }
}
</script>
