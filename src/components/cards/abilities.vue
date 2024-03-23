<template>
  <div class="flex flex-wrap gap-4 justify-center">
    <div
      v-for="ability in abilities"
      :key="ability.id"
      class="transition-all duration-200 hover:bg-[#ff9317] w-[calc(100%/2-13px)] sm:w-[calc(100%/3-13px)] xl:w-[calc(20%-13px)] bg-[#242424] rounded-[10px] border-[#FFB400] flex flex-col justify-center shadow-lg items-center py-6 text-center"
    >
      <img :src="ability.icon" class="h-[48px] mb-2">
      <span class="text-white text-[22px] font-semibold">{{ ability.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  abilities: Array,
});

</script>
<style scoped></style>