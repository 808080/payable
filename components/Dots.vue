<script setup lang="ts">
defineProps<{
  pagesTotal: number,
  classDots?: string,
  classActive: string,
  classPerDot?: string[]
}>();

const emit = defineEmits<{
  (e: 'getPage', page: number): void
}>();

const selected = ref(1);

const handleClick = (i: number) => {
  if (i === selected.value) return;
  selected.value = i;
  emit('getPage', i);
};

onMounted(() => {
  emit('getPage', selected.value);
});
</script>

<template>
  <div class="flex">
    <div v-for="i in pagesTotal" @click="handleClick(i)" class="rounded-full duration-500 cursor-pointer"
      :class="[classDots, classPerDot?.[i], { [classActive]: selected === i }]">
    </div>
  </div>
</template>