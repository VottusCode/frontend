<template>
  <main-flex-wrapper>
    <div class="mx-2 md:mx-8 lg:mx-20 grid grid-cols-3 w-full h-full">
      <div
        class="col-start-1 col-end-3 flex justify-center items-start w-full h-full"
        style="flex-flow: column"
      >
        <Title shadow="Vottus">Vottus</Title>
        <subtitle>
          Fullstack
          <span class="text-purple-600 font-bold"> Website Developer </span>
        </subtitle>

        <text-wrapper>
          Hello! I'm <strong>Filip Vottus</strong>, a
          <strong>fullstack web developer</strong> from Prague!

          <div class="mt-4">
            I can code in <strong>PHP</strong>, <strong>JavaScript</strong>,
            <strong>Java</strong> and <strong>Kotlin</strong>.
          </div>

          <div class="mt-8">
            I use and have the most experience with
            <a href="https://nodejs.org" target="_blank">Node.js</a> (+ Fastify)
            and <a href="https://vuejs.org" target="_blank">Vue.js</a> (+
            Nuxt.js).
            <br />
            I also like using <strong>TypeScript</strong> with my projects.
          </div>

          <div class="mt-8">
            <strong>Links & Social Media</strong>
            <div class="mt-3 ml-4">
              <ul class="links">
                <li>
                  <a href="https://twitter.com/fvottus">Twitter</a>
                  (fvottus)
                </li>
                <li>
                  <a href="https://github.com/VottusCode">GitHub</a>
                  (VottusCode)
                </li>
                <li><router-link to="/blog">Blog</router-link></li>
                <li>
                  <a href="https://linkedin.com/vottus">LinkedIn</a> (not
                  updated)
                </li>
              </ul>
            </div>
          </div>

          <Footer />
        </text-wrapper>
      </div>
      <div
        class="col-end-4 col-span-1 justify-end items-center w-full h-full hidden lg:flex"
      >
        <div class="avatar">
          <img :src="avatar.url" alt="Vottus" class="rounded-xl" />
          <a :href="avatar.author" target="_blank" class="dash-none text-sm">{{
            avatar.author
          }}</a>
        </div>
      </div>
    </div>
  </main-flex-wrapper>
</template>

<script lang="ts">
import Vue from 'vue';
import Title from '@/components/Title.vue';
import Subtitle from '@/components/Subtitle.vue';
import TextWrapper from '@/components/TextWrapper.vue';
import MainFlexWrapper from '@/components/MainFlexWrapper.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  components: {
    Title,
    Subtitle,
    TextWrapper,
    MainFlexWrapper,
    Footer,
  },
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
