<template>
  <div class="bg-[#242424] p-6 sm:p-8">
    <div v-for="educate in education" :key="educate.id" class="flex flex-wrap md:flex-nowrap pb-6 border-b border-[#ffffff36] mb-8">
      <div class="md:w-1/3 md:pr-3 mb-3 sm:mb-6 md:mb-0 pr-0 w-full">
        <h3 class="mb-5 text-[18px] text-white font-semibold">{{ educate.location }}</h3>
        <div class="flex justify-between">
          <span class="text-[16px] text-[#fffc] mr-2 font-medium">{{ educate.level }}</span>
          <span class="bg-[#FFB400] py-1 px-2 text-white rounded-md" >{{ educate.date }}</span>
        </div>
      </div>
      <div class="md:w-2/3 w-full pl-0 md:pl-6">
        <h3 class="mb-5 text-[18px] text-white font-semibold">{{ educate.course }}</h3>
        <p class="text-[16px] text-[#fffc]">{{ educate.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  education: Array,
});

</script>
<style scoped></style>