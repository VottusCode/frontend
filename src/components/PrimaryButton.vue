<template>
  <router-link
    class="bg-purple-700 px-4 py-2 hover:bg-purple-600 transition duration-200 ease-in-out rounded-md text-white dash-none"
    :to="to"
    v-if="to"
  >
    <slot />
  </router-link>

  <a
    class="bg-purple-700 px-4 py-2 hover:bg-purple-600 transition duration-200 ease-in-out rounded-md text-white dash-none"
    :href="href ? href : '#'"
    v-else
  >
    <slot />
  </a>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    to: String,
    href: String,
  },
});
</script>
