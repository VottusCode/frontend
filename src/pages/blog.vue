<template>
  <main-flex-wrapper>
    <div class="block mx-2 md:mx-8 lg:mx-20 w-full">
      <Title shadow="Blog"> Blog </Title>

      <div class="mb-8 w-full">
        <text-wrapper>
          <card title="Hello" to="/hello/hello" detail="User | 01.01.2021">
            asgfasfasdfasdfasdfasdfasdkfasfsadfoasidfasghfdasoidfashgdfasdfpíh;
            asgfasfasdfasdfasdfasdfasdkfasfsadfoasidfasghfdasoidfashgdfasdfpíh;
            asgfasfasdfasdfasdfasdfasdkfasfsadfoasidfasghfdasoidfashgdfasdfpíh;
            asgfasfasdfasdfasdfasdfasdkfasfsadfoasidfasghfdasoidfashgdfasdfpíh;
          </card>
          <card title="Hello" to="/hello/hello" detail="User | 01.01.2021">
            asgfasfasdfasdfasdfasdfasdkfasfsadfoasidfasghfdasoidfashgdfasdfpíh;
            asgfasfasdfasdfasdfasdfasdkfasfsadfoasidfasghfdasoidfashgdfasdfpíh;
            asgfasfasdfasdfasdfasdfasdkfasfsadfoasidfasghfdasoidfashgdfasdfpíh;
            asgfasfasdfasdfasdfasdfasdkfasfsadfoasidfasghfdasoidfashgdfasdfpíh;
          </card>
        </text-wrapper>
      </div>

      <text-wrapper>
        <Footer />
      </text-wrapper>
    </div>
  </main-flex-wrapper>
</template>

<script lang="ts">
import Card from '@/components/Card.vue';
import Footer from '@/components/Footer.vue';
import MainFlexWrapper from '@/components/MainFlexWrapper.vue';
import TextWrapper from '@/components/TextWrapper.vue';
import Title from '@/components/Title.vue';
import Vue from 'vue';

export default Vue.extend({
  components: { MainFlexWrapper, Title, Card, Footer, TextWrapper },
  data() {
    return {
      posts: [],
    };
  },
});
</script>
