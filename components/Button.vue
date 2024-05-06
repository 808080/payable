<script setup lang="ts">
const props = withDefaults(defineProps<{
  to?: string,
  variant?: 'default' | 'outline' | 'outline-dark'
}>(), {
  variant: 'default'
});

const classLists: { [k in typeof props.variant]: string } = {
  default: 'bg-primary py-3 text-secondary hover:bg-primary-dark',
  outline: 'bg-transparent py-[.625rem] text-white border-solid border-2 border-white hover:bg-white/10',
  'outline-dark': 'bg-transparent py-[.625rem] text-secondary border-solid border-2 border-secondary hover:bg-secondary/20'
};

const classList = `px-6 inline-block rounded-xl font-bold text-center leading-[19px] transition-colors duration-700 whitespace-nowrap ${classLists[props.variant]}`;
</script>

<template>
  <NuxtLink v-if="to" :to :class="classList">
    <slot />
  </NuxtLink>

  <button v-else :class="classList">
    <slot />
  </button>
</template>