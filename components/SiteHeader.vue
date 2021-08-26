<template>
  <header class="site-header">
    <div class="container mx-auto pt-2 pb-4 px-4 md:pt-3 md:pb-6 md:px-6 site-header-content">
      <a href="/">
        <h1 class="text-xl md:text-2xl xl:text-3xl title">
          アマゾンタイムセール情報ツウ！
        </h1>
      </a>
    </div>
  </header>
</template>

<style scoped>
.title {
  font-family: 'Kaisei Decol', serif;
  color: #fff;
}
.site-header {
  position: relative;
  overflow: hidden;
  z-index: 1;
  border-radius: 2px 2px 0 0;
  color: #fff;
  text-align: left;
}
.site-header:before,
.site-header:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 110%;
}

.site-header:before {
  background: #a5daff;
  transform-origin: bottom right;
  transform: rotate(1deg);
}

.site-header:after {
  background: #3fb0ff;
  transform: rotate(-2deg);
  transform-origin: bottom left;
}

.site-header-content {
  position: relative;
  z-index: 1;
  font-family: sans-serif;
  font-size: 18px
}
</style>
