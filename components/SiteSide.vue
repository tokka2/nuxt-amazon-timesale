<template>
  <aside class="text-center p-4">
    <div class="sticky top-2">
      <div class="flex justify-between">
        <span class="cursor-pointer" @click="movePrevMonth">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </span>
        <span class="text-xl">{{ currentYear + ' / ' + currentMonth }}</span>
        <span class="cursor-pointer" @click="moveNextMonth">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
      <div class="calendar-body">
        <div class="flex">
          <div v-for="(day, key) in weeks" :key="key" class="day-cell">
            {{ day }}
          </div>
        </div>
        <div class="flex flex-wrap">
          <div v-for="(day, key) in calendarMake" :key="key" :value="day" class="day-cell">
            <nuxt-link v-if="checkSelectedDay(day)" class="sale" :to="`/posts/${checkPostPath(day)}`">
              {{ day }}
            </nuxt-link>
            <span v-else>{{ day }}</span>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      today: '',
      selectedDay: '',
      currentYear: 0,
      currentMonth: 0,
      currentDate: 0,
      weeks: ['月', '火', '水', '木', '金', '土', '日'],
      calendar: [],
      holidays: []
    }
  },
  computed: {
    calendarMake () {
      const firstday = new Date(this.currentYear, this.currentMonth - 1, 1).getDay()
      const lastdate = new Date(this.currentYear, this.currentMonth, 0).getDate()
      const necessarySpace = firstday === 0 ? 6 : firstday - 1
      const list = [[...Array(necessarySpace)].map(i => ' '), [...Array(lastdate)].map((_, i) => i + 1)]
      const week = list.reduce((pre, current) => { pre.push(...current); return pre }, [])
      return week
    },
    datetimes () {
      if (!this.$store.state.datetimes.length) {
        this.$store.dispatch('fetchDatetimes')
      }
      return this.$store.state.datetimes.map(datetime => datetime.split('-'))
    }
  },
  created () {
    const date = new Date();
    [this.currentYear, this.currentMonth, this.currentDate] = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    this.today = this.selectedDay = `${this.currentYear}-${('0' + this.currentMonth).slice(-2)}-${this.currentDate}`
  },
  methods: {
    checkSelectedDay (day) {
      return this.datetimes.filter(datetime => `${this.currentYear}${('0' + this.currentMonth).slice(-2)}${('0' + day).slice(-2)}` === `${datetime[0]}${datetime[1]}${datetime[2]}`).length > 0
    },
    checkPostPath (day) {
      return this.datetimes.filter(datetime => `${this.currentYear}${('0' + this.currentMonth).slice(-2)}${('0' + day).slice(-2)}` === `${datetime[0]}${datetime[1]}${datetime[2]}`)[0].join('-')
    },
    movePrevMonth () {
      this.currentMonth = this.currentMonth !== 1 ? this.currentMonth - 1 : 12
      this.currentYear = this.currentMonth !== 12 ? this.currentYear : this.currentYear - 1
    },
    moveNextMonth () {
      this.currentMonth = this.currentMonth !== 12 ? this.currentMonth + 1 : 1
      this.currentYear = this.currentMonth !== 1 ? this.currentYear : this.currentYear + 1
    }
  }
}
</script>

<style>
.day-cell {
  width: 14.2857142857143%;
}
.day-cell:nth-of-type(7n-1){
  color: #3b82f6;
}
.day-cell:nth-of-type(7n),
.day-cell.holidays {
  color:#ef4444;
}
.sale{
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  color: #fff;
  line-height: 24px;
  background-color: #3fb0ff;
}
</style>
