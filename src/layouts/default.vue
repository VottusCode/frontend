<template>
  <transition :name="transition">
    <router-view class="child-view" />
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
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
