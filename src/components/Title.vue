<template>
  <h1 class="title md:text-6xl text-black" :data-text="shadow" style="line-height: 1">
    <slot />
  </h1>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    shadow: String,
  },
});
</script>
