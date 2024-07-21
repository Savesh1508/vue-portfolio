<template>
  <div  class="gap-5 flex flex-wrap">
    <a :href="project.link" v-for="project in projects" :key="project.id" class="w-full md:w-[calc(100%/3-16px)] max-h-[320px] relative">
      <img :src="project.img" class="w-full h-[320px] overflow-hidden object-cover" alt="">
      <div class="absolute flex flex-col justify-center items-center left-0 top-0 w-full h-full p-4 bg-[#000000d0] opacity-0 hover:opacity-100 transition-all duration-200">
        <h3 class="text-center text-sm sm:text-lg text-white uppercase font-semibold mb-3">
          {{ project.name }}
        </h3>
        <div class="flex items-center justify-center">
          <div class="w-10 h-10 rounded-full flex items-center justify-center border border-gray-400 text-gray-400 hover:border-white hover:text-white duration-200 mr-1">
            <a :href="project.link" target="_blank" class="text-2xl bx bx-link"></a>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  projects: Array,
});

</script>
<style scoped></style>