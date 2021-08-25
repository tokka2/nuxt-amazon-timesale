<template>
  <div class="bg-gray-100">
    <SiteHeader />
    <div class="container mx-auto mt-4 md:flex md:flex-row-reverse">
      <Nuxt class="md:w-3/4" />
      <SiteSide class="md:w-1/4" />
    </div>
    <SiteFooter />
  </div>
</template>

<style>
.badge-promo {
  position: relative;
  overflow: hidden;
  max-height: 60px;
  margin-bottom: -8px;
  z-index: 1;
  padding: 12px 14px;
  border-radius: 2px 2px 0 0;
  color: #fff;
  text-align: left;
}
.badge-promo:before,
.badge-promo:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
}

.badge-promo:before {
  background: #a5daff;
  height: 100%;
  width: 110%;
  transform-origin: bottom right;
  transform: rotate(1deg);
}

.badge-promo:after {
  background: #3fb0ff;
  transform: rotate(-3deg);
  transform-origin: bottom left;
  height: 100%;
  width: 110%;
}

.badge-promo-content {
  position: relative;
  z-index: 1;
  font-family: sans-serif;
  font-size: 18px
}
</style>
