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
    this.transition =
      to.path === '/'
        ? 'slide-right'
        : to.path.split('/').length < from.path.split('/').length
        ? 'slide-right'
        : 'slide-left';
    next();
  },
});
</script>
