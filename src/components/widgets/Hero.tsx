import { component$ } from "@builder.io/qwik";
import HeroCarousel from "./HeroCarousel";


export default component$(() => {
  return (
    <div class="relative bg-white/80 dark:bg-gray-900/80 overflow-hidden flex items-center justify-center mx-1.5 mt-1 mb-2 border-radius-dot-25 rounded-lg">

      <section class="relative rounded-lg  md:-mt-[76px] not-prose mx-1.5 my-1.5 bg-white/70 dark:bg-gray-900/75 border-radius-dot-25">
        <div class="relative max-w-7xl mx-auto px-4 sm:px-10 ">
          <div class="pt-0 md:pt-[60px] pointer-events-none"></div>
          <div class="pt-6 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
            <div class="basis-1/2 text-center lg:text-left pb-8 md:pb-16 mx-auto">
              {/* <a href="https://kas.fyi/token/krc20/WIENER" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-4 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                <span class="text-xs bg-primary-400 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Trade GHSTLY on Chainge!</span>
                <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              </a> */}
              <h1 class="text-5xl md:text-7xl font-bold leading-tighter tracking-tighter text-primary mb-4 font-heading dark:text-gray-200">

                <span class="text-primary">Website <span class="text-primary-300">Design & Development</span> Services</span>
              </h1>
              <div class="max-w-3xl mx-auto lg:max-w-none">
                <p class="text-xl mb-6 dark:text-slate-300">
                Transform your online presence with our custom web design and development services. We help business create stunning, fast, and secure websites. </p>
                <div class=" sm:max-w-md m-auto grid grid-cols-2 border-radius-dot-25 gap-3 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-7xl">
                  <a href="https://x.com/wienerKRC20">
                    <div class="flex w-full">

                      <button class="btn w-full bg-primary-300 dark:bg-primary-700 py-2 rounded-md ">
                        Follow on X
                      </button>

                    </div>
                  </a>
                  <a href="https://t.me/+Civ_RQYiZH03Y2I5">
                    <div class="flex w-full">

                      <button class="btn w-full bg-primary-200 dark:bg-primary-600 py-2 rounded-md ">
                        Join Telegram
                      </button>

                    </div>
                  </a>
                  <a href="/images/WIENER-WHITEPAPER.pdf" download="WIENER-WHITEPAPER.pdf">
                    <div class="flex w-full">

                      <button class="btn w-full bg-primary-100 dark:bg-primary-500 py-2 rounded-md ">
                        Whitepaper
                      </button>

                    </div>
                  </a>
                  <a href="https://kas.fyi/token/krc20/WIENER">
                    <div class="flex w-full">

                      <button class="btn w-full bg-primary-400 py-2 rounded-md ">
                        Buy $GHSTLY
                      </button>

                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="basis-1/2 pb-10">
         <HeroCarousel/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});
