<template>
  <a :href="href" target="_blank" class="shadow-lg block bg-white transform md:scale-95 hover:scale-100 overflow-hidden pb-2">
    <img :src="image" :alt="label" class="object-contain h-24 display-block mx-auto" loading="lazy">
    <div class="has-tooltip h-12 p-2 overflow-hidden">
      <span v-if="asidePrice" class="pr-2 py-1 leading-4">{{ asidePrice }}</span>
      <h3 class="text-sm">{{ label }}</h3>
    </div>
    <p class="items-center absolute top-16">
      <span v-if="price" class="bg-red-600 bg-opacity-80 text-white px-2 py-1 text-md display-block rounded-r-lg">¥{{ price }}</span>
    </p>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: 'abc',
      required: true
    },
    image: {
      type: String,
      default: 'abc',
      required: true
    },
    label: {
      type: String,
      default: 'abc',
      required: true
    },
    asidePrice: {
      type: String,
      default: null
    },
    price: {
      type: String,
      default: 'abc',
      required: true
    }
  }
}
</script>
