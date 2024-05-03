<template>
  <div class="inline-block size-20 bg-primary/40 rounded-[1.25rem] group">

    <svg class="rounded-[1.25rem] backdrop-blur-sm group-hover:translate-x-2 group-hover:-translate-y-2 duration-500"
      width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_b_689_452)">
        <rect y="0.109375" width="79.9768" height="79.9768" rx="19.4276" fill="#022128" fill-opacity="0.8" />
        <rect x="0.161896" y="0.271271" width="79.653" height="79.653" rx="19.2657" stroke="url(#paint0_linear_689_452)"
          stroke-width="0.323793" />
      </g>

      <slot />

      <defs>
        <filter id="filter0_b_689_452" x="-4.85689" y="-4.74752" width="89.6906" height="89.6906"
          filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.42845" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_689_452" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_689_452" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_689_452" x1="39.9884" y1="0.109375" x2="39.9884" y2="80.0862"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="#7CDDAE" />
          <stop offset="1" stop-color="#6FE0EF" />
        </linearGradient>
      </defs>
    </svg>

  </div>
</template>