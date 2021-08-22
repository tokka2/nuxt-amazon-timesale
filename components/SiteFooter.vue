<template>
  <footer class="text-center p-2">
    <ul>
      <li v-for="(datetime, key) in datetimes" :key="key">
        <nuxt-link :to="`/posts/${datetime[0]}-${datetime[1]}-${datetime[2]}-${datetime[3]}`">
          {{ datetime[0] }}年{{ datetime[1] }}月{{ datetime[2] }}日
        </nuxt-link>
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
  computed: {
    datetimes () {
      if (!this.$store.state.datetimes.length) {
        this.$store.dispatch('fetchDatetimes')
      }
      return this.$store.state.datetimes.map(datetime => datetime.split('-'))
    }
  }
}
</script>
