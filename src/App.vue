<template>
  <div id="vue-app">
    <transition :name="transition">
      <router-view class="child-view" />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import './assets/scss/main.scss';

export default Vue.extend({
  data() {
    return {
      transition: 'slide-left',
    };
  },
  beforeRouteUpdate(to, from, next) {
    const toDepth = to.path.split('/').length;
    const fromDepth = from.path.split('/').length;
    this.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    next();
  },
});
</script>
