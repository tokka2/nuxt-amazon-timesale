<template>
  <footer class="text-center p-2">
    <ul class="flex flex-wrap justify-center p-4">
      <li v-for="(month, key) in monthArray" :key="key" class="p-2">
        <a :href="`/month/${month}`" class="text-yellow-600">{{ `${month.split('-')[0]}年${month.split('-')[1]}月` }}</a>
      </li>
    </ul>
    <div>
      <small>
        © アマゾンタイムセール情報ツウ！
      </small>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    const from = new Date('2021-08-17')
    const to = new Date()
    const monthlyRange = []

    for (let ym = from; ym <= to; ym.setMonth(ym.getMonth() + 1)) {
      const strYearMonth = this.convertToStr(ym, 0)
      monthlyRange.push(strYearMonth)
    }
    monthlyRange.push(this.convertToStr(to, 0))
    return {
      monthArray: monthlyRange
    }
  },
  methods: {
    convertToStr (date, day) {
      // dayはフラグ。真のとき'yy-mm-dd'、偽のとき'yy-mm'。
      let strDate

      if (day) {
        strDate = [
          date.getFullYear(),
          ('0' + (date.getMonth() + 1)).slice(-2),
          ('0' + date.getDate()).slice(-2)
        ].join('-')
      } else {
        strDate = [
          date.getFullYear(),
          ('0' + (date.getMonth() + 1)).slice(-2)
        ].join('-')
      }
      return strDate
    }
  }
}
</script>
