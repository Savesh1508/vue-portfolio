<template>
  <div class="flex flex-wrap justify-between">
    <div v-for="service in services" :key="service.id" class="card bg-[#242424] p-8 w-full sm:w-[48.5%] md:w-[32%] flex flex-col items-center mb-3 sm:mb-6 text-white">
      <img :src="service.img" class="mb-6 w-[70px] h-[70px]">
      <h3 class="text-[18px] mb-2 font-semibold">{{ service.title }}</h3>
      <p class="text-[15px] text-[#fffc] text-center">{{ service.subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  services: Array,
});

</script>
<style scoped></style>