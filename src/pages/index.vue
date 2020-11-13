<template>
  <div class="text-white">
    <div class="flex justify-start items-center w-full h-full">
      <div class="mx-2 md:mx-8 lg:mx-20 grid grid-cols-3">
        <div
          class="col-start-1 col-end-3 flex justify-center items-start w-full h-full"
          style="flex-flow: column;"
        >
          <h1
            class="text-white font-medium text-2xl md:text-3xl lg:text-8xl title"
            data-text="Vottus"
            style="line-height: 1;"
          >
            Vottus
          </h1>
          <h2 class="mt-4 text-gray-600 text-4xl">
            Fullstack
            <span class="text-purple-600 font-bold">
              Website Developer
            </span>
          </h2>

          <div class="font-thin text-gray-700 text-3xl mt-8">
            <div>
              Hello! I'm <strong>Filip Vottus</strong>, a
              <strong>fullstack web developer</strong> from Prague!

              <div class="mt-4">
                I can code in <strong>PHP</strong>, <strong>JavaScript</strong>,
                <strong>Java</strong> and <strong>Kotlin</strong>.
              </div>

              <div class="mt-8">
                I use and have most experience
                <a href="https://nodejs.org" target="_blank">Node.js</a> with
                <a href="https://fastify.io" target="_blank">Fastify</a> and
                <a href="https://vuejs.org" target="_blank">Vue.js</a> (+ Nuxt.js).
                <br />
                I also like using <strong>TypeScript</strong> with my projects.
              </div>

              <div class="mt-8">
                <strong>Links & Social Media</strong>
                <div class="mt-3 ml-4">
                  <ul class="links">
                    <li><a href="https://twitter.com/fvottus">Twitter</a> (fvottus)</li>
                    <li><a href="https://github.com/VottusCode">GitHub</a> (VottusCode)</li>
                    <li><router-link to="/blog">Blog</router-link></li>
                    <li><a href="https://linkedin.com/vottus">LinkedIn</a> (not updated)</li>
                  </ul>
                </div>
              </div>

              <div class="mt-20 text-gray-500">
                2020 &copy; Vottus &ndash; All Rights Reserved
              </div>
            </div>
          </div>
        </div>
        <div class="col-end-4 col-span-1 justify-end items-center w-full h-full hidden lg:flex">
          <div class="image">
            <img :src="avatar.url" alt="Vottus" class="rounded-xl" />
            <a :href="avatar.author" target="_blank" class="dash-none"
              >Image: {{ avatar.author }}</a
            >
          </div>
        </div>
      </div>
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

.links > li {
  &:before {
    content: '– ';
    @apply text-gray-500;
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
