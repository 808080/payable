<script setup lang="ts">
import IconMenu from '~/assets/images/menu.svg';
import IconClose from '~/assets/images/close.svg';

const links = [
  {
    label: 'Products',
    to: '/'
  },
  {
    label: 'Capabilities',
    to: '/capabilities'
  },
  {
    label: 'Integration',
    to: '/integration'
  },
  {
    label: 'About',
    to: '/about'
  }
];

const isOpen = ref(false);
const nav = ref<HTMLDivElement>();
</script>

<template>
  <header class="bg-gradient-to-b from-secondary via-secondary to-secondary md:to-secondary/0 lg:pt-3 sticky top-0">
    <div
      class="max-w-[1706px] p-3 mx-auto lg:flex items-center justify-between md:rounded-2xl bg-secondary/30 md:backdrop-blur-md relative">
      <div class="flex justify-between items-center p-2 lg:p-0">
        <NuxtLink to="/">
          <Logo />
        </NuxtLink>

        <button type="button" @click="isOpen = !isOpen" class="lg:hidden w-10 h-10">
          <img :src="isOpen ? IconClose : IconMenu" alt="" class="block w-full">
        </button>
      </div>

      <div class="absolute left-0 bg-secondary w-full lg:static overflow-hidden max-h-0 lg:!max-h-full duration-300"
        :style="`max-height: ${isOpen ? nav?.offsetHeight : 0}px`">
        <div ref="nav" class="p-3 lg:p-0 lg:flex justify-between w-full ">
          <nav class="lg:max-w-[700px] w-full mx-auto max-h-[400px] overflow-y-auto">
            <ul class="lg:flex items-center lg:text-center text-2xl lg:text-base">
              <li v-for="{ label, to } in links" :key="to" class="w-full">
                <NuxtLink :to class="p-2 hover:text-primary duration-200 font-bold block">
                  {{ label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <div class="justify-end sm:flex mt-3 lg:mt-0">
            <Button label="Log in" to="#" variant="transparent" class="sm:mr-2.5 w-full sm:w-auto" />
            <Button label="Contact Us" to="#" class="mt-2 sm:mt-0 w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>