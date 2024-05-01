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
</template>