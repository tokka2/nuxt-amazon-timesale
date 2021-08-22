<template>
  <a :href="href" target="_blank" class="shadow-lg block p-2 bg-white transform md:scale-95 hover:scale-100">
    <img :src="image" :alt="label" class="object-contain h-48 display-block mx-auto" loading="lazy">
    <div class="has-tooltip mt-2">
      <span class="tooltip rounded shadow-lg p-1 bg-blue-100">{{ label }}</span>
      <h3 class="text-md md:truncate md:underline">{{ label }}</h3>
    </div>
    <p class="flex justify-end items-center mt-2">
      <span v-if="asidePrice" class="pr-2 py-1 leading-4">{{ asidePrice }}</span>
      <span v-if="price" class="bg-red-600 text-white px-2 py-1 text-xl">¥{{ price }}</span>
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
