<template>
  <div
    class="text-black min-w-screen min-h-screen w-full h-full flex justify-between items-center mx-auto max-w-6xl"
  >
    <div class="max-w-xl">
      <Title shadow="Vottus">Mia</Title>
      <subtitle>
        Fullstack
        <span class="text-purple-600 font-medium"> Website Developer </span>
      </subtitle>
      <text-wrapper>
        Hello, I'm <strong>Mia</strong>, fullstack web developer. I
        am proficient in <strong>JavaScript (+ TypeScript)</strong>,
        <strong>PHP</strong> and <strong>Java</strong>, currently learning Rust.
        I occasionally use <strong>Java</strong> and <strong>Kotlin</strong>.

        <div class="mt-8">
          <strong>Links & Social Media</strong>
          <div class="mt-3 ml-4">
            <ul class="links">
              <!--<li>
                <a href="https://twitter.com/fvottus">Twitter</a>
                (fvottus)
              </li>-->
              <li>
                <a href="https://github.com/VottusCode">GitHub</a>
                (VottusCode)
              </li>
              <li>
                <a href="https://www.linkedin.com/in/filip-vottus-536a421b8/">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Footer />
      </text-wrapper>
    </div>

    <div class="hidden lg:block">
      <div class="avatar">
        <img :src="avatar.url" alt="Mia" class="rounded-xl" />
       <!-- <a :href="avatar.author" target="_blank" class="dash-none text-sm">{{
          avatar.author
        }}</a>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Title from '@/components/Title.vue';
import Subtitle from '@/components/Subtitle.vue';
import TextWrapper from '@/components/TextWrapper.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  components: {
    Title,
    Subtitle,
    TextWrapper,
    Footer,
  },
  data() {
    return {
      avatar: {
        url:
          'https://cdn.discordapp.com/attachments/802673312429899786/855422214237454336/image0.jpg',
       // author: 'https://www.pixiv.net/en/artworks/60819724',
      },
    };
  },
});
</script>
