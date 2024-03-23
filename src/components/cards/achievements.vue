<template>
  <div class="flex flex-wrap gap-5">
    <div v-for="achive in achievements" class="md:w-[calc(100%/3-16px)] w-full bg-[#242424]">
      <img :src="achive.img" class="w-full min-h-[250px] max-h-[320px] object-cover" alt="">
      <div class="p-4">
        <div class="text-white text-[20px] mb-2 font-semibold">{{ achive.title }}</div>
        <div class="text-[16px] text-[#FFFFFFB1] mb-5">
          {{ achive.subtitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  achievements: Array,
});

</script>
<style scoped></style>