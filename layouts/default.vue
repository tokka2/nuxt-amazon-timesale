<template>
  <div class="bg-gray-100">
    <SiteHeader />
    <Nuxt />
    <SiteFooter />
  </div>
</template>

<style>
.has-tooltip {
  position: relative;
}

.tooltip {
  visibility: hidden;
  position: absolute;
}

.has-tooltip:hover .tooltip {
  visibility: visible;
  bottom: 0;
}
</style>
