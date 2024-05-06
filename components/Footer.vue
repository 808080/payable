<template>
  <footer class="bg-[#E5EAE9] text-secondary">
    <div class="mx-auto max-w-[1720px] px-5 py-10 lg:pt-[90px] lg:pb-[100px]">
      <div class="lg:flex items-start">
        <NuxtLink to="/" class="ml-4 lg:ml-0 max-w-36 sm:max-w-[260px] w-full block mb-8">
          <Logo color="#000" class="w-full h-auto" />
        </NuxtLink>

        <div class="flex flex-wrap gap-x-8 font-bold mx-auto px-2">
          <ul v-for="(_, indexCol) in 4" class="mb-5 px-2">
            <template v-for="({ label, to }, indexLink) in linksFooter">
              <li v-if="indexCol < 2 || indexLink < 5" class="mb-3">
                <NuxtLink class="hover:text-primary-dark duration-200" :to>{{ label }}</NuxtLink>
              </li>
            </template>
          </ul>
        </div>

        <div class="mx-auto lg:ml-auto lg:mr-0 my-2 max-w-[260px] w-full">
          <div class="flex justify-between">
            <a href="https://www.linkedin.com/company/payabl-eu/" class="group" target="_blank"
              rel="noopener noreferrer">
              <ImagesSocialLinkedin class="group-hover:*:fill-primary-dark *:duration-200" />
            </a>
            <a href="https://www.facebook.com/Payabl/" class="group" target="_blank" rel="noopener noreferrer">
              <ImagesSocialFacebook class="group-hover:*:fill-primary-dark *:duration-200" />
            </a>
            <a href="https://www.instagram.com/payabl_eu/" class="group" target="_blank" rel="noopener noreferrer">
              <ImagesSocialInstagram class="group-hover:*:fill-primary-dark *:duration-200" />
            </a>
            <a href="https://twitter.com/payabl_eu" class="group" target="_blank" rel="noopener noreferrer">
              <ImagesSocialTwitter class="group-hover:*:fill-primary-dark *:duration-200" />
            </a>
          </div>

          <Button variant="outline-dark" class="w-full mt-9">Join our newsletter</Button>
        </div>
      </div>

      <div class="mt-9 lg:mt-20">
        <p class="font-karla text-xs font-medium text-center lg:mr-[27%]">Copyright © payabl. 2023, all Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>