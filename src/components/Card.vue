<template>
  <router-link v-if="to" :href="href" :to="to" class="w-full dash-none">
    <div
      class="bg-gray-200 text-white px-4 py-3 rounded-md w-full transition duration-150 ease-in-out transform hover:scale-98 mb-4"
      :class="{
        'transition duration-150 ease-in-out transform hover:scale-98 mb-4': hoverable,
      }"
    >
      <h2 class="text-2xl text-gray-700 mt-1" style="line-height: 1">
        {{ title }}
      </h2>
      <div class="mt-4 text-gray-600 w-full">
        <div v-if="detail" class="text-gray-500 text-sm">{{ detail }}</div>
        <slot />
      </div>
    </div>
  </router-link>

  <a :href="href ? href : null" v-else class="w-full dash-none">
    <div
      class="bg-gray-200 text-white px-4 py-3 rounded-md w-full"
      :class="{
        'transition duration-150 ease-in-out transform hover:scale-98 mb-4': hoverable,
      }"
    >
      <h2 class="text-2xl text-gray-700">{{ title }}</h2>
      <div class="mt-4 text-gray-600 w-full">
        <div v-if="detail" class="text-gray-500 text-sm">{{ detail }}</div>
        <slot />
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    href: String,
    title: String,
    to: String,
    detail: String,
    hoverable: Boolean,
  },
});
</script>
