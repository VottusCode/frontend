<template>
  <div class="w-screen h-screen bg-gray-200 text-white">
    <div class="flex justify-start items-center w-full h-full">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
strong,
a {
  @apply text-gray-800;
  @apply font-normal;
}
a:not(.dash-none) {
  position: relative;
  &:after {
    content: '';
    position: absolute;
    cursor: pointer;
    z-index: 0;
    top: 65%;
    left: -0.1em;
    right: -0.1em;
    bottom: 0;
    transition: top 0.3s cubic-bezier(0, 0.8, 0.13, 1);
    background-color: rgba(128, 90, 213, 0.5);
  }

  &:hover:after {
    top: 0%;
  }
}
.image {
  cursor: pointer;
  a {
    display: block;
    opacity: 0;
    margin-top: -30px;
    transition: margin-top 0.3s cubic-bezier(0, 0.8, 0.13, 1);
    @apply text-purple-600;
    @apply text-xl;
  }
  &:hover a {
    margin-top: 0;
    opacity: 1;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      avatar: {
        url:
          'https://media.discordapp.net/attachments/765326619387756614/774040339598147584/image0.jpg',
        author: 'https://www.pixiv.net/en/artworks/60819724',
      },
    };
  },
});
</script>
