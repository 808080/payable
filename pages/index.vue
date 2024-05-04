<script setup lang="ts">
import IconsLock from '../components/icons/Lock.vue';
import IconsGear from '../components/icons/Gear.vue';
import IconsMail from '../components/icons/Mail.vue';

const icons = {
  IconsLock,
  IconsGear,
  IconsMail,
};

const currentSolution = ref(0);
const currentTheme = ref(themes[0] as ThemeColor);
</script>

<template>
  <section class="max-w-[1706px] px-3 py-16 lg:flex justify-between items-center mx-auto text-center">
    <div class="lg:mt-16 lg:mr-12 lg:text-left mb-10">
      <h1 class="text-4xl md:text-6xl/[1.2] mb-6">Welcome to payabl.<br>an <span class="font-bold">omniverse</span> of
        payments.
      </h1>

      <p class="text-lg opacity-50 mb-9 max-w-2xl mx-auto lg:mx-0">
        Game-changing financial solutions for businesses with their eyes on global domination. Explore the endless
        payments possibilities with payabl. and level-up your business today.
      </p>

      <div>
        <Button class="mr-3">Let’s Talk</Button>
        <Button variant="outline" to="#" class="">What’s New?</Button>
      </div>
    </div>

    <img src="~/assets/images/welcome.png" alt="Welcome to payabl."
      class="md:max-w-[80%] lg:max-w-[50%] xl:max-w-[60%] lg:-mr-[8%] h-full inline-block">
  </section>

  <section class="py-16 lg:py-56">
    <div class="text-center max-w-6xl px-3 mx-auto mb-20">
      <h3 class="text-3xl lg:text-[2.5rem]/[1.2] mb-6">All about payabl. and what we do</h3>
      <p class="text-lg opacity-50">
        Our wide range of payments products includes card acquiring, banking services,local payment methods and POS
        terminals. We supercharge your business growth with oureasy-to-install payment tech, smart fraud prevention and
        dedicated customer support.Welcome to payabl. where we take care of the payments, so you can take care of
        business.
      </p>
    </div>

    <div class="opacity-60 max-w-[1920px] mx-auto">
      <div class="flex items-center mx-auto ml-[3%] gap-[7%]">
        <img v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" :src="`/logos/logo-${i}.svg`" alt="" />
      </div>

      <div class="flex items-center -mx-[2%] gap-[6.6%] my-14">
        <img v-for="i in [11, 12, 13, 5, 6, 7, 8, 9, 10, 11, 12]" :src="`/logos/logo-${i}.svg`" alt="" />
      </div>

      <div class="flex items-center -mx-[2%] gap-[6.6%]">
        <img v-for="i in [13, 8, 9, 10, 11, 12, 13, 8, 9, 10, 11]" :src="`/logos/logo-${i}.svg`" alt="" />
      </div>
    </div>
  </section>

  <section class="py-12 lg:py-28 max-w-[1415px] mx-auto md:flex justify-between items-center">
    <div class="px-5">
      <Badge class="mb-6">
        One Integration, Endless Solutions
      </Badge>

      <TransitionGroup tag="div" class="relative max-w-[540px]" appear enterFromClass="opacity-0 absolute top-0"
        enterActiveClass="transition-opacity duration-700 ease-linear"
        leaveActiveClass="transition-opacity duration-700 ease-linear" leaveToClass="opacity-0">
        <Transition v-for="(solution, index) in solutions" :key="index">
          <div v-if="currentSolution === index">
            <h2 class="text-3xl lg:text-[3.125rem]/[1.2] mb-6 max-w-md">
              {{ solution.title }}
            </h2>

            <p class="text-lg opacity-50">
              {{ solution.description }}
            </p>
          </div>
        </Transition>
      </TransitionGroup>

      <Dots :pagesTotal="solutions.length" @getPage="(p) => currentSolution = p - 1"
        classDots="bg-[#D9D9D9]/30 size-4 hover:bg-primary/70" classActive="bg-primary w-16" class="gap-2 my-6" />
    </div>

    <div>
      <ImagesPaymentMethods class="w-full h-auto max-w-xl md:max-w-none mx-auto mt-12 md:mt-0" />
    </div>
  </section>

  <section class="flex flex-wrap max-w-[1474px] mx-auto xl:py-28">
    <div v-for="feat in features" class="md:basis-1/2 lg:basis-1/3 px-5 xl:px-12 mt-20">
      <component :is="icons[feat.icon]" class="mb-6" />

      <h5 class="text-3xl sm:text-4xl font-bold mb-8">
        <Logo class="inline w-auto h-7 sm:h-auto" /> {{ feat.title }}
      </h5>

      <p class="text-lg opacity-50 max-w-xl">
        {{ feat.description }}
      </p>
    </div>
  </section>

  <section class="text-center py-20 md:py-36">
    <Badge class="mb-6">
      Testimonials
    </Badge>

    <div class="px-3">
      <h2 class="text-3xl lg:text-[3.125rem]/[1.2] mb-6">Real stories from real customers.</h2>

      <p class="text-lg opacity-50">See what our partners are saying about our services.</p>
    </div>

    <ImagesCustomTerminal :theme="currentTheme"
      class="mx-auto w-full h-auto max-w-[832px] my-5 md:mt-16 md:mb-12 p-4" />

    <Dots :pagesTotal="themes.length" @getPage="(p) => currentTheme = themes[p - 1]"
      classDots="opacity-40 size-5 sm:size-8 hover:opacity-70" :classPerDot="themesClasses"
      classActive="[&&]:opacity-100 w-16 sm:w-[100px]" class="gap-5 my-6 justify-center" />
  </section>
</template>