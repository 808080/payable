<script setup lang="ts">
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
</script>

<template>
  <header class="bg-gradient-to-b from-secondary via-secondary to-secondary/0 pt-3 sticky top-0">
    <div class="max-w-[1706px] p-3 mx-auto flex items-center justify-between rounded-2xl bg-secondary/30 backdrop-blur-md">
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>

      <nav class="max-w-[600px] w-full">
        <ul class="flex items-center text-center">
          <li v-for="{ label, to } in links" :key="to" class="w-full">
            <NuxtLink :to class="p-2 hover:text-primary duration-200 font-bold">
              {{ label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="flex">
        <Button label="Log in" to="#" variant="transparent" class="mr-2.5" />
        <Button label="Contact Us" to="#" />
      </div>
    </div>
  </header>
</template>